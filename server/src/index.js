const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const { connect } = require('mongoose');

require('dotenv').config();
require('./ddbb/mongoose.config');

const PORT = process.env.PORT || 4000;

const server = express();
const routes = require('./routes/routes');
const protectedRoutes = require('./routes/protected-routes');

server.use(morgan('dev'));
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

require('./passport/passport.config')(server);

server.use('/', routes);
server.use('/user', passport.authenticate('jwt', { session: false }), protectedRoutes);

connect(
  process.env.DDBB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => debug('Correct conection'))
  .catch((error) => debug(error));

// const restaurantsRouter = require('./routes/Router');

// server.use('/favorites', restaurantsRouter);

server.listen(PORT, debug(`server is running on port ${PORT}`));
