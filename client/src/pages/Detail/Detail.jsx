import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailCountries, cleanDetail, getActivities } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import style from './Detail.module.css'

const Detail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(detailCountries(id));
    return () => {
      dispatch(cleanDetail());
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch])

  return (
    <div className={style.backDetail}>

      <div className={style.detailContainer}>

        <div className={style.countryInfoContainer}>

          <h2 style={{ color: 'white' }} className={style.countryInfo}>{country.name}</h2>

          <h3 className={style.countryInfo}>Continente: </h3>
          <span className={style.countrySpan}>{country.continents}</span>

          <h3 className={style.countryInfo}>Subregión: </h3>
          <span className={style.countrySpan}>{country.subregion}</span>

          <h3 className={style.countryInfo}>Capital: </h3>
          <span className={style.countrySpan}>{country.capital}</span>

          <h3 className={style.countryInfo}>Area: </h3>
          <span className={style.countrySpan}>{country.area} km²</span>

          <h3 className={style.countryInfo}>Población: </h3>
          <span className={style.countrySpan}>{country.population} habitantes</span>

        </div>
        <img className={style.countryImg} src={country.image} alt={`Bandera de ${country.name}`} />

      </div>

    </div>
  )
}

export default Detail