import React from "react";
import "./Information.css";
import Container from "../Container/Container.jsx";
import MainFlex from "../MainFlex/MainFlex.jsx";
import LeftCont from "../leftCont/leftCont.jsx";

function Information() {
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
              Please enter your personal information to complete the registration process.
              </p>
            </div>
            <div className="inputCont">
                <p>Name</p>
                <input className="inputTake" type="text" placeholder="Enter your Full name " />
                <p>Email</p>
                <input className="inputTake" type="text" placeholder="Enter your Email Address" />
                <p>Password</p>
                <input className="inputTake" type="password" placeholder="Enter Password" />
            </div>
            <button className="infoBtn">Complete registration</button>
          </div>
        </MainFlex>
      </Container>
    </div>
  );
}

export default Information;
