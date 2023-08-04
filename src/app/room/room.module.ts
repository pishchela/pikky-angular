import { NgModule } from "@angular/core";
import { RoomComponent } from "./room.component";
import { CommonModule } from "@angular/common";
import { RoomRoutingModule } from "./room-roouting.module";
import { CustomTranslationModule } from "../core/translate/custom-translation.module";

@NgModule({
  imports: [
    RoomRoutingModule,
    CommonModule,
    CustomTranslationModule,
  ],
  declarations: [
    RoomComponent,
  ],
})
export class RoomModule {}
