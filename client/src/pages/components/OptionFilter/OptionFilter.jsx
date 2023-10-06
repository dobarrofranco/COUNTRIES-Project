import { useDispatch } from "react-redux"
import { filterContinent, orderName, orderPopulation, filterContinentOrderNameAZ, filterContinentOrderNameZA } from "../../../redux/actions"
import { useState } from "react";
import style from './OptionFilter.module.css'

const OptionFilter = () => {

    const dispatch = useDispatch();

    // const [auxContinent, setAuxContinent] = useState(false);

    const continentHandler = (event) => {
        dispatch(filterContinent(event.target.value));
    }

    const continentHandlerOrderName = (event) => {
        if (event.target.value === 'A-Z') {
            dispatch(filterContinentOrderNameAZ(event.target.value));
        }
    }

    const continentHandlerOrderNameZA = (event) => {
        dispatch(filterContinentOrderNameZA(event.target.value))
    }

    const handleOrderName = (event) => {
        dispatch(orderName(event.target.value))
    }

    const handleOrderPopulation = (event) => {
        dispatch(orderPopulation(event.target.value))
    }

    return (
        <div className={style.optionContainer}>

            <div className={style.filterContinent}>
                <label>Filtrar por continente: </label>
                <select onChange={continentHandler}>
                    <option value='Africa'>Africa</option>
                    <option value='Oceania'>Oceania</option>
                </select>
                <br />
                <label>Ordenar por nombre: </label>
                <select onChange={continentHandlerOrderName}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>

            <div className={style.orderName}>
                <label>Ordenar por nombre: </label>
                <select onChange={handleOrderName}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>

            <div className={style.orderPopulation}>
                <label>Ordenar por población: </label>
                <select onChange={handleOrderPopulation}>
                    <option value={'A'}>A</option>
                    <option value={'D'}>D</option>
                </select>
            </div>

        </div>
    )
}

export default OptionFilter