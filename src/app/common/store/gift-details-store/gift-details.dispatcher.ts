import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { GiftDetailState } from './git-details.state';

@Injectable()

export class GiftDetailDispatcher {
  constructor(private giftDetailStore: Store<GiftDetailState>) {  }
  public globalDispatch(type: any, payload: any): any {
    this.giftDetailStore.dispatch({
      type: type,
      payload: payload
    });
  }
}
