import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { Notification } from '../models/notification.interface';

const NOTIFICATION_DURATION = 4000000;
const NOTIFICATION_TEXT = 'Notification popup';
const NOTIFICATION_VERTICAL_POSITION = 'top';
const NOTIFICATION_HORIZONTAL_POSITION = 'right';
const NOTIFICATION_ACTION = 'OKK';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  public showNotification(notification: Partial<Notification>) {
    const config: MatSnackBarConfig = {
      horizontalPosition: notification?.horizontalPosition ? notification.horizontalPosition : NOTIFICATION_HORIZONTAL_POSITION,
      verticalPosition: notification?.verticalPosition ? notification.verticalPosition : NOTIFICATION_VERTICAL_POSITION,
      duration: notification.duration ? notification.duration : NOTIFICATION_DURATION,
      panelClass: ['notification'],
    }

    this._snackBar.open(
      notification.message ? notification.message : NOTIFICATION_TEXT,
      notification.action ? notification.action : NOTIFICATION_ACTION,
      config,
    );
  }
}
