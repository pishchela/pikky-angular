import { NgModule } from "@angular/core";
import { RoomComponent } from "./room.component";
import { CommonModule } from "@angular/common";
import { RoomRoutingModule } from "./room-roouting.module";

@NgModule({
  imports: [
    RoomRoutingModule,
    CommonModule
  ],
  declarations: [
    RoomComponent,
  ],
})
export class RoomModule {}
