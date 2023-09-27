    const {Country} = require('../db')
    
    const dataFromApi = async () => {
        try {

            const { data } = await axios('http://localhost:5000/countries');
    
            const countries = data.map(country => ({
                id: country.cca3,
                name: country.name.common,
                image: country.flags.png,
                continents: country.continents[0],
                capital: country.capital ? country.capital : country.name.common,
                subregion: country.subregion ? country.subregion : country.region,
                area: country.area,
                population: country.population
            }));
    
            await Country.findOrCreate({
                where: {
                    id: countries.cca3,
                    name: countries.name.common,
                    image: countries.flags.png,
                    continents: countries.continents[0],
                    subregion: countries.subregion === undefined ? 'null' : countries.subregion,
                    capital: countries.capital === undefined ? 'null' : countries.capital[0],
                    area: countries.area,
                    population: countries.population
                }
            });
            
            return data;

        } catch (error) {
            throw new Error(error.message)
        }
    }

    module.exports = dataFromApi;
  
  
  
  
  // const dataFromApi = async () => {
    
  //   try {
      
  //     const {data} = await axios('http://localhost:5000/countries');
  
  //     const countries = data.map( element => ({
  //       id: element.cca3,
  //       name: element.name.common,
  //       image: element.flags.png,
  //       continents: element.continents ? element.continents : "Desconocido",
  //       capital: element.capital ? element.capital : element.name.common,
  //       subregion: element.subregion ? element.subregion : "Desconocido",
  //       area: element.area,
  //       population: element.population
  //     }));
      
  //     return countries;
      
  //   } catch (error) {
  //     throw new Error('No se pueden obtener los datos de la API -', error.message)
  //   }
    
  // }


  // const connectDataBase = async () => {
  //   try {
      
  //     const countries = await dataFromApi();

  //     await Country.bulkCreate(countries);

  //   } catch (error) {
  //     console.log('Error al enviar los paises a la base de datos -', error.message);
  //   }
  // }

  // connectDataBase();