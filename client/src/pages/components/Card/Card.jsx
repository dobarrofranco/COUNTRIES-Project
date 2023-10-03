import React from 'react'
import style from './Card.module.css'

const Card = ({id, name, image, continents, capital, subregion, area, population, onClose}) => {
  return (
    <div>

        <button className={style.closeButton} onClick={()=>{onClose(id)}}>X</button>

        <h2>{name}</h2>
        <h3>Continente: {continents}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <h3>Población: {population}</h3>
        {/* <h3>ID: {id}</h3> */}
        <img src={image} alt={`Bandera de ${name}`} />

    </div>
  )
}

export default Card