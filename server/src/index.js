const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');

require('dotenv').config();
require('./ddbb/mongoose.config');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, debug(`Server is running on port ${port}`));
