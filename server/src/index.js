const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');
// const passport = require('passport');
const cors = require('cors');
const { connect } = require('mongoose');

require('dotenv').config();
require('./ddbb/mongoose.config');

const PORT = process.env.PORT || 4000;

const server = express();
const routes = require('./routes/routes');
const userRoutes = require('./routes/userRouter');
const recipesRoutes = require('./routes/recipesRouter');

server.use(morgan('dev'));
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

require('./passport/passport.config')(server);

server.use('/', routes);
// server.use('/user', passport.authenticate('jwt', { session: false }), protectedRoutes);
// server.use('/recipes', recipesRouter);
server.use('/user', userRoutes);
server.use('/recipes', recipesRoutes);

connect(
  process.env.DDBB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => debug('Correct conection'))
  .catch((error) => debug(error));

server.listen(PORT, debug(`server is running on port ${PORT}`));
