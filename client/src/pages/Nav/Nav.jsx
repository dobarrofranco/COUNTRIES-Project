import SearchBar from '../components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav () {
    return (

        <div className={style.homeBack}>

            <Link to='/'>
                <button>Página de bienvenida</button>
            </Link>

        </div>

    )
}