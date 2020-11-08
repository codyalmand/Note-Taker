// Dependencies
const path = require('path');
const fs = require('fs');
// These two lines of code were the problem. After creating these i was able to successfully save the- 
// -title/text/id to the db.json file
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// Reads user input of note and parses title/text 
const readData = () => {
    const noteData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')))
    return noteData;
}
// Writes the user input of title/text/id as a string 
const writeData = (noteData) => {
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteData), (err) => {
        if (err) return ({ err });
    })
}
// Exports
module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        let noteData = readData();
        res.json(noteData)
    })
// Creates new notes
    app.post('/api/notes', urlencodedParser, (req, res) => {
        let noteData = readData();
        let newNote = req.body;
        let lastNoteID = !noteData[0] ? 0 : noteData[noteData.length - 1].id;
        let newNoteID = parseInt(lastNoteID) + 1;
// Pushes note input, writes and returns it into db.json file
        newNote.id = newNoteID;
        noteData.push(newNote);
        writeData(noteData);
        return res.json(noteData)
    })
// Deletes note from saved notes
    app.delete('/api/notes/:id', (req, res) => {
        let noteData = readData();
        const noteId = req.params.id;
        const newNoteData = noteData.filter((note) => note.id != noteId);

        writeData(newNoteData);
        res.send(newNoteData);
    })
}
