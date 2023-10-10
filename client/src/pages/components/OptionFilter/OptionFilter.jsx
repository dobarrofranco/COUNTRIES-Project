import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { filterContinent, orderName, orderPopulation, filterContinentOrderNameAZ, filterContinentOrderNameZA, filterContinentPopulationA, filterContinentPopulationD, activityType, getActivities, getContinents } from "../../../redux/actions"

import style from './OptionFilter.module.css'

const OptionFilter = ({ setPage, setInput }) => {

    const dispatch = useDispatch();

    const activities = useSelector(state => state.activities);

    const allContinents = useSelector(state => state.allContinents);

    const continentHandler = (event) => {
        if (event.target.value !== ' ') {
            dispatch(filterContinent(event.target.value));
            setPage(1);
            setInput(1);
        }
    }

    const combinatedHandler = (event) => {
        const parameter = event.target.value;
        if (parameter !== ' ') {
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
    }

    const handleOrderName = (event) => {
        if (event.target.value !== ' ') {
            dispatch(orderName(event.target.value));
            setPage(1);
            setInput(1);
        }
    }

    const handleOrderPopulation = (event) => {
        if (event.target.value !== ' ') {
            dispatch(orderPopulation(event.target.value));
            setPage(1);
            setInput(1);
        }
    }

    const handleActivities = (event) => {
        if (event.target.value !== ' ') {
            dispatch(activityType(event.target.value));
        }
    }

    const checkHandle = (event) => {
        property = event.target.value;
        if (property === 'si') {
            axios.delete('http://localhost:3001/activities');
        } else if (property.length === 0) {
            
        }
    }

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    useEffect(() => {
        dispatch(getContinents())
    }, [dispatch])

    return (
        <div className={style.optionContainer}>
            <div className={style.activitiesFilter}>
                <label>Tipo de actividad: </label>
                <select onChange={handleActivities}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value=' ' ></option>
                    {activities.map((activity) => {
                        return (
                            <option key={activity.id} value={activity.name}>
                                {activity.name}
                            </option>
                        )
                    })}
                </select>

                <div className={style.deleteContainer}>
                    <button className={style.btnDelete}>Borrar todas las actividades</button>

                    <div className={style.checkBox}>

                        <div className={style.checkSi}>
                            <label>si</label>
                            <input className={style.inputDelete} type="checkbox" value="si" />
                        </div>

                        <div className={style.checkNo}>
                            <label>no</label>
                            <input className={style.inputDelete} type="checkbox" value="no" />
                        </div>
                    </div>

                </div>

            </div>


            <div className={style.filterContinent}>
                <label>Filtrar por continente: </label>
                <select onChange={continentHandler}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value=' ' ></option>
                    {allContinents.map(continent => {
                        return (
                            <option>
                                {continent.continents}
                            </option>
                        )
                    })}
                </select>
                <br />
                <label>Ordenar por nombre: </label>
                <select onChange={combinatedHandler}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value=' ' ></option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <label>Ordenar por población: </label>
                <select onChange={combinatedHandler}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value=' ' ></option>
                    <option value={'A'}>A</option>
                    <option value={'D'}>D</option>
                </select>
            </div>

            <div className={style.generalFilters}>
                <label>Ordenar por nombre: </label>
                <select onChange={handleOrderName}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value=' ' ></option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>

            <div className={style.generalFilters}>
                <label>Ordenar por población: </label>
                <select onChange={handleOrderPopulation}>
                    <option value="Seleccione" disabled={true}>Seleccione</option>
                    <option value=' ' ></option>
                    <option value={'A'}>A</option>
                    <option value={'D'}>D</option>
                </select>
            </div>

        </div>
    )
}

export default OptionFilter