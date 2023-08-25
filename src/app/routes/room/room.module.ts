import { NgModule } from "@angular/core";
import { RoomComponent } from "./room.component";
import { CommonModule } from "@angular/common";
import { RoomRoutingModule } from "./room-routing.module";
import { CustomTranslationModule } from "../../core/translate/custom-translation.module";
import { SocketService } from "./services/socket.service";
import { BordEditComponent } from "./bords/bord-edit/bord-edit.component";
import { CreatePanelComponent } from "./bords/bord-edit/components/create-panel/create-panel.component";
import { CardComponent } from "../../shared/components/card/card.component";
import { UsersSidebarComponent } from "../../shared/components/users-sidebar/users-sidebar.component";
import { StartPanelComponent } from "./bords/bord-edit/components/start-panel/start-panel.component";
import { RoomEventService } from "./services/room-event.service";
import { AvatarComponent } from "../../shared/components/avatar/avatar.component";

const importComponents = [
  CardComponent,
  UsersSidebarComponent,
  AvatarComponent,
];

const moduleComponents = [
  RoomComponent,
  BordEditComponent,
  CreatePanelComponent,
  StartPanelComponent,
];

@NgModule({
  imports: [
    RoomRoutingModule,
    CommonModule,
    CustomTranslationModule,
    importComponents,
  ],
  declarations: [
    moduleComponents,
  ],
  providers: [
    SocketService,
    RoomEventService,
  ],
})
export class RoomModule {}
