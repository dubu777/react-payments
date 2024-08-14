import styled from "styled-components";
import FieldTitle from "./FieldTitle";
import { InputType } from "@/types/input";
import { Input } from "./Input";
import useInputStore from "@/store/useInputStore";
import useNextRef from "@/hooks/useNextRef";
import { Card } from "@/types/card";
import isInputFieldCompleted from "@/utils/isInputCompleted";
import useInputComplete from "@/hooks/useInputComplete";
import { DEFAULT_CARD_BOOLEAN } from "@/constants/card";
import { useEffect } from "react";

interface InputFieldProps {
  inputType: InputType;
  title: string;
  subtitle?: string;
  handleNext: () => void;
  inputFieldName: keyof Card;
}

export default function InputField({
  inputType,
  title,
  subtitle,
  handleNext,
  inputFieldName,
}: InputFieldProps) {
  const { errorMessages, values } = useInputStore();
  const { inputRef, handleInputNext } = useNextRef({
    inputType,
    handleNext,
  });
  const { handleComplete } = useInputComplete();
  const currentErrors = errorMessages[inputType.inputLabel] || {};
  const isCompleted = isInputFieldCompleted({
    currentErrors,
    values,
    inputType,
  });
  console.log(isCompleted, inputFieldName, "인풋필드에서 검증");

  useEffect(() => {
    handleComplete(inputFieldName, isCompleted);
  }, [isCompleted]);

  return (
    <InputFieldContainer>
      <FieldTitle title={title} subtitle={subtitle} />
      <Label>{inputType.inputLabel}</Label>
      <InputWrapper>
        {inputType.inputInfo.map((info, index) => (
          <Input
            key={info.property}
            ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
            info={info}
            inputIndex={index}
            inputLabel={inputType.inputLabel}
            isError={!!currentErrors[index]}
            onNext={() => {
              handleInputNext(index);
            }}
          />
        ))}
      </InputWrapper>
      <ErrorMessage>
        {Object.values(currentErrors).find((message) => message !== "")}
      </ErrorMessage>
    </InputFieldContainer>
  );
}

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
`;

const Label = styled.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 9.5px;
`;
