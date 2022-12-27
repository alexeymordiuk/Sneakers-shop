import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import CartItem from "../components/cart/CartItem";
import { cartItems } from "../types/cartTypes";
import { Wraper } from "../components/utils/Wraper";
import { clearItems } from "../redux/slices/cartSlice";
import styled from "styled-components";
import { Info, Priced } from "./SneakersDetailes";
import { Button } from "../components/cart/AddToCart";
import OrderForm from "../components/OrderForm";
import Cart from '../assets/cart.png';

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
  height: calc(100vh - 50px);
  padding: 10px 0 15px 0;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Empty = styled.div`
height: calc(100vh - 35px);
display: flex;
align-items: center;
flex-direction: column;
gap: 15px;
justify-content: center;
`

const Img = styled.img`
width: 100px;
`

const Orders: React.FC= () => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState<boolean>(true);
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClear = () => {
    dispatch(clearItems());
  };

  const onClickOpenForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      {items.length > 0 ? (
        <Info>
          <Inner>
            <Column>
              <Priced>Quantity: {totalCount}</Priced>
              <Priced>{totalPrice} Uah</Priced>
            </Column>
            <OrderForm openForm={openForm} setOpenForm={setOpenForm} />
            <Column>
              <Button onClick={onClear}>Clear All</Button>
              <Button onClick={onClickOpenForm}>Order</Button>
            </Column>
          </Inner>
          <Wrraper>
            {items.map((items: cartItems) => (
              <CartItem key={items.id} {...items} />
            ))}
          </Wrraper>
        </Info>
      ) : (
        <Info>
           <Inner>
            <Column>
              <Priced className={`${totalCount ? "" : 'count'}`}>Quantity: {totalCount}</Priced>
              <Priced className={`${totalCount ? "" : 'count'}`}>{totalPrice} Uah</Priced>
            </Column>
            <OrderForm openForm={openForm} setOpenForm={setOpenForm} />
            <Column>
              <Button onClick={onClear} className='orders'>Clear All</Button>
              <Button onClick={onClickOpenForm} disabled={items.length >= 0}>Order</Button>
            </Column>
          </Inner>
          <Empty>
            <Img src={Cart} alt="cart" />
            <h2>Cart is empty</h2>
          </Empty>
        </Info>
      )}
    </>
  );
};

export default Orders;
