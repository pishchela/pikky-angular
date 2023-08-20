import {
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { SocketService } from "./services/socket.service";
import { User } from "./models/user.model";
import { Observable, Subject, takeUntil } from "rxjs";
import { ICard } from "./models/card.model";
import { CardsService } from "./services/cards.service";

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
  public users: User[] = [];
  public cards: Observable<ICard[]> = this._socketService.getCards();
  private _destroy$ = new Subject<any>();
  constructor(
    private _socketService: SocketService,
    private _cardsService: CardsService,
    ) {

  }

  public ngOnInit(): void {
    this.currentBordType = this.bordTypes.EDIT;
    this._subscribeOnData();
    this._subscribeOnCardsActions();
  }

  public get currentUser(): User {
    return this.users?.find((user) => user.current) as User;
  }

  private _subscribeOnData(): void {
    this._socketService
      .getUsers()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }


  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private _subscribeOnCardsActions(): void {
    this._cardsService.cardEditEvent()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((card: ICard) => {
        this._socketService.editCard(card);
      });

    this._cardsService.deleteCardEvent()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(({ id }) => {
        this._socketService.deleteCard(id);
      });

  }
}
