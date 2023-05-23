<<<<<<< HEAD
const { Schema, model } = require("mongoose");

const CardioSchema = new Schema(
  {
    type: {
      type: String,
      default: "cardio",
      required: true
    },
    name: {
      type: String,
      required: true,
      maxlength: 30
    },
    distance: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }
);

const Cardio = model("Cardio", CardioSchema);

module.exports = Cardio;
=======
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
>>>>>>> 57e3919996c15d85cdc75e440e78f1c5964a319a
