import { GiftCard } from 'src/app/models/gift-card.model';

export const GIFT_DETAILS_DEFAULT: GiftCard = new GiftCard(undefined,
    undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined);

export const ALL_GIFT_DETAILS_DEFAULT: GiftCard[] = [GIFT_DETAILS_DEFAULT];
