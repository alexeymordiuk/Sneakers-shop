import React, { useState } from "react";
import Burger from "./Burger";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartIcon } from "./sneakers/SneakersItems";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import { BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  p {
    font-size: 20px;
    color: #000000;
  }
  cursor: pointer;
`;

const IconCart = styled(CartIcon)`
  color: #000000;
  font-size: 24px;
`;

const IconFill = styled(BsCartFill)`
  color: #89654a;
  font-size: 24px;
`;

const Total = styled.span`
  font-size: 22px;
  color: #000000;
`;

const BurgerIcon = styled(GiHamburgerMenu)`
  font-size: 22px;
  color: #000000;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #89654a;
  }
`;

const BurgerBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

const Header: React.FC = () => {
  const { items } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const [click, setClick] = useState<boolean>(true);

  const onClickOpen = () => {
    setClick(!click);
    document.body.style.overflow = "hidden";
  };

  return (
    <Head>
      <Burger click={click} setClick={setClick} />
      <BurgerBtn onClick={onClickOpen}>
        <BurgerIcon />
      </BurgerBtn>
      <Link to="/orders">
        <Cart>
          <p>Cart</p> {totalCount ? <IconFill /> : <IconCart />}
          <Total className={`${totalCount ? "" : "count"}`}>{totalCount}</Total>
        </Cart>
      </Link>
    </Head>
  );
};

export default Header;
