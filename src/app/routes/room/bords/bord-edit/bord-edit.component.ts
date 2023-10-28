import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
} from '@angular/core';

import { Card, ICard } from '../../models/card.model';
import { RoomEventService } from '../../services/room-event.service';
import BaseBordComponent from '../bord-base.component';

@Component({
  selector: 'pikky-bord-edit',
  templateUrl: './bord-edit.component.html',
  styleUrls: ['./bord-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BordEditComponent extends BaseBordComponent{

  public cardCreated: EventEmitter<Card> = new EventEmitter<Card>();

  constructor(private _roomEventService: RoomEventService) {
    super();
  }

  public createCard(): void {
    this._roomEventService.editCardEvent.emit((new Card(this.currentUser)));
  }

  public deleteCard(id: string): void {
    this._roomEventService.deleteCardEvent.emit({ id });
  }

  public editCard(card: ICard): void {
    this._roomEventService.editCardEvent.emit(card);
  }
}
