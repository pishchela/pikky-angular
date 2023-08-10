import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'pikky-create-panel',
  templateUrl: './create-panel.component.html',
  styleUrls: ['./create-panel.component.scss'],
})
export class CreatePanelComponent {
  @Output() public createCardClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() public uploadCardsClicked: EventEmitter<any> = new EventEmitter<any>();
}
