import React from "react";
import styled from "styled-components";
import UseReducer from "./UseReducer";

const StyledContent = styled.div`
  color: red;
  border: 2px solid red;
`;

export default function Content() {
  return (
    <StyledContent>
      <h2>100 days of learning</h2>
      <UseReducer />
    </StyledContent>
  );
}
