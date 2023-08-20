import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { io } from "socket.io-client";

import { User } from "../models/user.model";
import {
  Card,
  CardViewType,
  ICard,
} from "../models/card.model";

// TODO: for each bord may be socket service will be different, but all they will have parent class with connection;
@Injectable()
export class SocketService {
  private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _cards$: BehaviorSubject<Card[]> = new BehaviorSubject<ICard[]>([]);
  private _socket = io(
    "ws://localhost:8080",
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
  }

  public joinRoom(username: string, room: string): void {
    this._currentRoomName = room;
    // TODO: before join room generate random avatarId
    this._socket.emit('join', { username, room }, (error: any) => {
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
    this._socket.emit('deleteCard', { id, room: this._currentRoomName }, (error: any) => {
      if (error) {
        console.warn(error);
      }
    });
  }

  // for creation and edition
  public editCard(card: ICard): void {
    this._socket.emit('editCard', { card, room: this._currentRoomName }, (error: any) => {
      if (error) {
        console.warn(error);
      }
    });
  }

  private _getUsers(): void {
    this._socket.on('userData', (data: { users: User[] }) => {
      this._users$.next(this.setCurrentUser(data.users, this._socket.id));
    });
  }

  private _getCards(): void {
    this._socket.on('cardsData', (data: { cards: ICard[] }) => {
      const cards = data.cards.map((card) => {
        card.viewType = CardViewType.View;
        return card;
      })
      this._cards$.next(cards);
    });
  }

  private setCurrentUser(users: User[], currentId: string): User[] {
    return users.map((user) => {
      user.current = user.id === currentId
      return user;
    });
  }
}
