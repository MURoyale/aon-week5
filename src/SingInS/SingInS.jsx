import React from "react";
import "./SingInS.css";
import congratulations from "../assets/congratulations.png";
import Container from "../Container/Container.jsx";
import MainFlex from "../MainFlex/MainFlex.jsx";
import LeftCont from "../leftCont/leftCont.jsx";

function SingInS() {
  return (
    <Container>
      <MainFlex>
        <LeftCont />
        <div className="SingInSCont">
          <div className="singInSImgCont">
            <img className="singInSImg" src={congratulations} />
          </div>
          <h1>Sigh in successful</h1>
        </div>
      </MainFlex>
    </Container>
  );
}

export default SingInS;
