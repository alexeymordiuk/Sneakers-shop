import styled, { keyframes } from "styled-components";
import React from "react";

const Columnded = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);

`;

const Loaded = styled.div`
width: 150px;
height: 60px;
position: absolute;
top: 30%;
left: 0;
right: 0;
margin: -30px auto 0;
text-align: center;
background-color: #000000;
border-radius: 10px;
opacity: 0.8;
`;

const Item1 = styled.div`
background-color: #ffffff;
height: 100%;
width: 6px;
display: inline-block;
animation: ${Columnded} 1.2s infinite ease-in-out;
`;

const Item2 = styled(Item1)`
  animation-delay: -1.1s;
`;
const Item3 = styled(Item2)`
animation-delay: -1.0s;
`;
const Item4 = styled(Item3)`
animation-delay: -0.9s;
`;
const Item5 = styled(Item4)`
animation-delay: -0.8s;
`;

const Loader: React.FC = () => {
  return (
      <Loaded>
        <Item1></Item1>
        <Item2></Item2>
        <Item3></Item3>
        <Item4></Item4>
        <Item5></Item5>
      </Loaded>
     
  );
};

export default Loader;
