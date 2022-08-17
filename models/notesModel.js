const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please input title'],
    unique: true
  },
  details: {
    type: String,
    required: [true, 'Please input details']
  }
});
const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;