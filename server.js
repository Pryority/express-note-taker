const fs = require('fs');
const path = require('path');
const express = require('express');
const { noteData } = require('./db/db.json');
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./public/routes/htmlRoutes');
// const res = require('express/lib/response');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
