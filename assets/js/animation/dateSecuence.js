const dateSecuence = ({ yearCalculated, monthCalculated, dayCalculated }) => {
  const date = [
    {
      dateValue: yearCalculated,
      dateValueContainer: getValueContainer("total-year"),
    },
    {
      dateValue: monthCalculated,
      dateValueContainer: getValueContainer("total-month"),
    },
    {
      dateValue: dayCalculated,
      dateValueContainer: getValueContainer("total-days"),
    },
  ];
  date.forEach((object) => {
    numberSecuenceAnimate(object);
  });
};

const numberSecuenceAnimate = ({ dateValue, dateValueContainer }) => {
  let interCount = 1;
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

const animateContainer = (dateValueContainer, interCount) => {
  dateValueContainer.innerText = interCount;
  dateValueContainer.style.opacity = 0;

  setTimeout(() => {
    dateValueContainer.style.opacity = 1;
  }, 20);
};

const getValueContainer = (selector) => {
  const container = document.getElementById(selector);
  const resultSpan = Array.from(container.querySelectorAll("span"))[0];
  return resultSpan;
};

const containerWidth = (numCharacters, characterWidth, letterSpacing) => {
  const totalWidth = numCharacters * (characterWidth + letterSpacing) + 5;
  return totalWidth;
};

const resizeNumberContainer = (dateValue, container) => {
  const containerHeight = container.clientHeight;
  const dateValueLength = Number(dateValue).toString().length;
  const characterWidth = containerHeight / 2;
  const letterSpacing = window.innerWidth > 1024 ? 3.5 : 3;

  container.style.width = `${containerWidth(
    dateValueLength,
    characterWidth,
    letterSpacing
  )}px`;
};

export default dateSecuence;
