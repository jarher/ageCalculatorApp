export const animateContainer = (dateValueContainer, interCount) => {
  dateValueContainer.innerText = interCount;
  dateValueContainer.style.opacity = 0;

  setTimeout(() => {
    dateValueContainer.style.opacity = 1;
  }, 20);
};

export const getValueContainer = (selector) => {
  const container = document.getElementById(selector);
  const resultSpan = Array.from(container.querySelectorAll("span"))[0];
  return resultSpan;
};

export const resizeNumberContainer = (dateValue, container) => {
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

const containerWidth = (numCharacters, characterWidth, letterSpacing) => {
  const totalWidth = numCharacters * (characterWidth + letterSpacing) + 5;
  return totalWidth;
};
