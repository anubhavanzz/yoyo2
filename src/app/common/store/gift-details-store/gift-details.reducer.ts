import { GiftDetailsAction, giftActionTypes } from './gift-details.action';
import { GiftDetailState } from './git-details.state';
import { GIFT_DETAILS_DEFAULT } from './gift-details.defaults';

export let defaultGlobalState: GiftDetailState = new GiftDetailState(GIFT_DETAILS_DEFAULT);
/**
 * Define Reducer
 */
export function globalReducer(state: GiftDetailState = defaultGlobalState, action: GiftDetailsAction): any {
    switch (action.type) {
      case giftActionTypes.GET_GIFT_DETAILS:
        return { ...state, giftDetailState: action.payload };
    }
}
