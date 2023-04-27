import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hero from "./hero";

function App() {
  const [toxt, setToxt] = useState("blblbl");

  function handleClick(prop) {
    setToxt(toxt + prop);
  }

  function clearClick() {
    setToxt("");
  }

  return (
    <MainContainer>
      <BannerContainer>
        <h1>🔥🔥XTREME API TESTER🔥🔥</h1>
      </BannerContainer>
      <SearchContainer>
        <Search handleClick={handleClick} clearClick={clearClick} />
      </SearchContainer>
      <ResultContainer>
        <Result text={toxt} />
        <Counter />
      </ResultContainer>
      <Hero />
    </MainContainer>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <Button onClick={handleDecrement}>-</Button>
      <p>{count}</p>
      <Button onClick={handleIncrement}>+</Button>
    </div>
  );
};

const Search = ({ handleClick, clearClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // Task here
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Input type="text" id="search" onChange={handleChange} placeholder={"Enter your search here.."} />
      {/* <p>
        Searching for: <strong>{searchTerm}</strong>
      </p> */}
      <Button onClick={() => handleClick(searchTerm)}>Submit</Button>
      <Button onClick={() => clearClick()}>Clear</Button>
    </div>
  );
};

const Result = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const Button = styled.button`
  height: 40px;
  width: 6rem;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerContainer = styled.header`
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-family: "Courier New", Courier, monospace;
  color: darkgreen;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #bbb;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100%;
  align-self: center;
  color: darkgreen;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

const Input = styled.input`
  &:hover {
    background: grey;
  }
  height: 40px;
  display: flex;
  align-self: center;
  width: 100%;
  max-width: 400px;
  padding-left: 16px;
  background-color: var(--search-bg);
  border-radius: 4px;
  font-family: var(--body-font);
  font-size: 26px;
  font-weight: 500;
  padding: 0 20px 0 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export default App;
