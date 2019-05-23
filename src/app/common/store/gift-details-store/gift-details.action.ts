import { Action } from '@ngrx/store';
export const giftActionTypes: any = {
  GET_GIFT_DETAILS: 'GET_GIFT_DETAILS',
  GET_ALL_GIFT_DETAILS: 'GET_ALL_GIFT_DETAILS',
  GET_ALL_USERS: 'GET_ALL_USERS',
  GET_CURRENT_USER: 'GET_CURRENT_USER'
};
export class GiftDetailsAction implements Action {
  public type: string;
  public payload?: any;
  constructor(type: string, payload?: any) {
    this.type = type;
    this.payload = payload;
  }
}
