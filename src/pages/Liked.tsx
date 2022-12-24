import React from "react";
import { useSelector } from "react-redux";
import LikedItems from "../components/liked/LikedItems";
import { selectLike } from "../redux/slices/likeSlice";
import { likeItems } from "../types/likeTypes";
import LikeEmpty from "../components/liked/LikeEmpty";
import { Wrraper } from "./Orders";

const Liked: React.FC = () => {
  const { items } = useSelector(selectLike);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalCount) {
    return <LikeEmpty />;
  }

  return (
    <Wrraper>
      {items.map((items: likeItems) => (
        <LikedItems key={items.id} {...items} />
      ))}
    </Wrraper>
  );
};

export default Liked;
