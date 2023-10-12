import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { activityType } from '../../../redux/actions'
import Activity from '../Activity/Activity'
import style from './Activities.module.css'

const Activities = () => {
    const dispatch = useDispatch()
    const activity = useSelector(state => state.activityType);

    useEffect(() => {
        dispatch(activityType())
    }, [dispatch])

    return (
        <div className={style.activitiesContainer}>
            
            {activity.map((activity) => (
                <Activity
                    key={activity.id}
                    countries={activity.countries}
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