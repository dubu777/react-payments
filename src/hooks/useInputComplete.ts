import useInputStore from "@/store/useInputStore";
import { Card } from "@/types/card";
import { useEffect } from "react";



function useInputComplete() {
  const {completion, setCanSubmit, setCompletion} = useInputStore();
console.log(completion, 'com');

  const handleComplete = (inputFieldName: keyof Card, isCompleted: boolean) => {
    setCompletion(inputFieldName, isCompleted)
  };

  useEffect(() => {
    const isAllInputCompleted = Object.values(completion).every(
      (value) => value === true
    );
    if (isAllInputCompleted) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [completion, setCanSubmit]);

  return { handleComplete };
}

export default useInputComplete;
