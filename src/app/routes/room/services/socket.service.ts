import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';
import { io } from 'socket.io-client';

import { User } from '../models/user.model';
import {
  Card,
  CardViewType,
  ICard,
} from '../models/card.model';
import { SocketEvents } from '../enums/socket-events.enum';

// TODO: for each bord may be socket service will be different, but all they will have parent class with connection;
@Injectable()
export class SocketService {
  private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _cards$: BehaviorSubject<Card[]> = new BehaviorSubject<ICard[]>([]);
  private _socket = io(
    'ws://localhost:8080',
    {
      transports: [
        'websocket',
        'polling',
        'flashsocket',
      ],
    },
  );
  private _currentRoomName: string;

  constructor() {
    this._getUsers();
    this._getCards();
    this._trackBordTypes();
  }

  public joinRoom(username: string, room: string): void {
    this._currentRoomName = room;
    this._socket.emit(SocketEvents.JOIN, { username, room }, (error: any) => {
      if (error) {
        console.warn(error);
      }
    });
  }

  public getUsers(): Observable<User[]> {
    return this._users$.asObservable();
  }

  public getCards(): Observable<ICard[]> {
    return this._cards$.asObservable();
  }

  public deleteCard(id: string): void {
    this._socket.emit(SocketEvents.DELETE_CARD, { id, room: this._currentRoomName }, (error: any) => {
      if (error) {
        console.warn(error);
      }
    });
  }

  // for creation and edition
  public editCard(card: ICard): void {
    this._socket.emit(SocketEvents.EDIT_CARD, { card, room: this._currentRoomName }, (error: any) => {
      if (error) {
        console.warn(error);
      }
    });
  }

  public setCurrentUserReady(): void {
    this._socket.emit(SocketEvents.USER_READY, { room: this._currentRoomName }, (error: any) => {
      if (error) {
        console.warn(error);
      }
    });
  }

  private _trackBordTypes(): void {
    this._socket.on(SocketEvents.SET_BORD_TYPE_GAME, () => {
      console.warn('set bord type to game');
    });
    this._socket.on(SocketEvents.SET_BORD_TYPE_EDIT, () => {
      console.warn('set bord type to edit');
    });
  }

  private _getUsers(): void {
    this._socket.on(SocketEvents.USER_DATA, (data: { users: User[] }) => {
      console.warn(data.users);
      this._users$.next(this.setCurrentUser(data.users, this._socket.id));
    });
  }

  private _getCards(): void {
    this._socket.on(SocketEvents.CARDS_DATA, (data: { cards: ICard[] }) => {
      const cards = data.cards.map((card) => {
        card.viewType = CardViewType.View;
        return card;
      })
      this._cards$.next(cards);
    });
  }

  private setCurrentUser(users: User[], currentId: string): User[] {
    const mappedUsers = users.map((user) => {
      user.current = user.id === currentId
      return user;
    });
    return mappedUsers ? mappedUsers : [];
  }
}
