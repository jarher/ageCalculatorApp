import { runFormEvents } from "./utils/eventHandlers.js";
import { setInitialInputStates } from "./utils/formState.js";
import ValidatorInitialize from "./validatorInitialize.js";

//initialize new form validator
//optionally return a resetValues function for restart input values.
//that function is invoke inside onSubmit called in formValidation object
const validate = (function () {
  try {
    const formValidation = (data) =>
      new ValidatorInitialize(data, runFormEvents, setInitialInputStates);
    const resetValues = ValidatorInitialize.resetValues;
    return { formValidation, resetValues };
  } catch (error) {
    console.error(error.message);
  }
})();

export default validate;
