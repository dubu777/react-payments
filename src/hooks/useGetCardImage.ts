import Visa from '../assets/image/Visa.png';
import Master from '../assets/image/Mastercard.png';
import { isMasterCard, isVisaCard } from '@/utils/checkCardType';
import { useMemo } from 'react';

export default function useGetCardImage(cardInfo: Record<string, string>) {
  const getCardImage = () => {
    const cardBrandNumber = parseInt(cardInfo.cardNumber1.substring(0,2));
    if (isVisaCard(cardBrandNumber)) return Visa
    if (isMasterCard(cardBrandNumber)) return Master
  }

  const cardImage = useMemo(() => {
    if (cardInfo.cardNumber1 && cardInfo.cardNumber1.length >= 2) {
      return getCardImage()
    }
  }, [cardInfo.cardNumber1])

  return cardImage
}