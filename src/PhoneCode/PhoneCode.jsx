import React, { useState, useEffect } from "react";
import Container from "../Container/Container.jsx";
import MainFlex from "../MainFlex/MainFlex.jsx";
import LeftCont from "../leftCont/leftCont.jsx";
import "./PhoneCode.css";
import { OtpInput } from "reactjs-otp-input";
import counterIcon from "../assets/counterIcon.svg";
import { Link } from "react-router-dom";

function PhoneCode() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(59);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const handleChange = (otp) => setOtp(otp);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(59);
    setIsResendDisabled(true);
  };

  return (
    <div>
      <Container>
        <MainFlex>
          <LeftCont />
          <div className="codePageCont">
            <div className="scralCodeCont">
              <div className="scralCode"></div>
              <div className="scralCode"></div>
              <div className="scralCodenoneActive"></div>
            </div>
            <div className="codePageText">
              <h1>Enter Your Phone Number</h1>
              <p>
                Enter your phone number to verify your identity and the validity
                of your number to safely activate your account on the platform.
              </p>
            </div>
            <div className="codeContainer">
              <OtpInput
                className="OtpInput"
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span></span>}
              />
            </div>
            <div className="counterCont">
              <div className="counter">
                <img src={counterIcon} alt="Counter Icon" />
                <p>{`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</p>
              </div>
              <div className="resend">
                <p
                  style={{
                    color: isResendDisabled ? "#afb1b64b" : "#AFB1B6",
                  }}
                >
                  Didn't receive a message?
                </p>
                <button
                  className="resendBtn"
                  onClick={handleResend}
                  disabled={isResendDisabled}
                  style={{
                    color: isResendDisabled ? "#3c96af67" : "#3C97AF",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: isResendDisabled ? "not-allowed" : "pointer",
                  }}
                >
                  Resend
                </button>
              </div>
            </div>
            <Link style={{textDecoration:"none"}} to="/Information">
              <button
                className="verifyBtn"
                style={{
                  backgroundColor: otp.length === 6 ? "#3C97AF" : "#EBEBEB",
                  color: otp.length === 6 ? "#fff" : "#999",
                  cursor: otp.length === 6 ? "pointer" : "not-allowed",
                }}
                disabled={otp.length !== 6}
              >
                Verify
              </button>
            </Link>
          </div>
        </MainFlex>
      </Container>
    </div>
  );
}

export default PhoneCode;
