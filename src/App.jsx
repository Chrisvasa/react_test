import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Hero from "./hero";

function App() {
  const [data, setData] = useState([]);
  const [test, setTest] = useState("");

  const testChange = (event) => {
    setTest(event.target.value);
  };

  const handleClick = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    const users = [
      response.data.map((user) => {
        return {
          id: user.id,
          Fname: user.name,
          UserName: user.username,
          Email: user.email,
        };
      }),
    ];
    console.log(data);
    setData(users);
  };

  // const fetchUserData = async () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //   .then((response) => response.data.map((user) => setData({
  //       id: user.id,
  //       Name: user.Name,
  //       UserName: user.username,
  //       Email: user.email
  // })));
  // };

  return (
    <MainContainer>
      <BannerContainer>
        <h1>🔥🔥XTREME API TESTER🔥🔥</h1>
      </BannerContainer>
      <Search handleClick={handleClick} testChange={testChange} />
      <ResultContainer>
        <Result data={data} test={test} />
      </ResultContainer>
      <Hero />
    </MainContainer>
  );
}

const Search = ({ handleClick, testChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // Task here
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    testChange(event);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        id="search"
        onChange={handleChange}
        placeholder={"Type your message here.."}
      />
      {/* <p>
        Searching for: <strong>{searchTerm}</strong>
      </p> */}
      <Button onClick={() => handleClick(searchTerm)}>Fetch Data</Button>
    </SearchContainer>
  );
};

const Result = ({ data, test }) => {
  return data.map((x) => {
    {
      return x
        .filter((z) => z.Fname.includes(test))
        .map((y) => {
          return (
            <Div>
              <p>ID: {y.id}</p>
              <p>Name: {y.Fname}</p>
              <p>UserName: {y.UserName}</p>
              <p>Email: {y.Email}</p>
            </Div>
          );
        });
    }
  });
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px,
      rgba(0, 0, 0, 0.5) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.4) 0px -3px 0px inset;
  }
`;

const Button = styled.button`
  height: 3rem;
  width: 29rem;
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  &:hover,
  :active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }
  &:active {
    opacity: 0.5;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  font-family: "Courier New", Courier, monospace;
  color: darkgreen;
  background: #00090c;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #e7f5fa;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100%;
  align-self: center;
  color: darkgreen;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

const Input = styled.input`
  &:hover {
    background: grey;
  }
  &:focus {
    outline: none;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export default App;
