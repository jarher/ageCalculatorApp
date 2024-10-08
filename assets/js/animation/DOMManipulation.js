export const animateContainer = (dateValueContainer, interCount) => {
  dateValueContainer.innerText = interCount;
  dateValueContainer.style.opacity = 0;

  setTimeout(() => {
    dateValueContainer.style.opacity = 1;
  }, 20);
};

export const getOutputContainer = (selector) =>
  document.querySelector(selector);

export const resizeNumberContainer = (dateValue, container) => {
  const dateValueLength = Number(dateValue).toString().length;
  changeWidth(dateValueLength, container);
};

const containerWidth = (numCharacters, characterWidth, letterSpacing) =>
  numCharacters * (characterWidth + letterSpacing) + 5;

const changeWidth = (dateValueLength, container) => {
  const containerHeight = container.clientHeight;
  const characterWidth = containerHeight / 2.5;
  const letterSpacing = window.innerWidth > 1024 ? 3.5 : 3;

  container.style.width = `${containerWidth(
    dateValueLength,
    characterWidth,
    letterSpacing
  )}px`;
};
//date result container resize

const windowEvents = ["resize", "change"];

const changeWidthListener = () => {
  const dateResultContainer = Array.from(
    document.getElementsByClassName("date-result")
  );

  dateResultContainer.forEach((mainContainer) => {
    const divIdContainer = mainContainer.querySelector("div").id;
    const container = getOutputContainer(`#${divIdContainer} span`);
    const dateValueLength = container.innerText.length;
    changeWidth(dateValueLength, container);
  });
};

windowEvents.forEach((event) => {
  if (event === "resize") {
    window.addEventListener(event, () => changeWidthListener());
  }
  if (event === "change") {
    window.matchMedia("(max-width: 1440px)").addEventListener(event, (e) => {
      if (e.matches) {
        changeWidthListener();
      }
    });
  }
});
