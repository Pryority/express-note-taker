const fs = require("fs");
const path = require("path");

function filterById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}