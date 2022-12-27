import React from "react";
import styled from "styled-components";
import Loader from "../utils/Loader";

export const Full = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Empty = styled.div`
  background: #f6f6f6;
  height: 90vh;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 21px;
  text-align: center;
  max-width: 300px;

  @media (min-width: 750px) {
    max-width: 450px;
  }
`;

const Messages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65vh;
  margin: 0 auto;
`;

interface ordersProps {
  isOrderComplete: boolean;
  title: string;
}

const CartEmpty: React.FC<ordersProps> = ({
  isOrderComplete,
  title,
}) => {
  return (
    <Messages>
      {isOrderComplete ? (
        <>
        <Title>{title}</Title>
        <Loader/>
        </>
      ) : (
        <Title>Cart Empty! Please add at least one pair of sneakers</Title>
      )}
    </Messages>
  );
};

export default CartEmpty;
