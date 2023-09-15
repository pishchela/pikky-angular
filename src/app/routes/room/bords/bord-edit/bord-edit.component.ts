import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
} from '@angular/core';
import { Card, ICard } from '../../models/card.model';
import { User } from '../../models/user.model';
import { RoomEventService } from '../../services/room-event.service';

@Component({
  selector: 'pikky-bord-edit',
  templateUrl: './bord-edit.component.html',
  styleUrls: ['./bord-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BordEditComponent {
  public cardCreated: EventEmitter<Card> = new EventEmitter<Card>();
  @Input() public cards: ICard[] | null = [];
  @Input() public users: User[] = [];

  constructor(private _roomEventService: RoomEventService) {}

  public createCard(): void {
    this._roomEventService.editCardEvent.emit((new Card(this.currentUser)));
  }

  public deleteCard(id: string): void {
    this._roomEventService.deleteCardEvent.emit({ id });
  }

  public editCard(card: ICard): void {
    this._roomEventService.editCardEvent.emit(card);
  }

  public cardIdentify(index: number, item: Card): string {
    return item.id;
  }

  public get currentUser(): User {
    return this.users?.find((user) => user.current) as User;
  }
}
