import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { filterContinent, orderName, orderPopulation, filterContinentOrderNameAZ, filterContinentOrderNameZA, filterContinentPopulationA, filterContinentPopulationD, activityType, getActivities } from "../../../redux/actions"

import style from './OptionFilter.module.css'

const OptionFilter = ({ setPage, setInput }) => {

    const dispatch = useDispatch();

    const activities = useSelector(state => state.activities);

    // console.log(activities[0].name);

    const continentHandler = (event) => {
        if (event.target.value !== 'Seleccione') {
            dispatch(filterContinent(event.target.value));
            setPage(1);
            setInput(1);
        }
    }

    const combinatedHandler = (event) => {
        const parameter = event.target.value;
        if (parameter === 'A-Z') {
            dispatch(filterContinentOrderNameAZ(parameter));
            setPage(1);
            setInput(1);
        } else if (parameter === 'Z-A') {
            dispatch(filterContinentOrderNameZA(parameter));
            setPage(1);
            setInput(1);
        } else if (parameter === 'A') {
            dispatch(filterContinentPopulationA(parameter));
            setPage(1);
            setInput(1);
        } else {
            dispatch(filterContinentPopulationD(parameter));
            setPage(1);
            setInput(1);
        }
    }

    const handleOrderName = (event) => {
        dispatch(orderName(event.target.value));
        setPage(1);
        setInput(1);
    }

    const handleOrderPopulation = (event) => {
        dispatch(orderPopulation(event.target.value));
        setPage(1);
        setInput(1);
    }

    const handleActivities = (event) => {
        dispatch(activityType(event.target.value));
    }

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    return (
        <div className={style.optionContainer}>

            <div className={style.filterActivities}>
                <label>Tipo de actividad: </label>
                <select onChange={handleActivities}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    {activities.map(activity => {
                        return (
                            <option key={activity.id} value={activity.name}>
                                {activity.name}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className={style.filterContinent}>
                <label>Filtrar por continente: </label>
                <select onChange={continentHandler}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value='Africa'>Africa</option>
                    <option value='Oceania'>Oceania</option>
                </select>
                <br />
                <label>Ordenar por nombre: </label>
                <select onChange={combinatedHandler}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <label>Ordenar por población: </label>
                <select onChange={combinatedHandler}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value={'A'}>A</option>
                    <option value={'D'}>D</option>
                </select>
            </div>

            <div className={style.orderName}>
                <label>Ordenar por nombre: </label>
                <select onChange={handleOrderName}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>

            <div className={style.orderPopulation}>
                <label>Ordenar por población: </label>
                <select onChange={handleOrderPopulation}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value={'A'}>A</option>
                    <option value={'D'}>D</option>
                </select>
            </div>

        </div>
    )
}

export default OptionFilter