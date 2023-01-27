import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={changeNameHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Please enter a valid Name!</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={changeEmailHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInValid && (
          <p className="error-text">Please enter a valid Email!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
