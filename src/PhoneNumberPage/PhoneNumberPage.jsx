import React from 'react'
import MainFlex from "../MainFlex/MainFlex.jsx";
import Container from "../Container/Container";
import LeftCont from "../leftCont/leftCont.jsx";
import './PhoneNumberPage.css'
function PhoneNumberPage() {
  return (
    <Container>
    <MainFlex>
      <LeftCont/>
    <div className='numbCont'>
     <h1> this is phone number page</h1>
    </div>

    </MainFlex>
    </Container>
  )
}

export default PhoneNumberPage
