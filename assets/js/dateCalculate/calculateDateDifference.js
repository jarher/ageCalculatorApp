import { getCurrentDate, daysInCurrentMonth } from "./utils.js";

const calculateDateDifference = (values) => {
  const [yearCalculated, monthCalculated, dayCalculated] = daysInCurrentMonth(
    values,
    getCurrentDate
  );

  return { yearCalculated, monthCalculated, dayCalculated };
};

export default calculateDateDifference;
