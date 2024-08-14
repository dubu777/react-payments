import useInput from "@/hooks/useInput";
import { InputInfo } from "@/types/input"
import { forwardRef } from "react"
import styled from "styled-components"

interface InputProps {
  info: InputInfo;
  inputIndex: number;
  inputLabel: string;
  isError: boolean;
  onNext: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {info, inputIndex, inputLabel, isError, onNext} = props;
  const {handleChange, handleBlur, handleKeyDown} = useInput({
    property: info.property,
    validateType: info.validateType,
    minLength: info.minLength,
    maxLength: info.maxLength,
    inputLabel,
    inputIndex,
    onNext,
  });
  return (
    <StyledInput
      ref={ref}
      $error={isError}
      maxLength={info.maxLength}
      placeholder={info.placeHolder}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
})


const StyledInput = styled.input<{ $error: boolean}>`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({$error}) => ($error ? 'red' : 'gray')};
  outline-color: ${({$error}) => ($error ? 'red' : 'gray')};
  border-radius: 3px;
`;