import React from "react";
import { CiSearch } from "react-icons/ci";
import styled from 'styled-components';

const Wraper = styled.section`
margin-bottom: 20px;
`

const Inner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
border: 1px solid #dddddd;
padding: 12px;
border-radius: 8px;

@media (min-width: 750px) {
  width: 500px;
  }
`

const Input = styled.input`
background: none;
border: none;
width: 100%;
padding: 2px 0;
font-size: 16px;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 500;
margin-bottom: 15px;
`

const Search: React.FC = () => {
  return (
    <Wraper>
       <Title>Means Sneakers</Title>
      <Inner>
        <Input type="text" placeholder="Search"/>
        <CiSearch size={22}/>
      </Inner>
    </Wraper>
  );
};

export default Search;
