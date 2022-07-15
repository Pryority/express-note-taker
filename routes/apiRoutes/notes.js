const router = require("express").Router();
const { filterById, validateNote, createNewNote } = require("../../lib/notes.js");
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.get("/notes/:id", (req, res) => {
    const result = filterById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // add note to json file and notes array in this function
    const note = createNewNote(req.body, notes);

    res.json(note);

    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let notelength = (noteList.length).toString();

    //create new property called id based on length and assign it to each json object
    newNote.id = notelength;
    //push updated note to the data containing notes history in db.json
    noteList.push(newNote);

    //write the updated data to db.json
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
});

// router.post("/notes", (req, res) => {
//     // set id based on what the next index of the array will be
//     // req.body.id = notes.length.toString();

//     // if any data in req.body is incorrect, send 400 error back
//     // if (!validateNote(req.body)) {
//     //     res.status(400).send("That note is not properly formatted!");
//     // } else {
//     //     const note = createNewNote(req.body, notes);
//     //     res.json(note);
//     // }

//     // req.body is where our incoming content will be
//     console.log(req.body);
//     res.json(req.body);
// });

module.exports = router;