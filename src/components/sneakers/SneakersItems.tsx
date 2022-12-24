import React from "react";
import { Sneakers } from "../../types/sneakersTypes";
import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Spinner from "../utils/Spinner";

const Card = styled.div``;

const Img = styled.img`
  object-fit: contain;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const Code = styled.p`
  color: #c8c8c8;
`;

const Title = styled.h3`
  color: #262626;
  font-size: 20px;
`;

const Male = styled.p`
  color: #262626;
`;

const Price = styled.span`
  color: #060606;
  font-weight: 700;
`;

const Size = styled.p`
  padding: 2px 6px;
  border-radius: 5px;
  border: 1px solid #060606;
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Content = styled.div`
  padding: 0 10px;
`;

export const Buy = styled.button`
  display: inline-block;
  padding: 10px 15px;
  background-color: #000000;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  border: none;

  &:hover {
    background: #89654a;
  }
`;
export const CartIcon = styled(BsCart2)`
  font-size: 18px;
  color: #fff;
`;

const Sekeleton = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SneakersItems: React.FC<{ items: Sneakers }> = ({ items }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <Card ref={ref}>
      {inView ? (
        <Img src={items.img} alt="sneakers" />
      ) : (
        <Sekeleton>
          <Spinner />
        </Sekeleton>
      )}
      <Content>
        <Code>{items.code}</Code>
        <Title>{items.title}</Title>
        <Male>{items.male}</Male>
        <Price>{items.price} Uah</Price>
        <Wraper>
          <Inner>
            {items.sizes.map((size, i) => (
              <Size key={i}>{size}</Size>
            ))}
          </Inner>
          <Link to={`/detailes/${items.id}`}>
            <Buy>
              <CartIcon />
            </Buy>
          </Link>
        </Wraper>
      </Content>
    </Card>
  );
};

export default SneakersItems;
