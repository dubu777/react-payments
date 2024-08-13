import { RANGE } from "@/constants/number";

export const isValidMonth = (month: number) => {
  if (!(RANGE.MONTH_RANGE.MIN <= month && month <= RANGE.MONTH_RANGE.MAX)) {
    return false;
  }
  return true;
};

export const isValidYear = (year: number) => {
  if (!(RANGE.YEAR_RANGE.MIN <= year && year <= RANGE.YEAR_RANGE.MAX)) {
    return false;
  }
  return true;
};
