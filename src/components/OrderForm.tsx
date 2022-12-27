import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon, Shadow } from "./Burger";
import { Container } from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, clearItems } from "../redux/slices/cartSlice";
import axios from "axios";
import { Loading } from "./utils/Spinner";
import CartEmpty from "./cart/CartEmpty";
import { POST_ORDERS } from "../env";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import {AiOutlineLock} from "react-icons/ai"

const Form = styled.form`
  height: 70vh;
  width: 100vw;
  position: relative;
  background-color: #f5faff;
  border-radius: 30px;
  box-shadow: 0 0 40px rgb(86 86 86 / 30%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 750px) {
    width: 60vw;
  }
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  background-color: #f5faff;
  text-align: center;
  padding: 30px 20px;
  border-radius: 8px;

  @media (min-width: 750px) {
    width: 70%;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  color: #000000;
  width: 100%;
`;

const Submit = styled.input`
  display: inline-block;
  padding: 9px 15px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  border: none;
  font-size: 17px;
  width: 50%;
  margin: 0 auto;

  &:hover {
    background: #89654a;
  }
`;

const InputWraper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000000;
`;

export const UserIcon = styled(FiUser)`
  font-size: 20px;
  color: #000000;
`;
export const MailIcon = styled(AiOutlineMail)`
  font-size: 20px;
  color: #000000;
`;
export const PhoneIcon = styled(BsPhone)`
  font-size: 20px;
  color: #000000;
`;
export const PassIcon = styled(AiOutlineLock)`
  font-size: 20px;
  color: #000000;
`;

const FormText = styled.div``;

interface formProps {
  setOpenForm: (openForm: boolean) => void;
  openForm: boolean;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const OrderForm: React.FC<formProps> = ({ setOpenForm, openForm }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderId, setOrderID] = useState(null);
  const [isOrderComplete, setOrderIsComplete] = useState<boolean>(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onCLickOrder = async () => {
    if (mail !== "") {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          `${POST_ORDERS}`,
          // { items: items , mail: mail, name: name, number: number }
          { items: items, mail, name, number }
        );
        await delay(2000);
        setOrderID(data.id);
        setOrderIsComplete(true);
        dispatch(clearItems());
      } catch (error) {
        alert("Cant create the order, please try again later");
      }
      setIsLoading(false);
    }
  };

  const onClickCloseForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <Shadow className={`${openForm ? "burger" : "burger-active"}`}>
      <Form>
        {isLoading ? <Loading /> : ""}
        {items.length > 0 ? (
          <Grid className={`${isLoading ? "orders" : ""}`}>
            <FormText>
              <h2>Checkout</h2>
              <h3>Please enter your name email and phone for checkout</h3>
            </FormText>
            <InputWraper>
              <UserIcon />
              <Input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWraper>
            <InputWraper>
              <MailIcon />
              <Input
                type="email"
                placeholder="Email"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </InputWraper>
            <InputWraper>
              <PhoneIcon />
              <Input
                type="number"
                placeholder="Phone"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </InputWraper>
            <Submit type="submit" onClick={onCLickOrder} value="Order" />
          </Grid>
        ) : (
          <CartEmpty
            isOrderComplete={isOrderComplete}
            title={
              isOrderComplete
                ? `Thanks for order ${name}. Your order at number ${orderId} has been transferred to the manager. You can close this window.`
                : "Please add at least one pair of sneakers"
            }
          />
        )}
      </Form>
      <CloseIcon onClick={onClickCloseForm}></CloseIcon>
    </Shadow>
  );
};

export default OrderForm;
