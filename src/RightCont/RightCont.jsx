import React from "react";
import "./RightCont.css";
import freeLancerIcon from "../assets/freeLancerIcon.svg";
import clientIcon from "../assets/clientIcon.svg";
import arrow from "../assets/arrow.svg";
import { useState } from "react";

function RightCont() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [firstPBtn, setFirstPBtn] = useState(false)

  const  btnOptione = () => {
    setFirstPBtn(true)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
  };

  const handleNextClick = () => {
    if (selectedOption) {
      console.log("Navigating to the next page...");
    }
  };

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
        <button 
          className={`selectCont ${selectedOption === 'freelancer' ? 'active' : ''}`} 
          onClick={() => { handleOptionClick('freelancer'); btnOptione()}}
        >
          <img className="freeLancerImg" src={freeLancerIcon} alt="Freelancer Icon" />
          <h3>Freelancer</h3>
          <p>I’m a freelancer ready to work for projects</p>
        </button>
        <button 
          className={`selectCont ${selectedOption === 'client' ? 'active' : ''}`} 
          onClick={() => {handleOptionClick('client'); btnOptione()}}
        >
          <img src={clientIcon} alt="Client Icon" />
          <h3>Client</h3>
          <p>I’m a client searching for talented freelancers</p>
        </button>
      </div>
      <button 
        className={`firstPageBtn ${firstPBtn ? "firstPageBtnActive" : ""}`  }
        disabled={!selectedOption}
      >
        Next <img src={arrow} alt="Arrow Icon" />
      </button>
    </div>
  );
}

export default RightCont;
