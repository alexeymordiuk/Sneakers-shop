import React from "react";
import styled from "styled-components";
import { Buy, CartIcon } from "../sneakers/SneakersItems";
import { useDispatch, useSelector } from "react-redux";
import { cartItems } from "../../types/cartTypes";
import { addItems, selectCartItemById } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export const Button = styled(Buy)`
  display: flex;
  align-items: center;
  gap: 7px;
  color: #fff;
  pointer-events:${(props)=>props.disabled?'none':null};
`;

interface cartProps {
  id: string;
  title: string;
  img: string;
  price: number;
  sizes: number[];
  count: number;
  activeSizes: number;
}

const AddToCart: React.FC<cartProps> = ({id, price, img, title, sizes, activeSizes}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: cartItems = {
      id,
      price,
      img,
      title,
      sizes: sizes[activeSizes],
      count: 0,
    };
    dispatch(addItems(item));
    navigate("/orders");
  };
  
  return (
    <Button onClick={onClickAdd} disabled={addedCount === 1}>
      {addedCount? "In cart" : "Add to cart"} <CartIcon />
    </Button>
  );
};

export default AddToCart;
