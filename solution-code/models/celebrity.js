const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = Schema({
  name: String,
  gender: String,
  occupation: String,
  catchPhrase: String,
  netWorth: Number,
  isDeceased: Boolean
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);

module.exports = Celebrity;
