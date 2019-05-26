import { GiftCard } from './gift-card.model';

export class UserGiftCardMapping {
    $key: string;
    sender: string;
    receiver: string;
    giftCardName: string;
    giftCardId: string;
    isRedeem: boolean;
    points: number;
    createdDate: string;

}
