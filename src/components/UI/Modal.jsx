import React from 'react'
import styled from 'styled-components';
import Button from './Button';

function Modal({searchParams ,setSearchParams}) {
  const closeShowModal=()=>{
    searchParams.delete("showModal")
    setSearchParams(searchParams)
  }
  return (
    <StyledModal>
      <h2>Add new Material Modal</h2>
      <Button bgColor={"rgb(25,174,159)"} butWidth={"120px"} onClick={closeShowModal}>
        {"Close Modal"}
      </Button>
    </StyledModal>
  );
}

export default Modal
const StyledModal = styled.div`
  background-color: rgb(245, 218, 222);
  width: 600px;
  position: fixed;
  height: 250px;
  left: 300px;
`;