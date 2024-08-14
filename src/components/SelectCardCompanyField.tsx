import { CARD_COMPANY_CATEGORIES } from "@/constants/card";
import FieldTitle from "./FieldTitle";
import { InputFieldContainer } from "./InputField";
import SelectBox from "./SelectBox";
import useInputStore from "@/store/useInputStore";
import { Card } from "@/types/card";
import useInputComplete from "@/hooks/useInputComplete";

interface SelectCardCompanyFieldProps {
  handleNext: () => void;
  inputFieldName: keyof Card;
}

const animationVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

export default function SelectCardCompanyField({
  handleNext,
  inputFieldName,
}: SelectCardCompanyFieldProps) {
  const { handleComplete } = useInputComplete();
  const { setValues } = useInputStore();
  const handleSelect = (selectedOption: string) => {
    handleNext();
    handleComplete(inputFieldName, true);
    setValues(inputFieldName, selectedOption);
  };

  return (
    <>
      <InputFieldContainer
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <FieldTitle
          title="카드사를 선택해 주세요"
          subtitle="현재 국내 카드사만 가능합니다."
        />
        <SelectBox
          options={CARD_COMPANY_CATEGORIES.map((company) => company.name)}
          defaultValue="카드사를 선택해주세요"
          onSelect={handleSelect}
        />
      </InputFieldContainer>
    </>
  );
}
