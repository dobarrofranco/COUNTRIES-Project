import {useState} from "react";

export default function SearchBar({onSearch}) {
   
   const [countryName, setName] = useState("");

   function changeHandler(event) {
      setName(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={changeHandler} value={countryName}/>
         <button onClick={() => {onSearch(countryName); setName("")}}>Buscar</button>
      </div>
   );
}