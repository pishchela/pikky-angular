import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RoomEventService } from '../../../../services/room-event.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'pikky-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPanelComponent {
  @Input() public users: User[] = [];
  @Input() public isReady: boolean = false;
  constructor(private _roomEventService: RoomEventService) {}

  public ready(): void {
    this._roomEventService.userReadyEvent.emit();
  }

  get readyUsers(): User[] {
    console.warn(this.users.filter((user) => user.isReady));
    return this.users.filter((user) => user.isReady);
  }
}
