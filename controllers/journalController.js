const Notes = require('../models/notesModel')

const controller = {
  listNotes: (req, res) => {
    res.render('index.ejs')
  }
}

module.exports = controller