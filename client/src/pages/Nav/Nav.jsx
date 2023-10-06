import { Link } from 'react-router-dom'
import style from './Nav.module.css'
import { useSelector } from 'react-redux'

export default function Nav () {

    const allCountries = useSelector(state => state.countriesCopy);

    const handleClick = () => {
        return allCountries;
    }

    return (

        <div className={style.homeBack}>
            
            <Link to='/'>
                <button>Página de bienvenida</button>
            </Link>

            
            <Link to='/home'>
                <button onClick={handleClick()}>Todos los países</button>
            </Link>

        </div>

    )
}