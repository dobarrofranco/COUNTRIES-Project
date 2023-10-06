import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({id, name, image, continents, capital, subregion, area, population, onClose}) => {
  return (
    <div className={style.cardContainer}>

        {/* <button className={style.closeButton} onClick={()=>{onClose(id)}}>X</button> */}

        <Link to={`../detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        {/* <h3>Continente: {continents}</h3> */}
        {/* <h3>Capital: {capital}</h3> */}
        {/* <h3>Area: {area} km²</h3> */}
        <h3>{population} habitantes</h3>
        <Link to={`../detail/${id}`}>
          <img src={image} alt={`Bandera de ${name}`} />
        </Link>
        

    </div>
  )
}

export default Card