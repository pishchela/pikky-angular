import { ActivatedRouteSnapshot, ResolveFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { SocketService } from "../services/socket.service";

export const roomResolver: ResolveFn<any> =
  (route: ActivatedRouteSnapshot) => {
    const username = route.queryParams['username'];
    const roomName = route.params['roomName'];
    if (!username || !roomName) {
      inject(Router).navigate(['/']);
    }
    return inject(SocketService).joinRoom(username, roomName);
  };
