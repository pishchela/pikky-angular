import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import BaseBord from '../bord-base';

@Component({
  selector: 'pikky-bord-game',
  templateUrl: './bord-game.component.html',
  styleUrls: [
    './bord-game.component.scss',
    '../bord-base.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BordGameComponent extends BaseBord{

}
