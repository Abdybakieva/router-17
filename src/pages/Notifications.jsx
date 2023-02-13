import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';

function Notifications() {
  const navigate=useNavigate()
  const goBack=()=>{
    navigate("/courses/materials");
  }
  return (
    <>
      <StyledNotifiction>Notifications page</StyledNotifiction>
      <Button bgColor="rgb(25,174,159)" onClick={goBack}>Go to materials page</Button>
    </>
  );
}

export default Notifications
const StyledNotifiction = styled.div`
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;