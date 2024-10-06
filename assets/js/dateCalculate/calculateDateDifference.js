import { februaryDaysInALeapYear, getCurrentDate, monthDays } from "./utils.js";

const calculateDateDifference = (values) => {
  const [birthDay, birthMonth, birthYear] = values;
  const { currentYear, currentMonth, currentDay } = getCurrentDate();

  let yearCalculated = currentYear - birthYear.value;
  let monthCalculated = 0;
  let dayCalculated = 0;

  const { monthResult, yearResult } = monthCalculate(
    currentMonth,
    yearCalculated,
    birthMonth
  );

  if (yearResult) {
    yearCalculated = yearResult;
  }

  monthCalculated = monthResult;

  const { dayResult, monthRes } = dayCalculate(
    currentDay,
    currentMonth,
    birthYear,
    birthDay,
    monthCalculated
  );

  if (monthRes) {
    monthCalculated = monthRes;
  }

  dayCalculated = dayResult;

  return { yearCalculated, monthCalculated, dayCalculated };
};

const monthCalculate = (currentMonth, yearResult, birthMonth) => {
  let monthResult;
  if (currentMonth < birthMonth.value) {
    monthResult = 12 - (currentMonth + 1 - birthMonth.value);
    if (yearResult > 0) {
      yearResult -= 1;
    }
    return { monthResult, yearResult };
  }
  monthResult = currentMonth + 1 - birthMonth.value;
  return { monthResult };
};

const dayCalculate = (
  currentDay,
  currentMonth,
  birthYear,
  birthDay,
  monthCalculated
) => {
  let monthRes = monthCalculated;
  let dayResult;

  if (currentDay < birthDay.value) {
    const lastMonth = currentMonth - 1;
    const numDaysLastMonth = monthDays(februaryDaysInALeapYear(birthYear))[
      lastMonth
    ];
    dayResult = numDaysLastMonth - birthDay.value;
    monthRes -= 1;
    return { dayResult, monthRes };
  }

  const numDaysCurrentMonth = monthDays(februaryDaysInALeapYear(birthYear))[
    currentMonth
  ];
  dayResult = numDaysCurrentMonth - birthDay.value;
  return { dayResult };
};

export default calculateDateDifference;
