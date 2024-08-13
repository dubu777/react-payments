import { isLengthValid } from "@/domain/InputValidation";
import useInputStore from "@/store/useInputStore";
import { InputType } from "@/types/input";
import { useEffect, useRef } from "react";

interface useNextRefProps {
  inputType: InputType;
  handleNext: () => void;
}

function useNextRef({ inputType, handleNext }: useNextRefProps) {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const { values } = useInputStore();
  const isUserNameInput = inputType.inputLabel === "소유자 이름" ? true : false;
  
  
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  // 소유자 이름 필드는 제외하고
  // 인풋 값 길이가 maxLength가 되면 다음 인풋필드으로 넘어가기
  useEffect(() => {
    (function handleInputNextWithoutUserName() {
      if(isUserNameInput) {
        return;
      }
  
      const isCompletedInputField = inputType.inputInfo.every((info) => {
        const value = values[info.property] || "";
        return value.length === info.maxLength;
      });
  
      if (isCompletedInputField) {
        handleNext();
      }
    })();
  }, [values]);

  // 소유자 이름 필드일때 value 길이가 유효하다면 다음 인풋필드로 넘어가기
  const handleInputNext = (index: number) => {
    const inputLength = inputType.inputInfo.length - 1;
    const isCompletedInputField = inputType.inputInfo.every((info) => {
      const value = values[info.property] || "";
      if (isUserNameInput) {
        return isLengthValid(value, info.minLength);
      }
    })
    // 해당 인풋 필드에서 모든 인풋이 채워졌으면 다음 인풋 필드로 넘어가기
    if (isCompletedInputField) {
      handleNext()
    }

    // index < inputlength 필요한 검증인지 생각하기
    // 해당 인풋 필드에서 모든 인풋이 채워지지 않았으면 다음 인풋으로 넘어가기
    if (index < inputLength && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus()
    }
  }


  return { inputRef, handleInputNext };
}

export default useNextRef;
