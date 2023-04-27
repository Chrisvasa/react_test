import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hero from "./hero";

function App() {
  return (
    <MainContainer>
      <BannerContainer>
        <h1>🔥🔥XTREME API TESTER🔥🔥</h1>
      </BannerContainer>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <ResultContainer>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eum! Nihil, accusantium magnam. Fugit distinctio voluptatem in
          consequatur adipisci libero voluptatibus saepe debitis provident amet. Pariatur eos hic debitis doloribus quod commodi blanditiis
          dolores perferendis molestias consectetur deserunt non accusantium fugiat nostrum impedit aliquid, ducimus id temporibus ipsa.
          Illo incidunt libero quas, ut quisquam impedit quasi et aspernatur nihil inventore totam odit, ratione eligendi similique nobis
          atque ipsum! Velit, ducimus. Consectetur rem eligendi facere molestias culpa, deserunt illum quaerat, temporibus maiores, omnis
          explicabo sit sapiente mollitia corporis adipisci. Quidem totam dolorum voluptatum accusantium fuga beatae sequi. Deserunt
          provident tempora labore?
        </p>
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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Task here
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Input type="text" id="search" onChange={handleChange} placeholder={"Enter your search here.."} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const Button = styled.button`
  height: 40px;
  width: 30px;
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
