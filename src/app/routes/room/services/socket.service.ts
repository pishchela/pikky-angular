import { Injectable } from "@angular/core";

import { io } from "socket.io-client";
import { BehaviorSubject, Observable } from "rxjs";
import { RoomUser } from "../models/room-user.model";

@Injectable()
export class SocketService {
  private _roomData$: BehaviorSubject<RoomUser[]> = new BehaviorSubject<RoomUser[]>([]);
  private _socket = io(
    "ws://localhost:8080",
    {
      transports: ['websocket', 'polling', 'flashsocket'],
    },
  );

  public joinRoom(username: string, room: string | null): void {
    if (!room) {
      // TODO: here to home component;
    }
    this._socket.emit('join', { username, room }, (error: any) => {
      if (error) {
        console.warn(error);
      }
    });
  }

  public getRoomData(): Observable<RoomUser[]> {
    this._socket.on('roomData', (data: { room: string, users: RoomUser[]  }) => {
      this._roomData$.next(data.users);
    })


    return this._roomData$.asObservable();
  }
}
