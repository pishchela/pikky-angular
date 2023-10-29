import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export class Notification {
  message: string;
  action: string;
  duration: number;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
}
