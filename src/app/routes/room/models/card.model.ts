import { RoomUser } from "./room-user.model";

import { v4 as uuidv4 } from 'uuid';

export interface ICard {
  id: string;
  key: string;
  description: string;
  owner: RoomUser;
  viewType: CardViewType;
}

export class Card implements ICard {
  public key: string;
  public description: string;
  public owner: RoomUser;
  public id: string;
  public viewType: CardViewType;
  constructor(owner: RoomUser, viewType = CardViewType.Edit, key: string = '', description: string = '') {
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
