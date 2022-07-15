// required dependencies
const fs = require("fs");
const { createNewNote, filterById, validateNote, deleteNote } = require("../lib/notes");
const { note } = require("../db/db.json");

// this will prevent us from actually writing data to db.json
jest.mock("fs");

// test to create a new note
test("creates a new note object", () => {
    const newNote = createNewNote({ title: "New Title", text: "New Text" }, note);
    expect(newNote.title).toBe("New Title");
    expect(newNote.text).toBe("New Text");
});

// test to find note by id
test("finds note by id", () => {
    const notesArray = [
        {
            title: "New Title",
            text: "New Text",
            id: "0",
        },
        {
            title: "Some Title 2",
            text: "New Text 2",
            id: "1",
        },
    ];

    const result = filterById("0", notesArray);
    expect(result.title).toBe("New Title");

    const result2 = filterById("1", notesArray);
    expect(result2.title).toBe("Some Title 2");
});

// test to validate the note has been formatted properly
test("validates note", () => {
    const note = {
        title: "New Title",
        text: "New Text",
        id: "0",
    };

    const invalidNote = {
        title: "",
        text: "Some Text",
        id: "1",
    };

    const result = validateNote(note);
    const result2 = validateNote(invalidNote);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});