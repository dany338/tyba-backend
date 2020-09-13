const mongoose = require('mongoose');

const UsuarioEsquema = new mongoose.Schema({
  fullName: String,
  email: String,
  username: String,
  password: String,
  apiKey: String,
});

module.exports = mongoose.model('Usuario', UsuarioEsquema);
