import { useSelector } from 'react-redux'
import style from './Activities.module.css'

const Activities = () => {

    const activity = useSelector(state => state.activityType);

    // console.log(activity);

    return (
        <div className={style.activitiesContainer}>
            <p>País: {activity[0].Countries[0].name}</p>
            <h4>Nombre: {activity[0].name}</h4>
            <p>Dificultad: {activity[0].difficulty}</p>
            <p>Estación: {activity[0].season}</p>

        </div>
    )
}

export default Activities