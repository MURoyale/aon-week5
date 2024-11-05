import React from "react";
import "./RightCont.css";
import freeLancerIcon from "../assets/freeLancerIcon.svg";
import clientIcon from "../assets/clientIcon.svg";
import arrow from "../assets/arrow.svg";

function RightCont() {
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
       <button className="selectCont">
          <img src={freeLancerIcon} />
          <h3>Freelancer</h3>
          <p>I’m a freelancer ready to work for projects</p>
          </button>
       <button className="selectCont">
          <img src={clientIcon} />
          <h3>Client</h3>
          <p>I’m a client searching for talented freelancers</p>
          </button>
      </div>
      <button className="firstPageBtn">Next <img src={arrow}/></button>
    </div>
  );
}

export default RightCont;
