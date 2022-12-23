import React from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../../redux/slices/likeSlice";
import { FullHeart, Like } from "./AddToLiked";
import styled from "styled-components";
import { Priced } from "../../pages/SneakersDetailes";

interface LikedItems {
  img: string;
  title: string;
  id: string;
}

export const Liked = styled(Like)`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Inner = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const Img = styled.img`
  border-radius: 8px;
`;

const LikedItems: React.FC<LikedItems> = ({ id, img, title }) => {
  const dispatch = useDispatch();

  const deleteLiked = () => {
    dispatch(removeItems(id));
  };

  return (
    <div>
      <Inner>
        <Img src={img} alt="img" />
        <Liked onClick={deleteLiked}>
          <FullHeart />
        </Liked>
      </Inner>
      <Priced>{title}</Priced>
    </div>
  );
};

export default LikedItems;
