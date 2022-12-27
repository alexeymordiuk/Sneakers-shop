import React from "react";
import { ImSpinner2 } from "react-icons/im";
import styled, { keyframes } from "styled-components";
import { Full } from "../cart/CartEmpty";

const Circle = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

`;

export const Loading = styled(ImSpinner2)`
  font-size: 80px;
  color: #000000;
  animation-name: ${Circle};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;


const Spinner: React.FC = () => {
  return (
    <Full>
      <Loading />
    </Full>
  );
};

export default Spinner;
