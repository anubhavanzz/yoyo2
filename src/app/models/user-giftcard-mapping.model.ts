import { GiftCard } from './gift-card.model';

export class UserGiftCardMapping {
    $key: string;
    sender: string;
    receiver: string;
    giftCard: GiftCard;
    status: string;
}