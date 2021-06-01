const express = require('express');

const router = express.Router();

router.get(
  '/',
  (req, res) => {
    res.json({
      message: 'You made it to the protected route',
      user: req.user,
      token: req.query.secret_token,
    });
  },
);

module.exports = router;
