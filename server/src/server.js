const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.get('/countries', (req, res) => {
    res.status(200).send('OK')
})


server.use(router);

module.exports = server;
