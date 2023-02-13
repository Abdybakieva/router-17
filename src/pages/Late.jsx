import React from 'react'
import styled from 'styled-components';

function Late() {
  return <StyledLate>Late page</StyledLate>;
}

export default Late

const StyledLate = styled.div`
  background-color: rgb(208, 239, 236);
  width: 100%;
  height: 60vh;
`;