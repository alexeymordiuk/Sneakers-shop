import React from 'react'
import styled from "styled-components";
 
export const Full = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Empty = styled.div`
background: #f6f6f6;
height: 90vh;
width: 90vw;
display: flex;
align-items: center;
justify-content: center;
`

const CartEmpty: React.FC = () => {
  return (
    <Full>
      <Empty>
        <h2>Cart is empty!</h2>
      </Empty>
    </Full>
  )
}

export default CartEmpty