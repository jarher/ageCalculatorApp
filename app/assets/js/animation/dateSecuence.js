import {
  getOutputContainer,
  resizeNumberContainer,
  animateContainer,
} from "./DOMManipulation.js";

const dateSecuence = ({ yearCalculated, monthCalculated, dayCalculated }) => {
  const date = [
    {
      dateValue: yearCalculated,
      dateValueContainer: getOutputContainer("#total-year span"),
    },
    {
      dateValue: monthCalculated,
      dateValueContainer: getOutputContainer("#total-month span"),
    },
    {
      dateValue: dayCalculated,
      dateValueContainer: getOutputContainer("#total-days span"),
    },
  ];
  date.forEach((object) => {
    numberSecuenceAnimate(object);
  });
};

const numberSecuenceAnimate = ({ dateValue, dateValueContainer }) => {
  let interCount = 0;
  let intervalId;
  resizeNumberContainer(dateValue, dateValueContainer);

  if (!intervalId) {
    intervalId = setInterval(() => {
      animateContainer(dateValueContainer, interCount);
      if (interCount >= dateValue) {
        clearInterval(intervalId);
        intervalId = null;
        interCount = 0;
      }
      interCount++;
    }, 10);
  }
};

export default dateSecuence;
