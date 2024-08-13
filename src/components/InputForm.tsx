import INPUT_TYPE_CATEGORIES from "@/constants/inputType";
import styled from "styled-components";
import InputField from "./InputField";
import SelectCardCompanyField from "./SelectCardCompanyField";
import useStep from "@/hooks/useStep";
import { INPUT_TITLE } from "@/constants/message";

export default function InputForm() {
  const { step, handleNext } = useStep();
  return (
    <InputFormContainer>
      {step["password"] && (
        <InputField
          title={INPUT_TITLE.PASSWORD.TITLE}
          inputType={INPUT_TYPE_CATEGORIES.PASSWORD}
          handleNext={() => handleNext("")}
        />
      )}
      {step["cvc"] && (
        <InputField
          title={INPUT_TITLE.CVC.TITLE}
          inputType={INPUT_TYPE_CATEGORIES.CVC}
          handleNext={() => handleNext("password")}
        />
      )}
      {step["userName"] && (
        <InputField
          title={INPUT_TITLE.USER_NAME.TITLE}
          inputType={INPUT_TYPE_CATEGORIES.USER_NAME}
          handleNext={() => handleNext("cvc")}
        />
      )}
      {step["expiryDate"] && (
        <InputField
          title={INPUT_TITLE.EXPIRY_DATE.TITLE}
          subtitle={INPUT_TITLE.EXPIRY_DATE.SUBTITLE}
          inputType={INPUT_TYPE_CATEGORIES.EXPIRY_DATE}
          handleNext={() => handleNext("userName")}
        />
      )}
      {step["cardCompany"] && <SelectCardCompanyField />}
      <InputField
        title={INPUT_TITLE.CARD_NUMBER.TITLE}
        subtitle={INPUT_TITLE.CARD_NUMBER.SUBTITLE}
        inputType={INPUT_TYPE_CATEGORIES.CARD_NUMBER}
        handleNext={() => handleNext("cardCompany")}
      />
    </InputFormContainer>
  );
}

const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 70%;
`;
