import React, { useContext } from "react";
import styled from "styled-components";
import UseReducer from "./UseReducer";
import { MyContext } from "./UseContext";

const StyledContent = styled.div`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
`;

export default function Content() {
  const theme = useContext(MyContext);

  return (
    <StyledContent color={theme.color} backgroundColor={theme.backgroundColor}>
      <h2>100 days of learning</h2>
      <UseReducer />
    </StyledContent>
  );
}
