import {
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { SocketService } from "./services/socket.service";
import { User } from "./models/user.model";
import { Observable, Subject, takeUntil } from "rxjs";
import { ICard } from "./models/card.model";
import { RoomEventService } from "./services/room-event.service";

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
  public currentBordType: bordType = this.bordTypes.EDIT;
  public users$: Observable<User[]> = this._socketService.getUsers()
  public cards$: Observable<ICard[]> = this._socketService.getCards();
  private _destroy$ = new Subject<any>();
  constructor(
    private _socketService: SocketService,
    private _roomEventService: RoomEventService,
    ) {

  }

  public ngOnInit(): void {
    this._subscribeOnRoomEvents();
  }


  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private _subscribeOnRoomEvents(): void {
    this._roomEventService.editCardEvent
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((card: ICard) => {
        this._socketService.editCard(card);
      });

    this._roomEventService.deleteCardEvent
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(({ id }) => {
        this._socketService.deleteCard(id);
      });

    this._roomEventService.userReadyEvent
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        // TODO: dont emit where user is already ready;
        this._socketService.setCurrentUserReady();
      });


  }
}
