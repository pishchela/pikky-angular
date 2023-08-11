import {
  Component,
  Input,
} from "@angular/core";
import { RoomUser } from "../../../routes/room/models/room-user.model";
import { UsersSidebarItemComponent } from "./users-sidebar-item/users-sidebar-item.component";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'pikky-users-sidebar',
  templateUrl: './users-sidebar.component.html',
  styleUrls: ['./users-sidebar.component.scss'],
  imports: [
    CommonModule,
    UsersSidebarItemComponent,
  ],
})
export class UsersSidebarComponent {
  @Input() users: RoomUser[];
}
