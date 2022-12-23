import React from "react";
import { useDispatch } from "react-redux";
import { cartItems } from "../../types/cartTypes";
import { removeItems } from "../../redux/slices/cartSlice";
import { Button } from "./AddToCart";
import { Inner, Name, Priced } from "../../pages/SneakersDetailes";

const CartItem: React.FC<cartItems> = ({ img, title, price, id, sizes }) => {
  const dispatch = useDispatch();

  const deleteItems = () => {
    dispatch(removeItems(id));
  };

  return (
    <div>
      <img src={img} alt="img" />
      <Name>{title}</Name>
      <Inner>
        <Priced>{price} Uah</Priced>
        <Priced>Size: {sizes}</Priced>
        <Button onClick={deleteItems}>Delete</Button>
      </Inner>
    </div>
  );
};

export default CartItem;
