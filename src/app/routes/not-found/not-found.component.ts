import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'pikky-not-found',
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {

}
