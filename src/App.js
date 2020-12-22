import React from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  color: blue;
  font-family: sans-serif;
  text-align: center;
`;

export default function App() {
  return (
    <StyledApp>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </StyledApp>
  );
}
