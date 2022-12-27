import React, { useEffect, useState } from "react";
import { Wrraper } from "./Orders";
import axios from "axios";
import ListEmpty from "../components/orderlist/ListEmpty";
import Spinner from "../components/utils/Spinner";
import styled from "styled-components";
import { GET_ORDERS } from "../env";
import { Priced } from "./SneakersDetailes";

const Center = styled.div`
  text-align: center;
  padding: 5px 0;
`;
const Title = styled.h2``;
const Card = styled.div`
margin-bottom: 50px;
`;
const Img = styled.img``;
const Wraper = styled.div``;

const Name = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Inner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;
`
const Size = styled.p`
padding : 4px 10px;
border-radius: 7px;
border: 1px solid #000000;
color: 
`


const OrdersLIst: React.FC = () => {
  const [date, setDate] = useState<
    {
      items: [
        {
          id: string;
          price: number;
          img: string;
          title: string;
          sizes: string;
          count: number;
        }
      ];
      mail: string;
      number: string;
      name: string;
      id: string;
    }[]
  >();

  useEffect(() => {
    axios.get(GET_ORDERS).then(({ data }) => setDate(data));
    // eslint-disable-next-line
  }, []);

  if (!date) {
    return <Spinner />;
  }

  return (
    <>
      <Center className={`${date.length > 0 ? "" : "orders"}`}>
        <Title>My Orders</Title>
      </Center>
      <>
        {date.length > 0 ? (
          <Wrraper >
            {date.map(({ items, id }) => (
              <Wraper key={id}>
                {items.map(({ price, img, id, title, sizes }) => (
                  <Card key={id}>
                    <Img src={img} alt="sneakers" />
                    <Name>{title}</Name>
                    <Inner>
                      <Priced>{price} Uah</Priced>
                      <Size>Size: <b>{sizes}</b></Size>
                    </Inner>
                  </Card>
                ))}
              </Wraper>
            ))}
          </Wrraper>
        ) : (
          <ListEmpty />
        )}
      </>
    </>
  );
};

export default OrdersLIst;
