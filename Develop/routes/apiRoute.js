const path = require("path");

module.exports = function (app) {
app.get("/assets/css/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
    });
    
app.get("/assets/js/index.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
    });
}