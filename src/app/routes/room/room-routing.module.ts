import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from "./room.component";
import { roomResolver } from "./resolvers/room.resolver";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    resolve: {
      roomResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
