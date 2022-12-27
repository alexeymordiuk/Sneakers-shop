import React from "react";
import { Priced } from "../../pages/SneakersDetailes";
import { Full } from "../cart/CartEmpty";
import Like from '../../assets/like.png'
import styled from "styled-components";

const Likes = styled.img`
width: 100px;
`

const LikeEmpty: React.FC = () => {
  return (
    <Full>
      <Likes src={Like} alt="like" />
        <Priced>No one favourites products</Priced>
    </Full>
  );
};

export default LikeEmpty;
