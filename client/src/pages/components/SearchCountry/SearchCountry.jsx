import { useSelector } from "react-redux"

const SearchCountry = () => {

    const countryName = useSelector((state) => state.countryName);

    return (
        <div>
            <h2>{countryName.name}</h2>
            <h3>Continente: {countryName.continents}</h3>
            <h3>Capital: {countryName.capital}</h3>
            <h3>Area: {countryName.area}</h3>
            <h3>Población: {countryName.population}</h3>
            <img src={countryName.image} alt={`Bandera de ${countryName.name}`} />
        </div>
    )
}

export default SearchCountry