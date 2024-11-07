import React, { useState } from "react";
import MainFlex from "../MainFlex/MainFlex.jsx";
import Container from "../Container/Container";
import LeftCont from "../LeftCont/LeftCont.jsx";
import iraqFlag from "../assets/iraqFlag.svg";
import usaFlag from "../assets/usaFlag.svg";
import "./PhoneNumberPage.css";
import Select from "react-select";
import { Link } from "react-router-dom";

function PhoneNumberPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSelectFocused, setIsSelectFocused] = useState(false);

  const options = [
    {
      value: "+964",
      label: (
        <>
          <img
            src={iraqFlag}
            alt="Iraq"
            style={{ width: "20px", marginRight: "8px" }}
          />
          +964
        </>
      ),
    },
    {
      value: "+1",
      label: (
        <>
          <img
            src={usaFlag}
            alt="USA"
            style={{ width: "20px", marginRight: "8px" }}
          />
          +1
        </>
      ),
    },
  ];

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setPhoneNumber(value);
    setIsButtonDisabled(value.length !== 10);
  };

  return (
    <Container>
      <MainFlex>
        <LeftCont />
        <div className="mainNumbCont">
          <div className="scralContMpage">
            <div className="activeM"></div>
            <div className="activeContainer">
              <div className="active50"></div>
            </div>
            <div className="scralnoneActiveM"></div>
          </div>
          <div className="numbPageInfo">
            <h1>Enter Your Phone Number</h1>
            <p>
              Enter your phone number to verify your identity and the validity
              of your number to safely activate your account on the platform.
            </p>
          </div>
          <div className="inputContainer">
            <p>Phone Number</p>
            <div className="inputFlex">
              <div className="countryNumber">
                <Select className="selectIn"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: "100px",
                      border: isSelectFocused
                        ? "1px solid #3C97AF"
                        : "1px solid #EBEBEB", 
                      boxShadow: "none",
                      borderRadius: "6px",
                    }),
                    menu: (baseStyles) => ({
                      ...baseStyles,
                      border: "none",
                      borderRadius: "0 0 6px 6px",
                      overflow: "hidden",
                    }),
                    indicatorsContainer: (prevStyle) => ({
                      ...prevStyle,
                      display: "none",
                    }),
                    indicatorSeparator: () => {},
                    dropdownIndicator: (defaultStyles) => ({
                      ...defaultStyles,
                      display: "none",
                    }),
                    singleValue: (baseStyles) => ({
                      ...baseStyles,
                      borderRadius: "6px",
                    }),
                  }}
                  options={options}
                  defaultValue={{
                    value: "+964",
                    label: (
                      <>
                        <img
                          src={iraqFlag}
                          alt="Iraq"
                          style={{ width: "20px", marginRight: "8px" }}
                        />
                        +964
                      </>
                    ),
                  }}
                  onFocus={() => setIsSelectFocused(true)} 
                  onBlur={() => setIsSelectFocused(false)} 
                />
              </div>
              <input
                type="text"
                className="numberInput"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter Your Phone Number"
                maxLength={10}
                style={{
                  borderColor: isInputFocused ? "#3C97AF" : "#EBEBEB",
                }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
            </div>
          </div>
          <Link to="/code number" style={{textDecoration:"none"}}>
            <button
              className="page2Btn"
              style={{
                backgroundColor: isButtonDisabled ? "#EBEBEB" : "#3C97AF",
                cursor: isButtonDisabled ? "not-allowed" : "pointer",
                color: isButtonDisabled ? "#999999" : "#fff",
              }}
              disabled={isButtonDisabled}
            >
              Send verification code
            </button>
            </Link>
        </div>
      </MainFlex>
    </Container>
  );
}

export default PhoneNumberPage;
