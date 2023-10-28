import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import BaseBordComponent from '../bord-base.component';

@Component({
  selector: 'pikky-bord-game',
  templateUrl: './bord-game.component.html',
  styleUrls: ['./bord-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BordGameComponent extends BaseBordComponent{

}
