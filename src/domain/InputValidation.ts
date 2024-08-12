import { reqularExpression } from "../constants/system";

const validateDoubleBlank = (str: string) => {
  if (reqularExpression.DOUBLE_BLANK.test(str)) {
    throw new Error("")
  }
}

const validateNoSpaces = (str: string) => {
  if (/\s/.test(str)) {
    throw new Error();
  }
};

const vaildateNumber = (str: string) => {
  if ( !Number.isInteger(Number(str))) {
    throw new Error()
  }
}

const vaildateTrimUpperCase = (str: string) => {
  if (!reqularExpression.UPPERCASE_AND_SPACE_ONLY.test(str)) {
    throw new Error()
  }
}

