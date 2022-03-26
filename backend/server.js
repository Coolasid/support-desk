const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

//connect to db

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to the support desk API' });
});

//user controllers
const userCont = require('./controllers/userCont');

app.use('/api/users', userCont);

app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();

  console.log(`Server Started on Port ${PORT}`);
});
