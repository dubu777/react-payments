import { CARD_COMPANY_CATEGORIES } from '@/constants/card';
import FieldTitle from './FieldTitle';
import { InputFieldContainer } from './InputField';
import SelectBox from './SelectBox';

interface SelectCardCompanyFieldProps {
  handleNext: () => void;
}

export default function SelectCardCompanyField({handleNext}: SelectCardCompanyFieldProps) {


  return (
    <>
      <InputFieldContainer>
        <FieldTitle
          title="카드사를 선택해 주세요"
          subtitle="현재 국내 카드사만 가능합니다."
        />
        <SelectBox
          options={CARD_COMPANY_CATEGORIES}
          selectedOption="카드사를 선택해주세요"
          onChange={handleNext}
        />
      </InputFieldContainer>
    </>
  );
}
