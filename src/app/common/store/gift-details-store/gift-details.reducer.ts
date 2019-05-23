import { GiftDetailsAction, giftActionTypes } from './gift-details.action';
import { GiftDetailState } from './git-details.state';
import { GIFT_DETAILS_DEFAULT, ALL_GIFT_DETAILS_DEFAULT, ALL_USERS_DEFAULT, CURRENT_USER } from './gift-details.defaults';

export let defaultGlobalState: GiftDetailState = new GiftDetailState(GIFT_DETAILS_DEFAULT,
    ALL_GIFT_DETAILS_DEFAULT, ALL_USERS_DEFAULT, CURRENT_USER);
/**
 * Define Reducer
 */
export function yoyoReducer(state: GiftDetailState = defaultGlobalState, action: GiftDetailsAction): any {
    switch (action.type) {
        case giftActionTypes.GET_GIFT_DETAILS:
            return { ...state, giftDetailState: action.payload };
        case giftActionTypes.GET_ALL_GIFT_DETAILS:
            return { ...state, giftAllDetailState: action.payload };
        case giftActionTypes.GET_ALL_USERS:
            return { ...state, allUsers: action.payload };
        case giftActionTypes.GET_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        default:
            return state;
    }
}
