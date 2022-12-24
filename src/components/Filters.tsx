import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectSort,
  SortPropertyEnum,
  setSort,
} from "../redux/slices/filterSlice";
import {MdSort} from 'react-icons/md'

const Filter = styled.div`
margin: 0 0 15px auto;
position: relative;
`

const Sorted = styled.button`
display: inline-flex;
align-items: center;
gap: 15px;
border: none;
background: #000000;
cursor: pointer;
font-size:  17px;
font-weight: bold;
color: #ffffff;
padding: 10px;
border-radius: 8px;
transition: background 0.3s ease-in-out;
border: none;

&:hover {
  background: #89654a;
}
`

const SortIcon = styled(MdSort)`
font-size: 20px;
color: #ffffff;
`

const List = styled.ul`
position: absolute;
display: flex;
flex-direction: column;
gap: 10px;
left: -70px;
margin-top: 10px;
background: #000000;
border-radius: 8px;
padding: 8px 15px;
transition: position 0.3s ease-in-out;

li {
  font-size: 18px;
  color: #ffff;
  cursor: pointer;
}
`

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export const listSort: SortItem[] = [
  {name: "Clear", sortProperty: SortPropertyEnum.RATING_DESC}, 
	{name: "Price: High to Low", sortProperty: SortPropertyEnum.PRICE_DESC}, 
	{name: "Price: Low to High", sortProperty: SortPropertyEnum.PRICE_ASC}, 
];

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const [isVisible, setIsVisible] = useState<{}>(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClikSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  useEffect(() => {
    const heandeClickOut = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("click", heandeClickOut);

    return () => {
      document.body.removeEventListener("click", heandeClickOut);
    };
  }, []);

  return (
    <Filter ref={sortRef}>
        <Sorted onClick={() => setIsVisible(!isVisible)}><SortIcon />Sort</Sorted>
      {isVisible && (
        <List>
          {listSort.map((obj, index) => (
            <li
              onClick={() => onClikSort(obj)}
              key={index}
              className={
                sort.sortProperty === obj.sortProperty ? "filters" : ""
              }
            >
              {obj.name}
            </li>
          ))}
        </List>
      )}
    </Filter>
  );
};

export default Filters;
