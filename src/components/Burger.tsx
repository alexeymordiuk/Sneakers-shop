import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { linksText } from "../dates/Routes";
import { Link } from "react-router-dom";

const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000000;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseIcon = styled(IoIosClose)`
  cursor: pointer;
  color: #ffffff;
  font-size: 50px;
  transition: color 0.3s ease-in-out;
  position: absolute;
  right: 0;
  top: 20px;

  &:hover {
    color: #89654a;
  }
`;

const List = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

const Linked = styled(Link)`
  font-size: 25px;
  color: #ffffff;
  transitin: color 0.3s ease-in-out;

  &:hover {
    color: #89654a;
  }
`;

interface BurgerProps {
  click: boolean;
  setClick: (click: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ click, setClick }) => {
  const onClickClose = () => {
    setClick(!click);
    document.body.style.overflow = "visible";
  };

  return (
    <Shadow className={`${click ? "burger" : "burger-active"}`}>
      <Menu>
        <CloseIcon onClick={onClickClose} />
        <List>
          <li>
            {linksText.map(({ id, text, link }) => (
              <Linked to={link} key={id}>
                {text}
              </Linked>
            ))}
          </li>
        </List>
      </Menu>
    </Shadow>
  );
};

export default Burger;
