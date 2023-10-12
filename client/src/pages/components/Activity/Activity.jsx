import style from './Activity.module.css'
import { NavLink } from 'react-router-dom'

const Activity = ({ name, difficulty, duration, season, countries }) => {

    return (
        <div className={style.activityContainer}>
            {countries.length === 1 ? <h4>País</h4> : <h4>Países:</h4>}
            <ul>
                {countries.map((country) => (
                    <NavLink to={`/detail/${country.id}`}>
                        <li className={style.countryList} key={country.id} >{country.name}</li>
                    </NavLink>
                ))} 
            </ul>
            <h4>Nombre: {name}</h4>
            <p>Dificultad: {difficulty}</p>
            <p>Estación: {season}</p>
            <p>Duración: {duration}</p>
        </div>
    )
}

export default Activity