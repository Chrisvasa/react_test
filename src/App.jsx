import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hero from "./hero";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: lightskyblue;
`;

function App() {
  return (
    <MainContainer>
      <h1>test</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo, ipsam quidem cupiditate sint autem non. Fugiat, ipsa.
        Vero consequuntur vitae odit culpa fuga error.
      </p>
      <Hero />
    </MainContainer>
  );
}
export default App;
