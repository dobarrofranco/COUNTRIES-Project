import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards'
import SearchBar from '../components/SearchBar/SearchBar';
import Paginated from '../components/Paginated/Paginated';
import OptionFilter from '../components/OptionFilter/OptionFilter';
import Activities from '../components/Activities/Activities';
import { getCountries, activityType } from '../../redux/actions';

import style from './Home.module.css';

const Home = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);
    const activity = useSelector(state => state.activityType);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10); //Elementos por página.

    const totalPages = Math.ceil(countries.length / perPage); // 25 

    const [input, setInput] = useState(1);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    useEffect(() => {
        dispatch(activityType());
    }, [dispatch])

    return (
        <div className={style.backHome}>

            <div className={style.homeContainer}>

                <OptionFilter setPage={setPage} setInput={setInput} />

                <SearchBar setPage={setPage} />

                <div className={style.activitiesContainer}>
                    {activity.length > 0 ? <Activities /> : null}
                </div>

                <Cards page={page} setPage={setPage} perPage={perPage} totalPages={totalPages} />

                {countries.length !== 1 ? <Paginated page={page} setPage={setPage} totalPages={totalPages} input={input} setInput={setInput} /> : null}

            </div>
            
        </div>

    )
}

export default Home