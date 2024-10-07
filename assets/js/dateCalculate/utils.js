export const verifyIfIsLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const februaryDaysInALeapYear = (isLeapYear) => {
  return isLeapYear ? 29 : 28;
};

export const getCurrentDate = () => {
  const currentDate = new Date();
  return {
    currentYear: currentDate.getFullYear(),
    currentMonth: currentDate.getMonth(),
    currentDay: currentDate.getDate(),
  };
};

export const monthLengths = (daysInFebruary) => [
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

export const daysInCurrentMonth = (values, getCurrentDate) => {
  const { currentYear, currentMonth, currentDay } = getCurrentDate();
  const [birthDay, birthMonth, birthYear] = values;
  const birthMonthValue = Number(birthMonth.value);
  const numberOfDaysInMonth = monthLengths(
    februaryDaysInALeapYear(verifyIfIsLeapYear(currentYear))
  );
  const birthDayValue = Number(birthDay.value);

  let yearResult = currentYear - birthYear.value;
  let currentMonthValue = currentMonth + 1;
  let monthResult;
  // month calculation

  if (birthMonthValue > currentMonthValue) {
    yearResult -= 1;
    monthResult = 12 - (birthMonthValue - currentMonthValue - 1);
  } else {
    monthResult = currentMonthValue - birthMonthValue;
  }

  //day calculation
  //return year, month and day calculated
  return birthDayValue === currentDay && currentMonthValue === birthMonthValue
    ? [yearResult, monthResult, 0]
    : [
        yearResult,
        monthResult + (birthDayValue > currentDay ? -1 : 0),
        birthDayValue > currentDay
          ? numberOfDaysInMonth[currentMonth - 1] - (birthDayValue - currentDay)
          : currentDay - birthDayValue,
      ];
};
