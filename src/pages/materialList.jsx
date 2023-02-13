import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';

function MaterialsList({material}) {
  const navigate=useNavigate()
  return (
    <>
      {material.map((item) => {
        return (
          <>
            <MaterialListWrapper>
              <h3>{item.name}</h3>
              <Button
                bgColor={"rgb(25,174,159)"}
                butWidth={"120px"}
              onClick={()=>{navigate(`${item.id}/details/submitted`);}}
              >
                
                {"Details"}
              </Button>
            </MaterialListWrapper>

          </>
        );
      })}
    </>
  );
}

export default MaterialsList
const MaterialListWrapper=styled.div`
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
`