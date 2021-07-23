const express = require('express');
const debug = require('debug');

const { connect } = 'mongoose';

const server = express();
const port = process.env.PORT;

server.use(express.json());

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.listen(port, () => debug(`Server is running in localhost:${port}`));
