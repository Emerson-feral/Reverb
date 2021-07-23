const express = require('express');
const debug = require('debug');

const server = express();
const port = 2030;

server.use(express.json());

server.listen(port, () => debug(`Server is running in localhost:${port}`));
