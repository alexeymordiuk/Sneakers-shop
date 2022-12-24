import React from "react";
import { Priced } from "../../pages/SneakersDetailes";
import { Full } from "../cart/CartEmpty";

const LikeEmpty: React.FC = () => {
  return (
    <Full>
        <Priced>No one favourites products</Priced>
    </Full>
  );
};

export default LikeEmpty;
