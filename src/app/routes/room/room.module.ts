import { NgModule } from "@angular/core";
import { RoomComponent } from "./room.component";
import { CommonModule } from "@angular/common";
import { RoomRoutingModule } from "./room-roouting.module";
import { CustomTranslationModule } from "../../core/translate/custom-translation.module";
import { SocketService } from "./services/socket.service";

@NgModule({
  imports: [
    RoomRoutingModule,
    CommonModule,
    CustomTranslationModule,
  ],
  declarations: [
    RoomComponent,
  ],
  providers: [
    SocketService,
  ],
})
export class RoomModule {}
