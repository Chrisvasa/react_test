import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import styled from "styled-components";
import Hero from "../hero";
import App from "../App";
import Game from "../pages/Game";

export default function Root() {
  return (
    <>
      <Header>
        <NavContainer>
          <h1>Test Site</h1>
          <ButtonContainer>
            <NavLink to="/">Button 1</NavLink>
            <NavLink to="games">Button 2</NavLink>
            <NavLink to="test">Button 3</NavLink>
          </ButtonContainer>
        </NavContainer>
      </Header>

      <main>
        <Outlet />
      </main>
      <Footer>
        <Hero />
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 8rem;
  background-color: #212121;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;

  h1 {
    font-size: 5rem;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    &:visited {
      color: #fff;
    }
    &:hover {
      color: gray;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`