// Dependencies
const path = require("path");
const express = require("express");
const app = express();
//  PORT number
const PORT = process.env.PORT || 8080;
// Requires html files
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);
// Path for running node express from directory
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// Message stating server on with PORT number
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});