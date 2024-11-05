import React from "react";
import "./RightCont.css";
// import freeLancerIcon from "../assets/freeLancerIcon.svg";
// import clientIcon from "../assets/clientIcon.svg";
import arrow from "../assets/arrow.svg";
import { useState } from "react";
import Freelancer from "../Svg/Freelancer.jsx";
import ClientIcon from "../Svg/ClientIcon.jsx";

function RightCont() {
  const [value, setValue] = useState("");

  return (
    <div className="mainRightCont">
      <div className="scralCont">
        <div className="scral"></div>
        <div className="scralnoneActive"></div>
        <div className="scralnoneActive"></div>
      </div>
      <div className="firstPageText">
        <h1>Let’s Get started!</h1>
        <p>How do you plan to use this platform</p>
      </div>
      <div className="selectBody">
        <button className="selectCont" onClick={() => setValue("freelancer")}>
          <Freelancer color={value === "freelancer" ? "#3C97AF" : "black"} />
          <h3>Freelancer</h3>
          <p>I’m a freelancer ready to work for projects</p>
        </button>
        <button className="selectCont" onClick={() => setValue("ClientIcon")}>
          <ClientIcon color={value === "ClientIcon" ? "#3C97AF" : "black"} />
          <h3>Client</h3>
          <p>I’m a client searching for talented freelancers</p>
        </button>
      </div>
      <button
        className={value === "" ? "firstPageBtn" : "firstPageBtnActive"}
        disabled={value === ""}
      >
        Next <img src={arrow} alt="Arrow Icon" />
      </button>
    </div>
  );
}

export default RightCont;
