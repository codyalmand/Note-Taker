// Dependencies
const path = require("path");
// Directories executing script
module.exports = function (app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });
    
    app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
};