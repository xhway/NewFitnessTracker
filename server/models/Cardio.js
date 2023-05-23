const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const cardioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  duration: {
    type: String,
    required: true,
  }
      
});

const Cardio = model('Cardio', cardioSchema);

module.exports = Cardio;
