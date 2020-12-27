import React from "react";
import styled from "styled-components";

import Content from "./Content";

const StyledApp = styled.div`
  color: blue;
  font-family: sans-serif;
  text-align: center;
  border: 2px solid blue;
`;

export default function App() {
  return (
    <StyledApp>
      <h1>Hello CodeSandbox</h1>
      <Content />
    </StyledApp>
  );
}
