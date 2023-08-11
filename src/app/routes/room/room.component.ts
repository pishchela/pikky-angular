import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { SocketService } from "./services/socket.service";
import { RoomUser } from "./models/room-user.model";
import { Subscription } from "rxjs";

enum bordType {
  EDIT,
  GAME,
  SCORE
}

@Component({
  selector: 'pikky-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {
  public bordTypes = bordType;
  public currentBordType: bordType;
  public roomData: RoomUser[] = [];
  public currentUser: RoomUser;
  private _roomDataSub: Subscription;
  constructor() {
    this.roomData = [
      {
        username: 'Alex P',
        id: 'fdsfadsgdf',
        room: '4',
      },
      {
        username: 'Pasha',
        id: 'fdsfadsgdf',
        room: '4',
      },
      {
        username: 'Kate Gappy dappy duppy buppy',
        id: 'fdsfadsgdf',
        room: '4',
      },
    ]
  }
  // constructor(private route: ActivatedRoute, private _socketService: SocketService) {
  //
  // }

  public ngOnInit(): void {
    this.currentBordType = this.bordTypes.EDIT;
    // this._roomDataSub = this._socketService
    //   .getRoomData()
    //   .subscribe((roomData: RoomUser[]) => {
    //     this.roomData = roomData;
    // })
    //
    // // todo: rewrite later to resolver
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const roomName = params.get('roomName');
    //   this._socketService.joinRoom(Date.now().toString(), roomName);
    // });
  }

  public ngOnDestroy(): void {
    this._roomDataSub.unsubscribe();
  }
}
