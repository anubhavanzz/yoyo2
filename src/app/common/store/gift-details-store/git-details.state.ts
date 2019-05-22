import { GiftCard } from 'src/app/models/gift-card.model';

export class GiftDetailState {
    public giftDetail: GiftCard;
    public allGiftDetails: GiftCard[];
    constructor(giftDetails: GiftCard, allGiftDetails: GiftCard[]) {
        this.giftDetail = giftDetails;
        this.allGiftDetails = allGiftDetails;
    }
}
