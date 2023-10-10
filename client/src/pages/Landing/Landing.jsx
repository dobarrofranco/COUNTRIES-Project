import style from './Landing.module.css';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className={style.landingBack}>

            <Link to='/home'>
                <button className={style.buttonHome}>Página Principal</button>
            </Link>

        </div>
    )
};
