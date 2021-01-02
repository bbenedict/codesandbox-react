import React, { useState } from "react";
import styled from "styled-components";

import { MyContext } from "./UseContext";

import Content from "./Content";

const StyledApp = styled.div`
  color: black;
  background-color: white;
  font-family: sans-serif;
  text-align: center;
`;

const StyledButton = styled.button`
  margin: 5px;
`;

const themes = {
  colorsTheme: {
    name: "colors",
    color: "royalblue",
    backgroundColor: "powderblue"
  },
  darkTheme: {
    name: "dark",
    color: "#AAA",
    backgroundColor: "#333"
  }
};

export default function App() {
  const [theme, setTheme] = useState(themes.colorsTheme);

  function toggleColors() {
    if (theme.name === "colors") {
      setTheme(themes.darkTheme);
    } else {
      setTheme(themes.colorsTheme);
    }
  }

  return (
    <MyContext.Provider value={theme}>
      <StyledApp>
        <h1>Hello CodeSandbox</h1>
        <StyledButton onClick={() => toggleColors()}>
          Toggle colors
        </StyledButton>
        <Content />
      </StyledApp>
    </MyContext.Provider>
  );
}
