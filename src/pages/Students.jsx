import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

function Students({ Students }) {
  const navigate = useNavigate();

  return (
    <>
      {Students.map((item) => {
        return (
          <StyledStudentMap key={item.id}>
            <h3>{item.title}</h3>
            <Button
              bgColor={"rgb(25,174,159)"}
              butWidth={"120px"}
              onClick={() => {
                navigate(`${item.id}/details`);
              }}
            >
              {"Details"}
            </Button>
          </StyledStudentMap>
        );
      })}
    </>
  );
}

export default Students;
const StyledStudentMap = styled.div`
  margin: 0 auto;
  display: flex;
  width: 600px;
  height: 60px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  background-color: white;
  margin-top: 1rem;
`;
