class ValidatorInitialize {
  constructor(formValidationData, runFormEvents, setInitialInputStates) {
    this.validateRequiredProperties(formValidationData);
    this.inputFieldKeys = Object.keys(formValidationData.initialValues);
    this.validationErrors = setInitialInputStates(
      this.inputFieldKeys,
      formValidationData.initialValues
    );
    runFormEvents(
      formValidationData,
      this.inputFieldKeys,
      this.validationErrors
    );
  }

  static resetValues() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }
}

ValidatorInitialize.prototype.validateRequiredProperties = function (data) {
  const requiredProperties = [
    "initialValues",
    "validatorSchema",
    "formEvents",
    "errorOutputSelector",
    "formControlAttribute",
  ];

  const missingProperties = requiredProperties.filter(
    (property) => !data.hasOwnProperty(property)
  );

  if (missingProperties.length > 0)
    throw new Error(
      `Missing required properties in form data: ${missingProperties.join(
        ", "
      )}`
    );
};

export default ValidatorInitialize;
