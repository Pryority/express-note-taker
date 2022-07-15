const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ note: notesArray }, null, 2)
    );
    return note;
}

function filterById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
}

function deleteNote(Id, notesArray) {
    const noteToDelete = notesArray.findIndex((key) => key.id === Id);
    notesArray.splice(noteToDelete, 1);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ note: notesArray }, null, 2)
    );
    return notesArray;
}

module.exports = {
    createNewNote,
    filterById,
    validateNote,
    deleteNote,
};