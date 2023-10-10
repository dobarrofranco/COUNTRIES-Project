import style from './Activity.module.css'

const Activity = ({name, difficulty, duration, season, country}) => {

    return (
        <div className={style.activityContainer}>
            <h4>País: {country}</h4>
            <h4>Nombre: {name}</h4>
            <p>Dificultad: {difficulty}</p>
            <p>Estación: {season}</p>
            <p>Duración: {duration}</p>
        </div>
    )
}

export default Activity