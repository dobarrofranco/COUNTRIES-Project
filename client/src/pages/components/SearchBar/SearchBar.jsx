import {useState} from "react";

export default function SearchBar() {
   
   const [countryName, setCountryName] = useState("");

   function changeHandler(event) {
      setCountryName(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={changeHandler} value={countryName}/>
         <button>Buscar</button>
      </div>
   );
}