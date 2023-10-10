import {useState} from "react";
import { useDispatch } from "react-redux";
import {searchByName} from '../../../redux/actions';
import style from './SearchBar.module.css'

export default function SearchBar({setPage}) {
   const dispatch = useDispatch();
   const [countryName, setCountryName] = useState("");

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
         <input className={style.searchInput} type='search' name="searchBar" onChange={changeHandler} value={countryName}/>
         <button className={style.searchBtn} onClick={dispatchHandler} >🔎</button>
      </div>
   );
}