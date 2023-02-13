import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
  return (
    <SideContainer>
      <div>
        <h1>LOGO</h1>
      </div>
      <nav>
        <ContainerList>
            <NavLinkStyle to="courses">Courses</NavLinkStyle>
      
            <NavLinkStyle to="anoungements">Anoungements</NavLinkStyle>
        
            <NavLinkStyle to="notifications">Notifications</NavLinkStyle>

            <NavLinkStyle to="schedule">Schedule</NavLinkStyle>
        </ContainerList>
      </nav>
    </SideContainer>
  );
}

export default SideBar;

const SideContainer = styled.div`
  background-color: rgb(230, 228, 222);
  top: 0;
  position: fixed;
  height: 100%;
  h1 {
    color: rgb(194, 164, 214);
  }
`;
const ContainerList = styled.ul`
  list-style: none;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-top: 4rem;
  padding: 0;
`;

const NavLinkStyle = styled(NavLink)`
  color: #0a0a0a;
  text-decoration: none;
  width: 100%;
  &.active {
    background-color: rgb(227, 207, 243);
  }
`;
