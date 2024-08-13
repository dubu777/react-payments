import { CARD_COMPANY_CATEGORIES } from '@/constants/card';
import FieldTitle from './FieldTitle';
import { InputFieldContainer } from './InputField';
import SelectBox from './SelectBox';
import useInputStore from '@/store/useInputStore';

interface SelectCardCompanyFieldProps {
  handleNext: () => void;
}

export default function SelectCardCompanyField({handleNext}: SelectCardCompanyFieldProps) {
  const {setValues} = useInputStore()
  const handleSelect = (selectedOption: string) => {
    handleNext()
    setValues('cardCompany', selectedOption)
  }

  return (
    <>
      <InputFieldContainer>
        <FieldTitle
          title="카드사를 선택해 주세요"
          subtitle="현재 국내 카드사만 가능합니다."
        />
        <SelectBox
          options={CARD_COMPANY_CATEGORIES.map(company => company.name)}
          defaultValue="카드사를 선택해주세요"
          onSelect={handleSelect}
        />
      </InputFieldContainer>
    </>
  );
}
