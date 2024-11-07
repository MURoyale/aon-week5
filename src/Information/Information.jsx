import React, { useState } from "react";
import "./Information.css";
import Container from "../Container/Container.jsx";
import MainFlex from "../MainFlex/MainFlex.jsx";
import LeftCont from "../LeftCont/LeftCont.jsx";
import Password from "./../Svg/Password.jsx";
import { Link } from "react-router-dom";

function Information() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isFormComplete = name && email && password.length >= 8;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getPasswordBorderColor = () => {
    if (isPasswordTouched && !password) {
      return "red";
    } else if (isPasswordTouched && password) {
      return "#3C97AF";
    } else {
      return "#999999";
    }
  };
  
  return (
    <div>
      <Container>
        <MainFlex>
          <LeftCont />
          <div className="infomationContaner">
            <div className="scralCodeCont">
              <div className="scralInfo"></div>
              <div className="scralInfo"></div>
              <div className="scralInfo"></div>
            </div>
            <div className="codePageText">
              <h1>Enter Your Information</h1>
              <p>
                Please enter your personal information to complete the
                registration process.
              </p>
            </div>
            <div className="inputCont">
              <p>Name</p>
              <input
                className={`inputTake ${
                  isNameTouched && !name ? "error-border" : ""
                }`}
                type="text"
                placeholder="Enter your Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setIsNameTouched(true)}
              />
              <p>Email</p>
              <input
                className={`inputTake ${
                  isEmailTouched && !email ? "error-border" : ""
                }`}
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setIsEmailTouched(true)}
              />
              <p>Password</p>
              <div className="password">
                <div className="passwordIcon">
                  <button
                    type="button"
                    className="passwordIconBtn"
                    onClick={togglePasswordVisibility}
                  >
                    <Password color={getPasswordBorderColor()}/>
                  </button>
                </div>
                <input
                  className={`inputTake ${
                    isPasswordTouched && !password ? "error-border" : ""
                  }`}
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setIsPasswordTouched(true)}
                />
              </div>
            </div>
            <Link style={{textDecoration: "none"}} to="/congratulations">
              <button
                className="infoBtn"
                style={{
                  backgroundColor: isFormComplete ? "#3C97AF" : "#EBEBEB",
                  color: isFormComplete ? "#fff" : "#999",
                  cursor: isFormComplete ? "pointer" : "not-allowed",
                }}
                disabled={!isFormComplete}
              >
                Complete registration
              </button>
            </Link>
          </div>
        </MainFlex>
      </Container>
    </div>
  );
}

export default Information;
