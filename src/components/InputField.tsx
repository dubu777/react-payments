import styled from "styled-components";
import FieldTitle from "./FieldTitle";
import { InputType } from "@/types/input";
import { Input } from "./Input";
import useInputStore from "@/store/useInputStore";
import useNextRef from "@/hooks/useNextRef";

interface InputFieldProps {
  inputType: InputType;
  title: string;
  subtitle?: string;
  handleNext: () => void;
}

export default function InputField({inputType, title, subtitle, handleNext}: InputFieldProps) {
  const {errorMessages} = useInputStore();
  const {inputRef, handleInputNext} = useNextRef({
    inputType,
    handleNext,
  });
  const currentErrors = errorMessages[inputType.inputLabel] || {}
  return (
    <InputFieldContainer>
      <FieldTitle title={title} subtitle={subtitle}/>
      <Label>{inputType.inputLabel}</Label>
      <InputWrapper>
        {inputType.inputInfo.map((info, index) => (
          <Input
            key={info.property}
            ref={(ref) => inputRef.current[index] = ref as HTMLInputElement}
            info={info}
            inputIndex={index}
            inputLabel={inputType.inputLabel}
            isError={!!currentErrors[index]}
            onNext={() => handleInputNext(index)}
          />
        ))}
      </InputWrapper>
      <ErrorMessage>

      </ErrorMessage>
    </InputFieldContainer>
  )
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
