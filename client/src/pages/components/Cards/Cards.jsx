import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import style from './Cards.module.css'

const Cards = () => {

  const countries = useSelector(state => state.countries);

  return (
    <div className={style.cards}>
      {countries
      
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
    </div>
  )
}

export default Cards
