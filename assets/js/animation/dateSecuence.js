const dateSecuence = ({ yearCalculated, monthCalculated, dayCalculated }) => {
  const date = [
    { dateValue: yearCalculated, selector: "total-year" },
    { dateValue: monthCalculated, selector: "total-month" },
    { dateValue: dayCalculated, selector: "total-days" },
  ];
  date.forEach((object) => iterator(object));
};

const iterator = ({ dateValue, selector }) => {
  let interCount = 1;
  let intervalId;

  if (!intervalId) {
    intervalId = setInterval(() => {
      changeValue(selector, interCount);
      if (interCount >= dateValue) {
        clearInterval(intervalId);
        intervalId = null;
        interCount = 0;
      }
      interCount++;
    }, 100);
  }
};

const changeValue = (selector, interCount) => {
  const container = document.getElementById(selector);
  const newSpan = document.createElement("span");
  newSpan.innerText = interCount;
  container.prepend(newSpan);
  const spanElements = Array.from(container.querySelectorAll("span"));
  spanElements[0].classList.add("initial-position");
  setTimeout(() => {
    spanElements[0].classList.remove("initial-position");
    setTimeout(() => spanElements[1].remove(), 50);
  }, 80);
};
export default dateSecuence;
