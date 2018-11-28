// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });
//   app.get("/reservations", function(req, res) {
//     res.sendFile(path.join(__dirname, "reserve.html"));
//   });
//   app.get("/api/reservations", function(req, res) {
//     return res.json(reservations);
//   });

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
