import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItems, selectLikeItemById } from "../../redux/slices/likeSlice";
import { likeItems } from "../../types/likeTypes";

export const Like = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border: none;
`;

const LikeIcon = styled(AiOutlineHeart)`
  font-size: 22px;
  color: #000000;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #89654a;
  }
`;

export const FullHeart = styled(AiFillHeart)`
  font-size: 22px;
  color: #000000;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #89654a;
  }
`;

interface Liked {
  id: string;
  title: string;
  img: string;
  price: number;
  count: number;
}

const AddToLiked: React.FC<Liked> = ({ id, title, img, price }) => {
  const dispatch = useDispatch();
  const likeItem = useSelector(selectLikeItemById(id));
  const addedLike = likeItem  ? likeItem.count : 0;

  const onClickAdd = () => {
    const liked: likeItems = {
      id,
      img,
      title,
      count: 0,
      price,
    };
    dispatch(addItems(liked));
  };

  return (
    <Like onClick={onClickAdd} disabled={addedLike === 1}>
      {addedLike ? <FullHeart /> : <LikeIcon />}
    </Like>
  );
};

export default AddToLiked;
