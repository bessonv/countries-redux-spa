import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "./controls-slice";
import { selectSearch } from "./controls-slice";

export const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    const timout = setTimeout(() => {
      dispatch(setSearch(searchInput));
    }, 600);
    return () => clearTimeout(timout);
  }, [searchInput]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  }

  return [searchInput, handleSearch];
}