import SearchBar from '../components/SearchBar/SearchBar'
import style from './Nav.module.css'

export default function Nav ({onSearch}) {
    return (
        
        <div className={style.homeBack}>

            <SearchBar onSearch={onSearch}/>

        </div>

    )
}