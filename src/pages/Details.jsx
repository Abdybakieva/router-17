import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

function Details({ MATERIAL }) {
  const { id } = useParams();
  const detailsID = MATERIAL.find((el) => el.id.toString() === id);
  return (
    <>
      <StyledDetail>
        <h4>Material Detail Page:</h4>
        {detailsID.name}
      </StyledDetail>
      <StyledWrapper>
        <StyledNavLink to="submitted">Submitted</StyledNavLink>
        <StyledNavLink to="waiting">Waiting</StyledNavLink>
        <StyledNavLink to="late">Late</StyledNavLink>
      </StyledWrapper>
      <Outlet />
    </>
  );
}

export default Details;
const StyledDetail = styled.div`
  box-shadow: 6px -2px 41px 8px rgba(34, 60, 80, 0.19);
  background-color: white;
  width: 500px;
  margin: 0 auto;
  height: 80px;
  border-radius: 10px;
  margin-top: 2rem;
`;

const StyledWrapper = styled.div`
  background-color: rgb(25, 174, 159);
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &.active {
    color: #0a0a0a;
    text-decoration: underline 5px orange;
  }
`;