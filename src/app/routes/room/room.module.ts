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
import { CardsService } from "./services/cards.service";

const components = [
  CardComponent,
  UsersSidebarComponent,
];

@NgModule({
  imports: [
    RoomRoutingModule,
    CommonModule,
    CustomTranslationModule,
    components,
  ],
  declarations: [
    RoomComponent,
    BordEditComponent,
    CreatePanelComponent,
  ],
  providers: [
    SocketService,
    CardsService,
  ],
})
export class RoomModule {}
