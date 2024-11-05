import React from "react";
import "./App.css";
import LeftCont from "./leftCont/leftCont";
import Container from "./Container/Container";
import RightCont from "./RightCont/RightCont";

function App() {
  return (
    <>
      <Container>
        <div className="main">
          <LeftCont />
          <RightCont />
        </div>
      </Container>    
    </>
  );
}

export default App;
