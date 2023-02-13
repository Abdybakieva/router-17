import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';

function Anoungements() {
  const navigate=useNavigate()
  const goBack=()=>{
    navigate("/courses/students");
  }
    return (
      <>
        <StyledAnonngement>Anoungements</StyledAnonngement>
        <Button bgColor="rgb(25,174,159)" onClick={goBack}>
          Go to students pafe
        </Button>
      </>
    );
}

export default Anoungements
const StyledAnonngement=styled.div`
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`