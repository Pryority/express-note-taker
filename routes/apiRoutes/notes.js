const router = require("express").Router();

const {
    filterById,
    createNewNote,
    validateNote,
    deleteNote,
} = require("../../lib/notes");

const { note } = require("../../db/db.json");

// returns the JSON formatted database
router.get("/notes", (req, res) => {
    let results = note;
    res.json(results);
});

// returns a specific note in a JSON format
router.get("/notes/:id", (req, res) => {
    let specificNote = req.params.id;
    const result = filterById(specificNote, note);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// allows a user to add new note to JSON database
router.post("/notes", (req, res) => {
    let newNote = req.body;
    if (note.length === 0) {
        newNote.id = "0";
    } else {
        newNote.id = note.length.toString();
    }
    if (!validateNote(newNote)) {
        res.status(400).send("This note is not properly formatted.");
    } else {
        const noteData = createNewNote(newNote, note);
        res.json(noteData);
    }
});

router.delete("/notes/:id", (req, res) => {
    let newNoteArray = deleteNote(req.params.id, note);
    res.json(newNoteArray);
});

module.exports = router;