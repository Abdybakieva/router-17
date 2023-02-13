import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';

function Schedule() {
  const navigate=useNavigate()
  const goBack=()=>{
    navigate("/notifications");
  }
  return (
    <>
      <StyledSchedule>Schedule</StyledSchedule>
      <Button bgColor="rgb(25,174,159)" onClick={goBack}>Go to Notifications page</Button>
    </>
  );
}

export default Schedule

const StyledSchedule = styled.div`
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;