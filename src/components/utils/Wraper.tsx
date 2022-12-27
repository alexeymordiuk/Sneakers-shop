import styled from "styled-components";

export const Wraper = styled.section`
display: grid;
grid-template-columns: 1fr;
gap: 20px 0;
padding-bottom: 70px;
overflow: auto;
height: calc(100vh - 300px);

&::-webkit-scrollbar {
  background-color: #f0f2f6;
  width: 7px;
}

&::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border-radius: 10px;
}

@media (min-width: 750px) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px 25px;
  height: calc(100vh - 200px);
}
`;