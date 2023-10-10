import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({ id, name, image, population }) => {
  return (

    <NavLink className={style.navlink} to={`../detail/${id}`}>
      <div className={style.cardContainer}>

        <h2 className={style.name}>{name}</h2>

        <h3 className={style.population} >{population} habitantes</h3>

        <img className={style.imgCard} src={image} alt={`Bandera de ${name}`} />

      </div>
    </NavLink>

  )
}

export default Card