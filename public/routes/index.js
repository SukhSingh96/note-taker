const express = require('express');

// Importing the modular router from the notes page
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

// Exporting the index module to be used in the server
module.exports = app;