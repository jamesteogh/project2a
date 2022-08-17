const mongoose = require('mongoose')
const express = require('express');
const journalController = require('./controllers/journalController')
const dotenv = require('dotenv')


const app = express();
const port = 3000;

// Link to database
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => { console.log('DB connection successful!') });



// const testNotes = new Notes({
//   title: 'Today is my birtday',
//   details: 'So glad to be celebrating with my loved ones'
// })

// testNotes.save().then(doc => {
//   console.log(doc);
// }).catch(err => {
//   console.log('ERROR', err)
// })

// tell express which template to use
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.status(200).send('Welcome to Journal!')
// })

// List all notes
// app.get('/notes', (req,res) => (
//   res.json(Notes)
// ))

app.get('/notes', journalController.listNotes)
// Create Notes
// app.post('/', (req, res) => {
//   res.status(200).send('Welcome to Journal!')
// })
// // Edit Note
// app.patch('/:id', (req, res) => {
//   res.status(200).send('Welcome to Journal!')
// })
// // Delete Note
// app.delete('/:id', (req, res) => {
//   res.status(200).send('Welcome to Journal!')
// })


app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

app.listen()
