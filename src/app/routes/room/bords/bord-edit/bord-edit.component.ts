import { Component, EventEmitter, Input } from "@angular/core";
import { Card, ICard } from "../../models/card.model";
import { User } from "../../models/user.model";
import { CardsService } from "../../services/cards.service";

@Component({
  selector: 'pikky-bord-edit',
  templateUrl: './bord-edit.component.html',
  styleUrls: ['./bord-edit.component.scss'],
})
export class BordEditComponent {
  @Input() currentUser: User;
  public cardCreated: EventEmitter<Card> = new EventEmitter<Card>();
  @Input() public cards: ICard[] | null = [];

  constructor(private _cardsService: CardsService) {}

  public createCard(): void {
    this._cardsService.editCard(new Card(this.currentUser));
  }

  public deleteCard(id: string): void {
    this._cardsService.deleteCard(id);
  }

  public editCard(card: ICard): void {
    this._cardsService.editCard(card);
  }

  public cardIdentify(index: number, item: Card): string {
    return item.id;
  }
}
