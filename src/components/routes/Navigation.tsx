import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../dates/Routes";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { selectLike } from "../../redux/slices/likeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TbListCheck } from "react-icons/tb";

export const Navigat = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #f0f2f6;
  padding: 10px;
  border-radius: 6px;

  li {
    position: relative;
  }
`;

const Count = styled.span`
  font-size: 12px;
  color: #89654a;
  position: absolute;
`;

const activeStyle = {
  color: "#89654a",
};

const IconHeart = styled(AiOutlineHeart)`
  position: relative;
`;

const IconList = styled(TbListCheck)``;

const Navigation: React.FC = () => {
  const { items } = useSelector(selectLike);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <Navigat>
      <Nav>
        {links.map(({ link, img, id }) => (
          <li key={id}>
            <NavLink
              className="link"
              to={link}
              end
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {img}
            </NavLink>
          </li>
        ))}
        <NavLink
          to="liked"
          className="link"
          end
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <IconHeart />
          <Count className={`${totalCount ? "" : "count"}`}>{totalCount}</Count>
        </NavLink>
        <NavLink
          to="list"
          className="link"
          end
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <IconList />
        </NavLink>
      </Nav>
    </Navigat>
  );
};

export default Navigation;
