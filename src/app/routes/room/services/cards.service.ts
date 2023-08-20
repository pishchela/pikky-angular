import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ICard } from "../models/card.model";

@Injectable()
export class CardsService {
  private _cardEdit$: Subject<ICard> = new Subject<ICard>();
  private _cardDelete$: Subject<{ id: string }> = new Subject<{ id: string }>();

  public editCard(card: ICard): void {
    this._cardEdit$.next(card);
  }

  public cardEditEvent(): Observable<ICard> {
    return this._cardEdit$.asObservable();
  }

  public deleteCard(id: string): void {
    this._cardDelete$.next({ id });
  }

  public deleteCardEvent(): Observable<{ id: string }> {
    return this._cardDelete$.asObservable();
  }
}
