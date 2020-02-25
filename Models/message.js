const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const MessageSchema = new Schema({
  contenu: String,
  author: String
});

module.exports = mongoose.model('Message', MessageSchema);