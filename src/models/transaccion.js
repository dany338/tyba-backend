const mongoose = require('mongoose');

const TransaccionEsquema = new mongoose.Schema({
  city: String,
  date: Date,
});

module.exports = mongoose.model('Transaccion', TransaccionEsquema);
