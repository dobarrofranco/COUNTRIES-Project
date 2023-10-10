import { Link } from 'react-router-dom'
import style from './Nav.module.css'
import { useSelector } from 'react-redux'

export default function Nav() {

    const allCountries = useSelector(state => state.countriesCopy);

    const handleClick = () => {
        return allCountries;
    }

    return (
        <div className={style.backNav}>

            <div className={style.navContainer}>

                <Link to='/'>
                    <button className={style.buttonNav}>Página de bienvenida</button>
                </Link>


                <Link to='/home'>
                    <button className={style.buttonNav} onClick={handleClick()}>Todos los países</button>
                </Link>

                <Link to='/form'>
                    <button className={style.buttonNav} >Crear nueva actividad</button>
                </Link>

            </div>
        
        </div>
    )
}