const fs = require('fs');
const path = require('path');
const express = require('express');
// const { noteData } = require('./db/db.json');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
// const res = require('express/lib/response');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.get('/api', (req, res) => {
    res.send('Hello');
})


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
