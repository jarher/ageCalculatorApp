import dateSecuence from "./animation/dateSecuence.js";
import calculateDateDifference from "./dateCalculate/calculateDateDifference.js";
import {
  dayValidate,
  monthValidate,
  yearValidate,
} from "./dateCalculate/dateValidate.js";
import validate from "./formValidator/index.js";

const { formValidation } = validate;

const validatorSchema = {
  dayNumber: {
    type: "number",
    errors: {
      message: "Must be a valid day",
      min: {
        value: 1,
        message: "Must be a valid day",
      },
      max: {
        value: 2,
        message: "Must be a valid day",
      },
      customValidation: (birth_day) => dayValidate(birth_day),
      required: "This field is required",
    },
  },
  monthNumber: {
    type: "number",
    errors: {
      message: "Must be a valid month",
      min: {
        value: 1,
        message: "Must be a valid month",
      },
      max: {
        value: 2,
        message: "Must be a valid month",
      },
      customValidation: (birth_month) => monthValidate(birth_month),
      required: "This field is required",
    },
  },
  yearNumber: {
    type: "number",
    errors: {
      message: "Must be a valid year",
      min: {
        value: 4,
        message: "Must be a valid year",
      },
      max: {
        value: 4,
        message: "Must be in the past",
      },
      customValidation: (birth_year) => yearValidate(birth_year),
      required: "This field is required",
    },
  },
};

formValidation({
  initialValues: {
    dayNumber: "",
    monthNumber: "",
    yearNumber: "",
  },
  validatorSchema,
  formEvents: ["submit"],
  errorOutputClass: "input-error",
  formControlClass: "form-wrapper-invalid",
  onSubmit: (values) => {
    const date = calculateDateDifference(values);
    //animates result date
    dateSecuence(date);
  },
});
