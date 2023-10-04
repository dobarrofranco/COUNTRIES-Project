import React, { useState } from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import style from './Cards.module.css'
import Paginated from '../Paginated/Paginated'

const Cards = () => {

  const countries = useSelector(state => state.countries);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10); //Elementos por página.

  const totalPages = countries.length / perPage; // 25 

  return (  

    <div className={style.cards}>
      {countries
      .slice(
        (page - 1) * perPage, 
        (page - 1) * perPage + perPage)
      .map((country) => {
        return <Card
          key={country.id}
          id={country.id}
          name={country.name}
          continents={country.continents}
          capital={country.capital}
          area={country.area}
          population={country.population}
          image={country.image}
        />
      })}
      <br />
      <Paginated page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  )
}

export default Cards
