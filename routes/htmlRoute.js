// Dependencies
const path = require("path");
// Route for index.html
module.exports = function (app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });
// Route for notes.html
    app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
};