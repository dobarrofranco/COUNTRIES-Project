import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards'
import SearchBar from '../components/SearchBar/SearchBar';
import Paginated from '../components/Paginated/Paginated';
import { getCountries } from '../../redux/actions';

import style from './Home.module.css';

const Home = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10); //Elementos por página.
  
    const totalPages = countries.length / perPage; // 25 

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch])

    return (
        <div className={style.homeContainer}>
            
            <SearchBar page={page} setPage={setPage} perPage={perPage} totalPages={totalPages}/> 

            <Cards page={page} setPage={setPage} perPage={perPage} totalPages={totalPages}/>

            {countries.length !== 1 ? <Paginated page={page} setPage={setPage} totalPages={totalPages}/> : null}

        </div>
    )
}

export default Home