const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});