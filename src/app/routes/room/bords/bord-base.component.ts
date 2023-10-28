import { Directive, Input } from '@angular/core';

import { Card, ICard } from '../models/card.model';
import { User } from '../models/user.model';


@Directive()
export default class BaseBordComponent {
  @Input() public cards: ICard[] | null = [];
  @Input() public users: User[] = [];

  public cardIdentify(index: number, item: Card): string {
    return item.id;
  }

  public get currentUser(): User {
    return this.users?.find((user) => user.current) as User;
  }
}
