import styled from "styled-components";

export const Between = styled.div`
display: grid;
grid-template-columns: 1fr;
align-items: center;
gap: 15px;

@media (min-width: 750px) {
    grid-template-columns: 1fr 2fr;
  }
`