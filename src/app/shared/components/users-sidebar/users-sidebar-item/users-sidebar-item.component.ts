import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { User } from '../../../../routes/room/models/user.model';
import { AvatarComponent } from '../../avatar/avatar.component';

@Component({
  standalone: true,
  selector: 'pikky-users-sidebar-item',
  templateUrl: './users-sidebar-item.component.html',
  styleUrls: ['./users-sidebar-item.component.scss'],
  imports: [
    AvatarComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSidebarItemComponent {
  @Input() user: User;
}
