    const {Country} = require('../db');
    const axios = require('axios');
    
    const dataFromApi = async () => {
        const url = 'http://localhost:5000/countries';
    try{
        
        const { data } = await axios(url);
        for (let i = 0; i < data.length; i++) {
            let countryInfo = {
                name: data[i].name.common,
                id: data[i].cca3,
                area: data[i].area,
                image: data[i].flags.png,
                population: data[i].population,
                continents: data[i].continents[0],
                subregion: data[i].subregion,
                capital: data[i].capital
            }

            await Country.findOrCreate({
                where: {
                    name: countryInfo.name.toUpperCase(),
                    id: countryInfo.id,
                    area: countryInfo.area,
                    image: countryInfo.image,
                    population: countryInfo.population,
                    continents: countryInfo.continents,
                    subregion: countryInfo.subregion === undefined ? countryInfo.continents : countryInfo.subregion,
                    capital: countryInfo.capital === undefined ? countryInfo.name : countryInfo.capital[0]
                },

            });

        };
        return data
    } catch(error){
        console.log(error.message)
    };
};

module.exports = dataFromApi;
