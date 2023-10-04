import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards'
import SearchBar from '../components/SearchBar/SearchBar';
import { getCountries } from '../../redux/actions';

import style from './Home.module.css';

const Home = () => {

    const [countries, setCountries] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch])

    async function onSearch(countryName) {

        // let country = [];
    
        // countries.forEach((element) => {
        //   country.push(element.name);
        // })
    
        // for (let i = 0; i < country.length; i++) {
        //   if (country[i].toLowerCase() === countryName.toLowerCase()) {
        //     return alert('That country already exists');
        //   }
        // }
    
        try {
    
          const { data } = await axios(`http://localhost:3001/countries/?name=${countryName}`)
    
          if (data.countries.name) {
            setCountries((oldCountries) => [...oldCountries, data.countries]);
            // El estado anterior se proporciona para garantizar que estás actualizando el estado basándote en su valor anterior y evitando problemas de concurrencia.
          }
    
        } catch (error) {
          alert(`There are no countries with name: ${countryName}`);
          return
        }
    }

    return (
        <div className={style.homeContainer}>
            
            <SearchBar onSearch={onSearch}/>

            <Cards />

        </div>
    )
}

export default Home