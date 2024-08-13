type InputLabel = '카드번호' | '유효기간' | '소유자 이름' | 'CVC' | '비밀번호 앞 2자리';

export type InputCateory = 'CARD_NUMBER' | 'EXPIRY_DATE' | 'USER_NAME' | 'CVC' | 'PASSWORD';

export interface InputInfo {
  property: string;
  validateType: string;
  maxLength: number;
  minLength: number;
  placeHolder: string;
  type?: string;
};

export interface InputType {
  inputLabel: InputLabel;
  inputInfo: InputInfo[];
};