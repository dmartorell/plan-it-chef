const { connect } = require('mongoose');
const debug = require('debug')('app:mongoose');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug('Connected to database'),
  (error) => debug('database connection error', error),
);
