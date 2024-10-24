import { assignInputValue } from "./formUtils.js";
import { showValidationErrorMessage } from "./validationUtils.js";

export const changeState = (changeErrorStateProps, inputId) => {
  changeErrorStateProps.inputId = inputId;
  changeErrorState(changeErrorStateProps);
};

export const changeErrorState = ({
  inputId,
  validatorSchema,
  hasErrors,
  rest,
}) => {
  let isInvalid = showValidationErrorMessage(inputId, validatorSchema, rest);
  hasErrors.forEach((object) => {
    if (object.inputId === inputId) {
      object.isInvalid = isInvalid;
    }
  });
};

export const setInitialInputStates = (inputFieldKeys, initialValues) => {
  return inputFieldKeys.map((key) => {
    assignInputValue(key, initialValues);
    return {
      inputId: key,
      isInvalid: false,
    };
  });
};
