import { Card } from "@/types/card";
import { create } from "zustand";

interface InputState {
  values: Record<string, string>;
  errorMessages: Record<string, Record<number, string>>;
  canSubmit: boolean;
  completion: Record<keyof Card, boolean>;
  setValues: (property: string, value: string) => void;
  setErrorMessages: (inputLabel: string, index: number, errorMessage: string) => void;
  setCanSubmit: (value: boolean) => void;
  setCompletion: (inputFieldName: keyof Card, isCompleted: boolean) => void;
}

const useInputStore = create<InputState>((set) => ({
  values: {},
  errorMessages: {},
  canSubmit: false,
  completion: {
    cardNumber: false,
    cardCompany: false,
    expiryDate: false,
    userName: false,
    cvc: false,
    password: false,
  },
  setValues: (property: string, value: string) => {
    set((state) => ({
      values: {
        ...state.values,
        [property]: value,
      },
    }))
  },
  setErrorMessages: (
    inputLabel: string,
    index: number,
    errorMessage: string
  ) => {
    set((state) => ({
      errorMessages: {
        ...state.errorMessages,
        [inputLabel]: {
          ...(state.errorMessages[inputLabel] || {}),
          [index]: errorMessage,
        },
      },
    }));
  },
  setCanSubmit: (value: boolean) => {
    set({canSubmit: value})
  },
  setCompletion: (inputFieldName: keyof Card, isCompleted: boolean) => {
    set((state) => ({
      completion: {
        ...state.completion,
        [inputFieldName]: isCompleted,
      }
    }))
  }
}));


export default useInputStore;
