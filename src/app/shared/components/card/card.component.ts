import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Card, CardViewType } from "../../../routes/room/models/card.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TextareaComponent } from "../../ui-kit/textarea/textarea.component";

@Component({
  standalone: true,
  selector: 'pikky-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    TextareaComponent,
  ]
})
export class CardComponent {
  @Output() public deleteCardClicked: EventEmitter<string> = new EventEmitter<string>();
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
  }

  public editCard(): void {
    this.card.viewType = this.cardViewTypes.Edit;
  }

  public get isDisabled(): boolean {
    return this.card.viewType !== this.cardViewTypes.Edit;
  }
}
