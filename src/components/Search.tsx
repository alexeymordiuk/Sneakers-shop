import React from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux/slices/filterSlice";

const Wraper = styled.section`
  margin-bottom: 20px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid #dddddd;
  padding: 12px;
  border-radius: 8px;
  
`;

const Input = styled.input`
  background: none;
  border: none;
  width: 100%;
  padding: 2px 0;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useCallback(// eslint-disable-line react-hooks/exhaustive-deps
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <Wraper>
      <Title>Means Sneakers</Title>
      <Inner>
        <Input
          type="text"
          placeholder="Search"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <CiSearch size={22} />
      </Inner>
    </Wraper>
  );
};

export default Search;
