const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const resistanceSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
      required: true,
    },
    sets: {
      type: String,
      required: true,
    },
    reps: {
        type: String,
        required: true, 
    }
        
  });
  
  const Resistance = model('Resistance', resistanceSchema);
  
  module.exports = Resistance;