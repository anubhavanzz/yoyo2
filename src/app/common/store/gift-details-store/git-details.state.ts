import { GiftCard } from 'src/app/models/gift-card.model';
import { User } from 'src/app/models/user.model';

export class GiftDetailState {
    public giftDetail: GiftCard;
    public allGiftDetails: GiftCard[];
    public allUsers: User[];
    public currentUser: User;
    constructor(giftDetails: GiftCard, allGiftDetails: GiftCard[], allUser: User[], currentUser: User) {
        this.giftDetail = giftDetails;
        this.allGiftDetails = allGiftDetails;
        this.allUsers = allUser;
        this.currentUser = currentUser;

    }
}
