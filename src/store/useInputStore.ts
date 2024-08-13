import { create } from "zustand";

interface InputState {
  values: Record<string, string>;
  setValues: (property: string, value: string) => void;
  errorMessages: Record<string, Record<number, string>>;
  setErrorMessages: (inputLabel: string, index: number, errorMessage: string) => void;
}

const useInputStore = create<InputState>((set) => ({
  values: {},
  errorMessages: {},
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
}));


export default useInputStore;
