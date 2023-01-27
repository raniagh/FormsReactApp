import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameError,
    changeValueHandler: changeFirstNameHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useForm(isNotEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameError,
    changeValueHandler: changeLastNameHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useForm(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailError,
    changeValueHandler: changeEmailHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useForm(isEmail);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control";

  //Check form validity with code repeat
  /*   const [firstName, setFirstName] = useState("");
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  const firstNameIsValid = firstName.trim() !== "";
  const firstNameError = !firstNameIsValid && firstNameIsTouched;

  const [lastName, setLastName] = useState("");
  const [lastNameIsTouched, setlastNamLIsTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== "";
  const lastNameError = !lastNameIsValid && lastNameIsTouched;

  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const emailIsValid = email.includes("@");
  const emailError = !emailIsValid && emailIsTouched;
  const formIsValid = lastNameIsValid && firstNameIsValid && emailIsValid;

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const firstNameBlurHandler = () => {
    setFirstNameIsTouched(true);
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const lastNameBlurHandler = () => {
    setlastNamLIsTouched(true);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const submissionHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }
    setFirstName("");
    setFirstNameIsTouched(false);
    setLastName("");
    setLastNameIsTouched(false);
    setEmail("");
    setEmailNameIsTouched(false)
  };
  const firstNameClasses = firstNameError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control"; */

  return (
    <form onSubmit={submissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={changeFirstNameHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && (
            <p className="error-text">Please enter a valid firstName</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={changeLastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && (
            <p className="error-text">Please enter a valid lastName</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={changeEmailHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
