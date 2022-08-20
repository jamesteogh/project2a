const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please input title'],
    unique: true
  },
  // date: [Date],
  details: {
    type: String,
    required: [true, 'Please input details']
  }
});
const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;