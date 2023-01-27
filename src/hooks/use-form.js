import { useState } from "react";

const useForm = (ValidateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = ValidateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const changeValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    changeValueHandler,
    valueBlurHandler,
    reset,
  };
};
export default useForm;
