import { ERROR_MESSAGES } from "@/constants/message";
import { regularExpression } from "@/constants/regularExpression";
import { isValidMonth, isValidYear } from "@/utils/checkDateRange";


const validateDoubleBlank = (str: string) => {
  if (regularExpression.DOUBLE_BLANK.test(str)) {
    throw new Error(ERROR_MESSAGES.INVALID_DOUBLE_BLANK)
  }
}

const validateNoSpaces = (str: string) => {
  if (/\s/.test(str)) {
    throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
  }
};

const validateNumber = (str: string) => {
  if (!Number.isInteger(Number(str))) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_NUMBER)
  }
}

const validateTrimUpperCase = (str: string) => {
  if (!regularExpression.UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_UPPERCASE)
  }
}

const validateMonth = (str: string) => {
  const month = Number(str);
  if (!isValidMonth(month)) {
    throw new Error(ERROR_MESSAGES.INVALID_MONTH);
  }
}

const validateYear = (str: string) => {
  const year = Number(str);
  if (!isValidYear(year)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
}

const empty = (n: string) => {
  if (n.length === 0) {
    throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
  }
}

const isLengthValid = (str: string, length: number) => {
  if (str.length < length) {
    return false;
  }
  return true;
}

const validateLength = (str: string, length: number) => {
  if (!isLengthValid(str, length)) {
    throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
  }
}

type InputValidation = Record<string, (str: string) => void>

const InputValidation: InputValidation = {
  cardNumber: (str: string) => {
    validateNoSpaces(str);
    validateNumber(str);
    empty(str);
  },
  month: (str: string) => {
    validateNoSpaces(str);
    validateNumber(str);
    validateMonth(str);
  },
  year: (str: string) => {
    validateNoSpaces(str);
    validateNumber(str);
    validateYear(str);
  },
  userName: (str: string) => {
    validateDoubleBlank(str);
    validateTrimUpperCase(str);
  },
  cvc: (str: string) => {
    validateNoSpaces(str);
    validateNumber(str);
  },
  password: (str: string) => {
    validateNoSpaces(str);
    validateNumber(str);
  },
};


export {isLengthValid, validateLength, InputValidation}