import { Action } from '@ngrx/store';
export const giftActionTypes: any = {
    GET_GIFT_DETAILS : 'GET_GIFT_DETAILS',
    GET_ALL_GIFT_DETAILS : 'GET_ALL_GIFT_DETAILS'
};
export class GiftDetailsAction implements Action {
    public type: string;
    public payload?: any;
    constructor(type: string, payload?: any) {
      this.type = type;
      this.payload = payload;
    }
  }
