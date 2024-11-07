import React from "react";
import "./RightCont.css";
// import arrow from "../assets/arrow.svg";
import { useState } from "react";
import Freelancer from "../Svg/Freelancer.jsx";
import ClientIcon from "../Svg/ClientIcon.jsx";
import ArroIcon from "../Svg/ArroIcon.jsx";
import { Link } from "react-router-dom";
import LeftCont from "../leftCont/leftCont.jsx";
import MainFlex from "../MainFlex/MainFlex.jsx";
import Container from "../Container/Container.jsx";

function RightCont() {
  const [value, setValue] = useState("");

  return (
    <Container>
      <MainFlex>
        <LeftCont />
        <div className="mainRightCont">
          <div className="scralCont">
            <div className="scral"></div>
            <div className="scralnoneActive"></div>
            <div className="scralnoneActive"></div>
          </div>
          <div className="firstPageText">
            <h1>Let’s Get started!</h1>
            <p>How do you plan to use this platform?</p>
          </div>
          <div className="selectBody">
            <button
              className={
                value === "freelancer" ? "selectContActice" : "selectCont"
              }
              onClick={() => setValue("freelancer")}
            >
              <Freelancer
                color={value === "freelancer" ? "#3C97AF" : "black"}
              />
              <h3>Freelancer</h3>
              <p>I’m a freelancer ready to work on projects</p>
            </button>
            <button
              className={value === "client" ? "selectContActice" : "selectCont"}
              onClick={() => setValue("client")}
            >
              <ClientIcon color={value === "client" ? "#3C97AF" : "black"} />
              <h3>Client</h3>
              <p>I’m a client searching for talented freelancers</p>
            </button>
          </div>
          <Link style={{ textDecoration: "none" }} to="/Phone Number input">
            <button
              className={value === "" ? "firstPageBtn" : "firstPageBtnActive"}
              disabled={value === ""}
            >
              Next <ArroIcon color={value !== "" ? "#fff" : "#999999"} />
            </button>
          </Link>
        </div>
      </MainFlex>
    </Container>
  );
}

export default RightCont;
