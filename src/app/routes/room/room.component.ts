import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { SocketService } from "./services/socket.service";
import { RoomUser } from "./models/room-user.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html'
})
export class RoomComponent implements OnInit, OnDestroy {
  public roomData: RoomUser[] = [];
  private _roomDataSub: Subscription;
  constructor(private route: ActivatedRoute, private _socketService: SocketService) {

  }

  public ngOnInit(): void {
    this._roomDataSub = this._socketService
      .getRoomData()
      .subscribe((roomData: RoomUser[]) => {
        this.roomData = roomData;
    })

    // todo: rewrite later to resolver
    this.route.paramMap.subscribe((params: ParamMap) => {
      const roomName = params.get('roomName');
      this._socketService.joinRoom(Date.now().toString(), roomName);
    });
  }

  public ngOnDestroy(): void {
    this._roomDataSub.unsubscribe();
  }
}
