const server = require("./src/server");
const { conn } = require('./src/db.js');
const dataFromApi = require("./src/DataFromApi/dataFromApi");
const PORT = 3001;

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
dataFromApi();
console.log(`Server listening on port ${PORT}`);})
}).catch(error => console.error(error))
