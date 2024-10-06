import dateSecuence from "./animation/dateSecuence.js";
import calculateDateDifference from "./dateCalculate/calculateDateDifference.js";
import {
  dayValidate,
  monthValidate,
  yearValidate,
} from "./dateCalculate/utils.js";
import { formValidation } from "./formValidator/mainComponent/myForm.js";

formValidation({
  initialValues: {
    dayNumber: "",
    monthNumber: "",
    yearNumber: "",
  },
  validatorSchema: {
    dayNumber: {
      type: "number",
      errors: {
        number: "Must be a valid day",
        min: {
          value: 1,
          error: "Must be a valid day",
        },
        max: {
          value: 2,
          error: "Must be a valid day",
        },
        customValidation: (birth_day) => dayValidate(birth_day),
        required: "This field is required",
      },
    },
    monthNumber: {
      type: "number",
      errors: {
        number: "Must be a valid month",
        min: {
          value: 1,
          error: "Must be a valid month",
        },
        max: {
          value: 2,
          error: "Must be a valid month",
        },
        customValidation: (birth_month) => monthValidate(birth_month),
        required: "This field is required",
      },
    },
    yearNumber: {
      type: "number",
      errors: {
        number: "Must be a valid year",
        min: {
          value: 4,
          error: "Must be a valid year",
        },
        max: {
          value: 4,
          error: "Must be in the past",
        },
        customValidation: (birth_year) => yearValidate(birth_year),
        required: "This field is required",
      },
    },
  },
  formEvents: [
    {
      eventType: "submit",
      element: document.querySelector("form"),
    },
  ],
  errorOutputSelector: ".input-error",
  formControlAttribute: "form-wrapper-invalid",
  onSubmit: (values) => {
    const date = calculateDateDifference(values);
    dateSecuence(date);
  },
});
