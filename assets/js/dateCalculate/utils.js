const verifyIfIsLeapYear = (year) => {
  return year % 400 === 0 || year % 100 === 0 || year % 4 === 0 ? true : false;
};

const februaryDaysInALeapYear = (isLeapYear) => {
  return isLeapYear ? 29 : 28;
};

const getCurrentDate = () => {
  const currentDate = new Date();
  return {
    currentYear: currentDate.getFullYear(),
    currentMonth: currentDate.getMonth(),
    currentDay: currentDate.getDate(),
  };
};

const monthDays = (daysInFebruary) => [
  31,
  daysInFebruary,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

export const dayValidate = (birth_day) => {
  const { currentYear } = getCurrentDate();

  let isLeapYear = verifyIfIsLeapYear(
    document.getElementById("yearNumber").value
  );
  const days = monthDays(februaryDaysInALeapYear(isLeapYear));
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
