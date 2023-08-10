import { Component, EventEmitter, Input } from "@angular/core";
import { Card } from "../../models/card.model";
import { RoomUser } from "../../models/room-user.model";

@Component({
  selector: 'pikky-bord-edit',
  templateUrl: './bord-edit.component.html',
  styleUrls: ['./bord-edit.component.scss'],
})
export class BordEditComponent {
  @Input() currentUser: RoomUser;
  public cardCreated: EventEmitter<Card> = new EventEmitter<Card>();
  public cards: Card[] = [];

  public createCard(): void {
    this.cards.push(new Card(this.currentUser));
  }

  public deleteCard(id: string): void {
    const deleteIndex = this.cards.findIndex((card) => card.id === id);
    if (deleteIndex >= 0) {
      this.cards.splice(deleteIndex, 1);
    }
  }

  public editCard(id: string): void {

  }
}
