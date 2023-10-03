import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import axios from 'axios';

import Landing from './pages/Landing/Landing'
import Nav from './pages/Nav/Nav';
import Cards from './pages/components/Cards/Cards';
import Paginated from './pages/components/Paginated/Paginated';

import style from './App.module.css';

function App() {
  const location = useLocation();

  const [countries, setCountries] = useState([]);


  async function onSearch(countryName) {

    let country = [];

    countries.forEach((element) => {
      country.push(element.name);
    })

    for (let i = 0; i < country.length; i++) {
      if (country[i].toLowerCase() === countryName.toLowerCase()) {
        return alert('That country already exists');
      }
    }

    try {
 
      const { data } = await axios(`http://localhost:3001/countries/search?name=${countryName}`)
 
      if (data.countries.name) {
        setCountries((oldCountries) => [...oldCountries, data.countries]);
        // El estado anterior se proporciona para garantizar que estás actualizando el estado basándote en su valor anterior y evitando problemas de concurrencia.
      }
 
    } catch (error) {
      alert(`There are no countries with name: ${countryName}`);
      return
    }


  }

  function onClose(countryID) {
    const filteredCountries = countries.filter((country) => country.id !== countryID);
    
    setCountries(filteredCountries);
  }



  return (

    <div className={style.App}>

      {location.pathname === '/home' ? <Nav onSearch={onSearch}></Nav> : null}

      <Routes>

        <Route
          path='/'
          element={<Landing />}
        />

        <Route
          path='/home'
          element={<Cards countries={countries} onClose={onClose}/>}
        />

      </Routes>

    </div>

  )

}

export default App
