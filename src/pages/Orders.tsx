import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import CartItem from "../components/cart/CartItem";
import { cartItems } from "../types/cartTypes";
import { Wraper } from "../components/sneakers/SneakersDate";
import CartEmpty from "../components/cart/CartEmpty";
import { clearItems } from "../redux/slices/cartSlice";
import styled from "styled-components";
import { Info, Priced } from "./SneakersDetailes";
import { Button } from "../components/cart/AddToCart";

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

export const Wrraper = styled(Wraper)`
  padding-bottom: 0;
  overflow: auto;
  height: calc(100vh - 50px);
  padding: 10px 0 15px 0;
  &::-webkit-scrollbar {
    background-color: #f0f2f6;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border-radius: 10px;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
      <Info>
        <Inner>
          <Column>
            <Priced>Quantity: {totalCount}</Priced>
            <Priced>{totalPrice} Uah</Priced>
          </Column>
          <Column>
            <Button onClick={onClear}>Clear All</Button>
            <Button>Order</Button>
          </Column>
        </Inner>
        <Wrraper>
          {items.map((items: cartItems) => (
            <CartItem key={items.id} {...items} />
          ))}
        </Wrraper>
      </Info>
  );
};

export default Orders;
