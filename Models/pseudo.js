const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const PseudoSchema = new Schema({
  libelle: String,
});

module.exports = mongoose.model('Pseudo', PseudoSchema);