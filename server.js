// boilerplate requirements
const express = require('express');
const path = require('path');
const api = require('./public/routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using our index.js as middleware for anything with an API route
app.use('/api', api);

// Get route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Get route for the feedback page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

// Confirmation that post is listening
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});