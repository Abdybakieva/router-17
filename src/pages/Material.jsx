import React from 'react'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal';
import MaterialsList from './materialList'

function Material({ material }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const modalButtonHandler = () => {
    searchParams.set("showModal", true);
    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      <MateralButtonContainer>
        {searchParams.has("showModal") ? (
          <Modal
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        ) : null}
        <Button
          bgColor={"rgb(232,131,58)"}
          butWidth={"200px"}
          onClick={modalButtonHandler}
        >
          {"Add new materials"}
        </Button>
      </MateralButtonContainer>
      <MaterialsList material={material} />
    </Wrapper>
  );
}

export default Material
const Wrapper=styled.div`
    margin-top: 4rem;
`
const MateralButtonContainer=styled.div`
    margin-left: 25rem;
`