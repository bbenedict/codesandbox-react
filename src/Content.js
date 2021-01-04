import React, { useContext } from "react";
import styled from "styled-components";
import UseReducer from "./UseReducer";
import { MyContext } from "./UseContext";
import DisplayTime from "./UseMemo";

const StyledContent = styled.div`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
`;

// useMemo in DisplayTime is not really doing what it should because there
// is nothing to reliably trigger an update. revisit with a better example...
export default function Content() {
  const theme = useContext(MyContext);
  const now = new Date();

  return (
    <StyledContent color={theme.color} backgroundColor={theme.backgroundColor}>
      <h2>100 days of learning</h2>
      {DisplayTime(
        now.getMonth() + 1,
        now.getDate(),
        now.getFullYear(),
        now.getHours(),
        now.getMinutes()
      )}
      <UseReducer />
    </StyledContent>
  );
}
