import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByName } from '../../../redux/actions';
import { Link } from "react-router-dom";
import style from './SearchBar.module.css'

export default function SearchBar({ setPage }) {

   const allCountries = useSelector(state => state.countriesCopy);

   const dispatch = useDispatch();

   const [countryName, setCountryName] = useState("");

   const handleClick = () => {
      return allCountries;
   }

   function changeHandler(event) {
      event.preventDefault();
      setCountryName(event.target.value);
   }

   function dispatchHandler() {
      dispatch(searchByName(countryName));
      setPage(1)
   }

   return (
      <div className={style.searchBarContainer}>
         <Link to='/home'>
            <button className={style.homeBtn} onClick={handleClick()}>🌍</button>
         </Link>
         <input className={style.searchInput} type='search' name="searchBar" onChange={changeHandler} value={countryName} />
         <button className={style.searchBtn} onClick={dispatchHandler} >🔎</button>
      </div>
   );
}