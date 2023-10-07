import { useSelector } from 'react-redux'
import Activity from '../Activity/Activity'
import style from './Activities.module.css'

const Activities = () => {

    const activity = useSelector(state => state.activityType);
    // console.log(activity);
    //activity[0].Countries[0].name
    return (
        <div className={style.activitiesContainer}>
            
            <h4>Pais: {activity[0].Countries[0].name}</h4>
            {activity.map((activity) => (
                <Activity
                    key={activity.id}
                    name={activity.name}
                    difficulty={activity.difficulty}
                    season={activity.season}
                    duration={activity.duration}
                />
            ))}
            
        </div>
    )
}

export default Activities