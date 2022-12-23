import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Container } from "../components/Container";
import AddToCart from "../components/cart/AddToCart";
import AddToLiked from "../components/liked/AddToLiked";
import Spinner from "../components/utils/Spinner";

export const Info = styled.div`
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 22px;
`;

const Detailes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const LeftIcon = styled(FaAngleLeft)`
  font-size: 22px;
  color: #000000;
`;

const Picture = styled.img`
  width: 400px;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 0 20px;
  text-align: center;

  @media (min-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Name = styled.h3`
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Size = styled.p`
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid #060606;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;
const Sizes = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 22px;
  color: #aaaaaa;
  max-width: 300px;

  @media (min-width: 750px) {
    max-width: 500px;
  }
`;

const Add = styled(Inner)`
  margin-top: 20px;
`;

export const Priced = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;

const About = styled.div`
  @media (min-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

const SneakersDetailes: React.FC = () => {
  const { code } = useParams();
  const [activeSizes, setActiveSizes] = React.useState(0);
  const [date, setIDate] = useState<{
    price: number;
    img: string;
    title: string;
    sizes: number[];
    id: string;
    description: string;
    count: number;
  }>();

  useEffect(() => {
    axios
      .get(`https://63630b2e66f75177ea3c41dc.mockapi.io/sneakers/${code}`)
      .then(({ data }) => setIDate(data));
    // eslint-disable-next-line
  }, [code]);

  if (!date) {
    return <Spinner />;
  }

  return (
    <Container>
      <Info>
        <Detailes>
          <Link to="/">
            <LeftIcon />
          </Link>
          <Title>Detailes</Title>
          <AddToLiked
            id={date.id}
            img={date.img}
            title={date.title}
            price={date.price}
            count={date.count}
          />
        </Detailes>
        <About>
          <div>
            <Picture src={date.img} alt="sneakers" />
            <Name>{date.title}</Name>
          </div>
          <Inner>
            <Description>Sizes:</Description>
            <Sizes>
              {date.sizes.map((size, i) => (
                <Size
                  key={i}
                  onClick={() => setActiveSizes(i)}
                  className={activeSizes === i ? "chosed" : ""}
                >
                  {size}
                </Size>
              ))}
            </Sizes>
          </Inner>
        </About>
        <Content>
          <Description>{date.description}</Description>
          <Add>
            <Priced>{date.price} Uah</Priced>
            <AddToCart
              id={date.id}
              img={date.img}
              price={date.price}
              title={date.title}
              sizes={date.sizes}
              count={date.count}
              activeSizes={activeSizes}
            />
          </Add>
        </Content>
      </Info>
    </Container>
  );
};

export default SneakersDetailes;
