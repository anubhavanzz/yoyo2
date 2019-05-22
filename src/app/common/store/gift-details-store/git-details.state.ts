import { GiftCard } from 'src/app/models/gift-card.model';

export class GiftDetailState {
    public giftDetail: GiftCard;
    constructor(giftDetails: GiftCard) {
        this.giftDetail = giftDetails;
    }
}
