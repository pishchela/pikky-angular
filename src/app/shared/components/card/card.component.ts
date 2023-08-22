import {
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Card, CardViewType } from "../../../routes/room/models/card.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TextareaComponent } from "../../ui-kit/textarea/textarea.component";
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  standalone: true,
  selector: 'pikky-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    TextareaComponent,
    AvatarComponent,
  ],
})
export class CardComponent {
  @Output() public deleteCardClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() public saveCardChanges: EventEmitter<Card> = new EventEmitter<Card>();
  @Input() public card: Card;
  public cardViewTypes = CardViewType;
  public disabled = false;

  get username(): string | null {
    return this.card.owner?.username ? this.card.owner.username : null;
  }
  public deleteCard(): void {
    this.deleteCardClicked.emit(this.card.id);
  }

  public saveCard(): void {
    this.card.viewType = this.cardViewTypes.View;
    this.saveCardChanges.emit(this.card);
  }

  public editCard(): void {
    this.card.viewType = this.cardViewTypes.Edit;
  }

  public get isDisabled(): boolean {
    return this.card.viewType !== this.cardViewTypes.Edit;
  }
}
