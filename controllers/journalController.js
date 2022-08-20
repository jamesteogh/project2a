const Notes = require('../models/notesModel')

const controller = {
  listNotes: async (req, res) => {
    try{
    //   res.render('index.ejs', {
    //   eachTitle : "Hello"
    // })
      const notes = await Notes.find();

      res.status(200).render('index', {
        eachTitle : "Your Notes",
        notes
      })
    } catch(err) {
      res.status(404).json({
        status: 'fail',
        message: err
      })
    }
  },

  showNote: async (req, res) => {
    try{
      const note = await Notes.findById(req.params.id);
      // Notes.findOne({ _id: req.params.id})

      res.status(200).json({
        status: 'success',
        note
      })
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      })
    }
  },

  createNoteForm: (req, res) => {
    res.render('new')
  },

  createNote: async (req, res) => {
    try{
      // Add new note to database
      await Notes.create(req.body);
    } catch(err) {
      res.send('Failed to create note. Please insert both title and details')
      return
    }
    // redirect to list notes page
    res.redirect('/notes')
  },

  updateNote: async (req, res) => {
    try {
      const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }); 
      res.status(200).json({
        status: 'success',
        data: {
          note
        }
      })

    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      })
    }
  },

  deleteNote: async (req, res) => {
    try {
      await Notes.findByIdAndDelete(req.params.id);

      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: 'Invalid data sent!'
      })
    }
  },

}

module.exports = controller

  // createNote: async (req, res) => {
  //   const data = req.body
  //   // validation
  //   if (!data.title) {
  //     res.send('note is not set')
  //     return
  //   }
  //   // Add new note to database
  //   try {
  //     const note = await Notes.insertOne({title: data.title, details: data.details});
  //     //
  //   } catch(err) {
  //     res.send('failed to create pokemon')
  //     console.log("Title: " + data.title + " details: " + data.details)
  //     return
  //   }
  //   // redirect to list notes page
  //   res.redirect('/notes')
  // },