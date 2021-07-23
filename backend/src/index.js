const express = require('express');
const debug = require('debug')('server');
require('dotenv').config();

const mongoose = require('mongoose');

const server = express();
const port = process.env.PORT;

server.use(express.json());

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(
  () => debug('database connection stablished'),
  (error) => debug('database connection error', error)
);

server.listen(port, () => debug(`Server is running in localhost:${port}`));
