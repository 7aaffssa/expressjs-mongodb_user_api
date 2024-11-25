const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_database');

mongoose.connection.on('open', () => {
  console.log('MongoDB connected...');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});