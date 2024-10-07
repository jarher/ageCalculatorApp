import {
  februaryDaysInALeapYear,
  getCurrentDate,
  monthLengths,
  verifyIfIsLeapYear,
} from "./utils.js";

export const dayValidate = (birth_day) => {
  const { currentYear } = getCurrentDate();

  let isLeapYear = verifyIfIsLeapYear(
    document.getElementById("yearNumber").value
  );
  const days = monthLengths(februaryDaysInALeapYear(isLeapYear));
  const birth_month = document.getElementById("monthNumber").value;
  const birth_year = document.getElementById("yearNumber").value;

  if (birth_month > 12) {
    return "Must be a valid date";
  }
  if (birth_day > days[birth_month - 1]) {
    return birth_year < currentYear && birth_month <= 12
      ? "Must be a valid date"
      : "Must be a valid day";
  }
};

export const monthValidate = (birth_month) => {
  if (birth_month > 12) return "Must be a valid month";
};

export const yearValidate = (birth_year) => {
  const { currentYear } = getCurrentDate();
  if (birth_year > currentYear) return "Must be in the past";
};
