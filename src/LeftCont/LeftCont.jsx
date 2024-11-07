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
            <p className="leftContText">
              We’re thrilled to have you here! Whether you're a client {" "}
              searching for skilled freelancers to bring your projects to life
              or a freelancer eager to find exciting opportunities, this
              is the  place where connections are made, and ideas come to
              reality. Let's start building something amazing together!
            </p>
          </div>
          <img className="theLines" src={theLines}/>
        </div>
    </>
  );
}

export default LeftCont;
