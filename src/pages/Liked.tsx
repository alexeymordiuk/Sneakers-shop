import React from "react";
import { Container } from "../components/Container";
import { Info } from "./SneakersDetailes";
import { useSelector } from "react-redux";
import { Wraper } from "../components/sneakers/SneakersDate";
import LikedItems from "../components/liked/LikedItems";
import { selectLike } from "../redux/slices/likeSlice";
import { likeItems } from "../types/likeTypes";
import LikeEmpty from "../components/liked/LikeEmpty";

const Liked: React.FC = () => {
  const { items } = useSelector(selectLike);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if(!totalCount){
    return <LikeEmpty/>
  }

  return (
    <Info>
      <Container>
        <Wraper>
          {
            items.map((items: likeItems) => (
              <LikedItems key={items.id} {...items}/>
            ))
          }
        </Wraper>
      </Container>
    </Info>
  );
};

export default Liked;
