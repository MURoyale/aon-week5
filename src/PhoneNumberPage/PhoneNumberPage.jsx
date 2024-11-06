import React from "react";
import MainFlex from "../MainFlex/MainFlex.jsx";
import Container from "../Container/Container";
import LeftCont from "../leftCont/leftCont.jsx";
import iraqFlag from "../assets/iraqFlag.svg";
import "./PhoneNumberPage.css";
import Select from "react-dropdown-select";

function PhoneNumberPage() {
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
                <select name="" id="">
                  <option value="">
                    <img src={iraqFlag} alt="" />
                    +964
                  </option>
                </select>
              </div>
              <input type="number" className="numberInput" />
            </div>
          </div>
        </div>
      </MainFlex>
    </Container>
  );
}

export default PhoneNumberPage;
