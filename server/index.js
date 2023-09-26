const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const {Country} = require('./src/db')
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  const dataFromApi = async () => {
    
    try {
      
      const {data} = await axios('http://localhost:5000/countries');
  
      const countries = data.map( element => ({
        id: element.cca3,
        name: element.name.common,
        image: element.flags.png,
        continents: element.continents ? element.continents : "Desconocido",
        capital: element.capital ? element.capital : element.name.common,
        subregion: element.subregion ? element.subregion : "Desconocido",
        area: element.area,
        population: element.population
      }));
      
      return countries;
      
    } catch (error) {
      throw new Error('No se pueden obtener los datos de la API -', error.message)
    }
    
  }


  const connectDataBase = async () => {
    try {
      
      const countries = await dataFromApi();

      await Country.bulkCreate(countries);

    } catch (error) {
      console.log('Error al enviar los paises a la base de datos -', error.message);
    }
  }

  connectDataBase();

})
}).catch(error => console.error(error))
