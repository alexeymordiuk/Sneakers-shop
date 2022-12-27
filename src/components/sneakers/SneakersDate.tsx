import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { selectSneakersData } from "../../redux/slices/sneakersSlice";
import {
  fetchSneakers,
  SneakersSearch,
} from "../../redux/slices/sneakersFetch";
import SneakersItems from "./SneakersItems";
import { Sneakers } from "../../types/sneakersTypes";
import Skeleton from "../utils/Skeleton";
import { selectFilter, setFilters } from "../../redux/slices/filterSlice";
import qs from "qs";
import { listSort } from "../Filters";
import { useNavigate } from "react-router-dom";
import { Wraper } from "../utils/Wraper";


const SneakersDate: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { items, status } = useSelector(selectSneakersData);
  const { sort, searchValue } = useSelector(selectFilter);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const sneakers = items.map((items: Sneakers) => (
    <SneakersItems key={items.id} items={items} />
  ));

  const getSneakers = async () => {
    const search = searchValue ? `&search=${searchValue}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";

    dispatch(
      fetchSneakers({
        sortBy,
        order,
        search,
      })
    );
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SneakersSearch;
      const sort = listSort.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          searchValue: params.search,
          sort: sort ? sort : listSort[0],
        })
      );
    }
    isMounted.current = true;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getSneakers();
    }

    isSearch.current = false;
  }, [sort.sortProperty, searchValue]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sort.sortProperty]);

  // useEffect(() => {
  //   const getSneakers = async () => {
  //     dispatch(fetchSneakers({searchValue}));
  //   };
  //   getSneakers();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {status === "error" ? (
        <div>Error...</div>
      ) : (
        <Wraper>{status === "loading" ? skeletons : sneakers}</Wraper>
      )}
    </>
  );
};

export default SneakersDate;
