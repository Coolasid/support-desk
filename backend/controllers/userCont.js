const express = require('express');
const router = express.Router();

// register a new user => /api/users/register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  } 

  res.send('register route');
});

//login a user => /api/users/Login
router.post('/login', (req, res) => {
  res.send('Login Route');
});

module.exports = router;
