import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <HeaderList>
        <li>
          <NavLinkHeader to="materials">Materials</NavLinkHeader>
        </li>
        <li>
          <NavLinkHeader to="students">Students</NavLinkHeader>
        </li>
        <li>
          <NavLinkHeader to="rating">Ratings</NavLinkHeader>
        </li>
      </HeaderList>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background-color: rgb(44, 136, 217);
  height: 5rem;
  margin-top: -1rem;
  width: 100%;
  /* text-decoration: underline; */
`;

const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px 0 0 0;
  list-style: none;

  li {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }
`;
const NavLinkHeader = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: #0a0a0a;
    text-decoration: underline 5px orange;
  }
`;
