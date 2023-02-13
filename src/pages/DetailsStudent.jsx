import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function DetailsStudent({ STUDENT }) {
  const { id } = useParams();

  const detailsStudentID=STUDENT.find((elem)=>elem.id.toString()===id)
  return (
    <>
      <StyledDetaill>{detailsStudentID.title}</StyledDetaill>
      
    </>
  );
}

export default DetailsStudent;
const StyledDetaill = styled.div`
  box-shadow: 6px -2px 41px 8px rgba(34, 60, 80, 0.19);
  background-color: white;
  width: 500px;
  margin: 0 auto;
  height: 80px;
  border-radius: 10px;
  margin-top: 2rem;
`;
