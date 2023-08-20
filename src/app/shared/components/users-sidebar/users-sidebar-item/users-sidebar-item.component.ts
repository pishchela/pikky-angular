import { Component, Input } from "@angular/core";
import { User } from "../../../../routes/room/models/user.model";

@Component({
  standalone: true,
  selector: 'pikky-users-sidebar-item',
  templateUrl: './users-sidebar-item.component.html',
  styleUrls: ['./users-sidebar-item.component.scss'],
})
export class UsersSidebarItemComponent {
  @Input() user: User;
}
