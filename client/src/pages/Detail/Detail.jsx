import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailCountries, cleanDetail, getActivities } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import style from './Detail.module.css'

const Detail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryDetail);

  // console.log(country);

  const detailCountry = country[0];

  useEffect(() => {
    dispatch(detailCountries(id));
    return () => {
      dispatch(cleanDetail());
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch])

  const classContinent = () => {
    
    if(detailCountry?.continents === 'Africa') {
      return style.backAfrica;
    }
    if (detailCountry?.continents === 'Europe') {
      return style.backEurope
    }
    if (detailCountry?.continents === 'Oceania') {
      return style.backOceania
    }
    if (detailCountry?.continents === 'Asia') {
      return style.backAsia
    }
    if (detailCountry?.continents === 'South America') {
      return style.backSouthAmerica
    }
    if (detailCountry?.continents === 'North America') {
      return style.backNorthAmerica
    }
    if (detailCountry?.continents === 'Antarctica') {
      return style.backAntarctica
    }
    return style.backDefault
  }

  const classContinentText = () => {
    if(detailCountry?.continents === 'Africa') {
      return style.infoAfrica;
    }
    if (detailCountry?.continents === 'Europe') {
      return style.infoEurope
    }
    if (detailCountry?.continents === 'Oceania') {
      return style.infoOceania
    }
    if (detailCountry?.continents === 'Asia') {
      return style.infoAsia
    }
    if (detailCountry?.continents === 'South America') {
      return style.infoSouthAmerica
    }
    if (detailCountry?.continents === 'North America') {
      return style.infoNorthAmerica
    }
    if (detailCountry?.continents === 'Antarctica') {
      return style.infoAntarctica
    }
    return style.infoDefault
  }

  const classContinentSpan = () => {
    if(detailCountry?.continents === 'Africa') {
      return style.spanAfrica;
    }
    if (detailCountry?.continents === 'Europe') {
      return style.spanEurope
    }
    if (detailCountry?.continents === 'Oceania') {
      return style.spanOceania
    }
    if (detailCountry?.continents === 'Asia') {
      return style.spanAsia
    }
    if (detailCountry?.continents === 'South America') {
      return style.spanSouthAmerica
    }
    if (detailCountry?.continents === 'North America') {
      return style.spanNorthAmerica
    }
    if (detailCountry?.continents === 'Antarctica') {
      return style.spanAntarctica
    }
    return style.spanDefault
  }

  const backDetail = classContinent();

  const countryInfo = classContinentText();

  const countrySpan = classContinentSpan();

  return (
    <div className={backDetail}>

      <div className={style.detailContainer}>

        <div className={style.countryInfoContainer}>

          <h2 className={countryInfo}>{detailCountry?.name}</h2>

          <h3 className={countryInfo}>Continente: </h3>
          <span className={countrySpan}>{detailCountry?.continents}</span>

          <h3 className={countryInfo}>Subregión: </h3>
          <span className={countrySpan}>{detailCountry?.subregion}</span>

          <h3 className={countryInfo}>Capital: </h3>
          <span className={countrySpan}>{detailCountry?.capital}</span>

          <h3 className={countryInfo}>Area: </h3>
          <span className={countrySpan}>{detailCountry?.area} km²</span>

          <h3 className={countryInfo}>Población: </h3>
          <span className={countrySpan}>{detailCountry?.population} habitantes</span>

          {detailCountry?.activities.length !== 0 && <h3 className={countryInfo} >Actividades: </h3>}

          <ul>
            {detailCountry?.activities?.map((country) => (
              <li className={style.activityName}>{country.name}</li>
            ))}
          </ul>

        </div>

        <img className={style.countryImg} src={detailCountry?.image} alt={`Bandera de ${detailCountry?.name}`} />

      </div>

    </div>
  )
}

export default Detail