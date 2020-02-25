let mongoose = require('mongoose');
let connexion = mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connexion