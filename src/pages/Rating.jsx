import React from 'react'
import styled from 'styled-components'

function Rating() {
  return <ContainerRating>Ratings page</ContainerRating>;
}

export default Rating

const ContainerRating = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 60px;
  align-items: center;
  margin-bottom: 2rem;
  background-color: white;
  margin-top: 1rem;
  font-size: 2rem;
`;