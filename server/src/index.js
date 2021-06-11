const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const { connect } = require('mongoose');

require('dotenv').config();
require('./ddbb/mongoose.config');
require('./passport/jwt.strategy');
require('./passport/local.strategy');

const PORT = process.env.PORT || 4000;

const server = express();
const routes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const recipesRoutes = require('./routes/recipes.routes');
const listsRoutes = require('./routes/lists.routes');

server.use(morgan('dev'));
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(passport.initialize());

server.use('/', routes);
// server.use('/user', passport.authenticate('jwt', { session: false }), protectedRoutes);

server.use('/user', userRoutes);
server.use('/recipes', recipesRoutes);
server.use('/lists', listsRoutes);

connect(
  process.env.DDBB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => debug('Correct conection'))
  .catch((error) => debug(error));

server.listen(PORT, debug(`server is running on port ${PORT}`));
