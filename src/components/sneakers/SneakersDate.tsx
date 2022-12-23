import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { selectSneakersData } from '../../redux/slices/sneakersSlice';
import { fetchSneakers } from '../../redux/slices/sneakersFetch';
import SneakersItems from './SneakersItems';
import { Sneakers } from '../../types/sneakersTypes';
import styled from 'styled-components'
import { Full } from '../cart/CartEmpty';

export const Wraper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-column-gap: 10px;
padding-bottom: 100px;

@media (min-width: 750px) {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 15px;
grid-row-gap: 10px;
}
`

const SneakersDate: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectSneakersData);
  const sneakers = items.map((items: Sneakers) => (
    <SneakersItems key={items.id} items={items}/>
  ))

  useEffect (() => {
    const getSneakers = async () => {
      dispatch(fetchSneakers({}));
    };
    getSneakers ();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
   <>
    <section>
        {status === "loading" ? (
          <Full>
            loading
          </Full>
        ) : (
          <Wraper>{sneakers}</Wraper>
        )}
      </section>
   </>
  )
}

export default SneakersDate