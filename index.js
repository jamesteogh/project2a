const mongoose = require('mongoose')
const express = require('express');
const methodOverride = require('method-override');
const journalController = require('./controllers/journalController')
const dotenv = require('dotenv')

const app = express();
app.use(express.json());
const port = 3000;

// Link to database
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => { console.log('DB connection successful!') });

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));


// List all notes
app.get('/notes', journalController.listNotes)
// To display form to create new note
app.get('/notes/new', journalController.createNoteForm)
// Show Note
app.get('/notes/:id', journalController.showNote)
// Create action
app.post('/notes', journalController.createNote)

// To display form to edit note
app.get('/notes/:id/edit', journalController.editNoteForm)
// // Edit Note
app.put('notes/:id', journalController.updateNote)

// // Delete Note
app.delete('/notes/:id', journalController.deleteNote)

// views
// app.get('/hello', journalController.overview)

// app.get('/notes/:id', (req, res) => {
//   res.status(200).render('show', {
//     title: 'Show one note'
//   });
// })

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

app.listen()
