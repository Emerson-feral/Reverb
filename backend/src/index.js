const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
require('dotenv').config();

const mongoose = require('mongoose');
const guitarRoutes = require('./routes/guitarRoutes');

const server = express();
const port = process.env.PORT;

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(express.json());
server.use(morgan('dev'));

server.use('/api/guitar', guitarRoutes);

server.listen(port, () => debug(`Server is running in localhost:${port}`));
