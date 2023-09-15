import { v4 as uuidv4 } from 'uuid';

import { User } from './user.model';

export interface ICard {
  id: string;
  key: string;
  description: string;
  owner: User;
  viewType: CardViewType;
}

export class Card implements ICard {
  public key: string;
  public description: string;
  public owner: User;
  public id: string;
  public viewType: CardViewType;
  constructor(owner: User, viewType = CardViewType.Edit, key: string = '', description: string = '') {
    this.key = key;
    this.description = description;
    this.owner = owner;
    this.viewType = viewType;
    this.id = uuidv4();
  }
}


export enum CardViewType {
  Edit = 'EDIT',
  View = 'VIEW'
}
