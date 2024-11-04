import React from "react";
import Container from "../Container/Container";
import "./leftCont.css";
import theLines from '../assets/theLines.svg'
function LeftCont() {
  return (
    <>
        <div className="mainLeftCont">
          <div className="textCont">
            <h1>
              Welcome to Your <br /> Freelancing Hub!
            </h1>
            <p>
              We’re thrilled to have you here! Whether you're a client <br />{" "}
              searching for skilled freelancers to bring your projects to life
              or <br /> a freelancer eager to find exciting opportunities, this
              is the <br /> place where connections are made, and ideas come to
              reality. <br /> Let's start building something amazing together!
            </p>
          </div>
          <img className="theLines" src={theLines}/>
        </div>
    </>
  );
}

export default LeftCont;
