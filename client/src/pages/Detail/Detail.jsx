import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailCountries } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import Card from '../components/Card/Card'
import style from './Detail.module.css'

const Detail = () => {

  const country = useSelector((state) => state.countryDetail);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailCountries(id));
  }, [dispatch, id]);

  return (
    <div className={style.detailContainer}>

      <h2>{country.name}</h2>
      <h3>Continente: {country.continents}</h3>
      <h3>Capital: {country.capital}</h3>
      <h3>Area: {country.area}</h3>
      <h3>Población: {country.population}</h3>
      <img src={country.image} alt={`Bandera de ${country.name}`} />

    </div>
  )
}

export default Detail