import React, { useReducer } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  margin: 10px;
`;

const StyledButton = styled.button`
  margin: 5px;
`;

function localReducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };

    case "dec":
      return { count: state.count - 1 };

    case "set":
      return { count: action.payload };

    default:
      return state;
  }
}

export default function UseReducer() {
  // Using localDispatch and localReducer to distinguish from existing conventions
  const [state, localDispatch] = useReducer(localReducer, { count: 0 });

  return (
    <div>
      <h2>Use Reducer example</h2>
      <StyledCounter>Count: {state.count}</StyledCounter>
      <StyledButton onClick={() => localDispatch({ type: "inc" })}>
        up
      </StyledButton>
      <StyledButton onClick={() => localDispatch({ type: "dec" })}>
        down
      </StyledButton>
      <StyledButton onClick={() => localDispatch({ type: "set", payload: 0 })}>
        reset
      </StyledButton>
    </div>
  );
}
