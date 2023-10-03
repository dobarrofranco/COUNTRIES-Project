import style from './Landing.module.css';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className={style.landingBack}>

            <Link to='/home'>
                <button className={style.buttonHome}>Home Page</button>
            </Link>

        </div>
    )
};
