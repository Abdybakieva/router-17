import React from 'react'
import styled from 'styled-components';

function Waiting() {
  return <StyledWaiting>Waiting page</StyledWaiting>;
  
}

export default Waiting
const StyledWaiting = styled.div`
  background-color: rgb(208, 239, 236);
  width: 100%;
  height: 60vh;
`;