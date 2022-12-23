import React from "react";
import { Priced } from "../../pages/SneakersDetailes";
import { Empty, Full } from "../cart/CartEmpty";

const LikeEmpty: React.FC = () => {
  return (
    <Full>
      <Empty>
        <Priced>No one favourites products</Priced>
      </Empty>
    </Full>
  );
};

export default LikeEmpty;
