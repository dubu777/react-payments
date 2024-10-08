export interface CardNumbers {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export interface ExpiryDate {
  month: string;
  year: string;
}

export interface CardCompany {
  name: string;
  color: string;
}

export interface Card {
  cardNumber: CardNumbers;
  expiryDate: ExpiryDate;
  userName: string;
  cardCompany: CardCompany;
  cvc: string;
  password: string;
}

export interface CardInfo {
  cardCompany: string;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  cvc: string;
  month: string;
  password: string;
  userName: string;
  year: string;
}
