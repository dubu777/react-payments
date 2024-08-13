import { KEYS_AND_SYMBOLS } from "@/constants/message";
import { InputValidation, validateLength } from "@/domain/InputValidation";
import useInputStore from "@/store/useInputStore";

interface useInputProps {
  property: string;
  minLength: number;
  maxLength: number;
  inputLabel: string;
  inputIndex: number;
  onNext: () => void;
}

export default function useInput({
  property,
  minLength,
  maxLength,
  inputLabel,
  inputIndex,
  onNext,
}: useInputProps) {
  const checkValidation = InputValidation[property];
  const { values, errorMessages, setValues, setErrorMessages } = useInputStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleTryCatch(() => {
      checkValidation(inputValue);
      setValues(property, inputValue);
      setErrorMessages(inputLabel, inputIndex, "");
    });
    if (
      inputLabel !== "userName" &&
      !hasErrorMessages(inputLabel) &&
      inputValue.length === maxLength
    ) {
      onNext();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleTryCatch(() => {
      validateLength(inputValue, minLength)
      checkValidation(inputValue)
    });
    if (!hasErrorMessages(inputLabel)) {
      onNext()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = values[property]
    if (e.key === KEYS_AND_SYMBOLS.ENTER_KEY) {
      handleTryCatch(() => {
        validateLength(inputValue, minLength)
        checkValidation(inputValue)
      })
      if (!hasErrorMessages(inputLabel)) {
        onNext();
      }
    }
  }

  const handleTryCatch = (funcs: () => void) => {
    try {
      funcs();
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessages(inputLabel, inputIndex, error.message)
      }
    }
  };

  const hasErrorMessages = (inputLabel: string) => {
    const currentErrors = errorMessages[inputLabel] || {};
    return Object.values(currentErrors).some((message) => message !== "");
  };

  return {handleChange,handleBlur,handleKeyDown}
}
