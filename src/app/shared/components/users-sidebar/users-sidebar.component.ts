import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../../../routes/room/models/user.model';
import { UsersSidebarItemComponent } from './users-sidebar-item/users-sidebar-item.component';

@Component({
  standalone: true,
  selector: 'pikky-users-sidebar',
  templateUrl: './users-sidebar.component.html',
  styleUrls: ['./users-sidebar.component.scss'],
  imports: [
    CommonModule,
    UsersSidebarItemComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSidebarComponent {
  @Input() users: User[];

  public identify(index: number, item: User): string {
    return item.id;
  }
}
