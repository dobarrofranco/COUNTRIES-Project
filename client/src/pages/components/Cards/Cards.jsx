import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import style from './Cards.module.css'

const Cards = ({page, perPage}) => {

  const countries = useSelector(state => state.countries);

  return (  

    <div className={style.cards}>
      {
      countries
      .slice(
        (page - 1) * perPage, 
        (page - 1) * perPage + perPage
      )
      .map((country) => 
          (<Card
          id={country.id}
          key={country.id}
          name={country.name}
          continents={country.continents}
          capital={country.capital}
          area={country.area}
          population={country.population}
          image={country.image}
        />)
      )}
      
    </div>
  )
}

export default Cards
