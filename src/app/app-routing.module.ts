import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./routes/home/home.component";
import { CreateRoomComponent } from "./routes/create-room/create-room.component";
import { NotFoundComponent } from "./routes/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create-room',
    component: CreateRoomComponent,
  },
  {
    path: ':id',
    loadChildren: () => import('./routes/room/room.module').then(m => m.RoomModule),
  },
  {path: '404', component: NotFoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
