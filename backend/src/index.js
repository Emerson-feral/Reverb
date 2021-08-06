const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = process.env.PORT;

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const guitarRoutes = require('./routes/guitarRoutes');

server.use('/api/guitar', guitarRoutes);

server.listen(port, () => debug(`Server is running in ${chalk.blue(`localhost:${port}`)}`));
