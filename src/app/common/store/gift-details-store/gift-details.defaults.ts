import { GiftCard } from 'src/app/models/gift-card.model';
import { User } from 'src/app/models/user.model';

export const GIFT_DETAILS_DEFAULT: GiftCard = new GiftCard(undefined,
    undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined);

export const ALL_GIFT_DETAILS_DEFAULT: GiftCard[] = [GIFT_DETAILS_DEFAULT];

export const CURRENT_USER: User = new User(undefined, undefined, undefined, undefined, undefined);
export const ALL_USERS_DEFAULT: User[] = [CURRENT_USER];
