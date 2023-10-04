import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards'
import SearchBar from '../components/SearchBar/SearchBar';
import { getCountries } from '../../redux/actions';

import style from './Home.module.css';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch])

    return (
        <div className={style.homeContainer}>
            
            {/* <SearchBar />  */}

            <Cards />

        </div>
    )
}

export default Home