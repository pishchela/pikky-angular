import { EventEmitter, Injectable } from '@angular/core';

import { ICard } from '../models/card.model';

@Injectable()
export class RoomEventService {
  public editCardEvent: EventEmitter<ICard> = new EventEmitter<ICard>();
  public userReadyEvent: EventEmitter<null> = new EventEmitter<null>();
  public deleteCardEvent: EventEmitter<{ id: string }> = new EventEmitter<{ id: string }>();
}
