import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  color: red;
`;

export default function Content() {
  return (
    <StyledContent>
      <h2>Content</h2>
    </StyledContent>
  );
}
