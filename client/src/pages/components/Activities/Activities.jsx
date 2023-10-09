import { useSelector } from 'react-redux'
import Activity from '../Activity/Activity'
import style from './Activities.module.css'

const Activities = () => {

    const activity = useSelector(state => state.activityType);
    return (
        <div className={style.activitiesContainer}>
            
            {activity.map((activity) => (
                <Activity
                    key={activity.id}
                    country={activity.countries}
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