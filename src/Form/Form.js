import React, { useState, useEffect } from "react";
import "./../Form/dist/Form.css";
import emailSvg from "./img/icons/Vectoremail.svg";
import lockSvg from "./img/icons/Vectorlock.svg";



function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Логін не може бути пустим");
  const [passwordError, setPasswordError] = useState(
    "Пароль не може бути порожнім"
  );
  const [formValid, setFormValid] = useState(false);



  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);



  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[\S\d]+@(net\.ua|org\.ua|gmail\.com)$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Цей логін не коректний");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 15) {
      setPasswordError("Пароль повинен бути довше 8 і менше 15 символів");
      if (!e.target.value) {
        setPasswordError("Пароль не може бути порожнім");
      }
    } else {
      setPasswordError("");
    }
  };


  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };



  return (
    <div class="wrapper_form ">
      <div className="container_form">
        <p className="welcome_text family_inter">Welcome!</p>
        <h1 className="title_text family_inter">Join The Community</h1>

        <div class="group_field">
          <p className="user family_inter">E-Mail or Username</p>
          <img className="icons emailsvg" src={emailSvg} alt="email-icon" />
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            className="field email-border input_forms family_inter"
            name="email"
            type="text"
            placeholder="e.g.: elonmusk@mars.com"
          />
          {emailDirty && emailError && (
            <div
              style={{
                color: "red",
                fontSize: "11px",
                fontWeight: "bold",
                position: "absolute",
                top: "46vh",
                zIndex: "10",
              }}
            >
              {emailError}
            </div>
          )}
        </div>
        <div class="group_field">
          <p className="password family_inter">Password</p>
          <img className="icons locksvg" src={lockSvg} alt="email-icon" />

          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            className="field input_forms"
            name="password"
            type="password"
            placeholder="e.g.: X Æ A-12"
          />
          {passwordDirty && passwordError && (
            <div
              style={{
                color: "red",
                fontSize: "11px",
                fontWeight: "bold",
                position: "absolute",
                top: "60vh",
                zIndex: "10",
              }}
            >
              {passwordError}
            </div>
          )}
        </div>

        <button
          disabled={!formValid}
          className="button_form family_inter"
          type="submit"
        >
          Sign Up
        </button>

        <div class="buttom_text">
          <p className="first_text family_inter">Already a member?</p>
          <p className="second_text family_inter">Login here →</p>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
