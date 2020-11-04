const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.get("/assets/css/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/assets/css/styles.css"));
    });
    
    app.get("/assets/js/index.js", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/assets/js/index.js"));
    });
    
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
    });
    
    app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
    });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });