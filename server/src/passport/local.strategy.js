/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const LocalStrategy = require('passport-local');
const listModel = require('../models/listModel');
const UserModel = require('../models/userModel');

passport.use(
  'signup',
  new LocalStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
          return done(null, false, { message: 'User alredy exists' });
        }
        const defaultList = await listModel.create(
          {
            name: 'My List',
          },
        );
        const user = await UserModel.create({
          email: email.toLowerCase(),
          password,
          firstName: req.body.firstName.toLowerCase(),
          lists: [defaultList._id],
        });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);
passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email }).populate('lists');
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        const validate = await user.verifyPassword(password);
        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);
