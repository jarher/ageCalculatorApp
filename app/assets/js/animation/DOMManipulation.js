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
  if (Number(dateValue).toString().length === 1) {
    asignClass(container, "units-number");
  }
  if (Number(dateValue).toString().length === 2) {
    asignClass(container, "dozens-number");
  }
  if (Number(dateValue).toString().length === 3) {
    asignClass(container, "cents-number");
  }
  if (Number(dateValue).toString().length === 4) {
    asignClass(container, "thousands-number");
  }
};

const asignClass = (container, className) => {
  Array.from(container.classList).forEach((name) =>
    container.classList.remove(name)
  );
  container.classList.add(className);
};
