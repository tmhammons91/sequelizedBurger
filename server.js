var express = require("express"); 
var bodyParser = require("body-parser"); 
var methodOverride = require("method-override"); 

var port = process.env.PORT || 3000;

var app = express();

//following To Do List example from class
var db = require("./models"); 

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes =============================================================

require("./routes/burger-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({  }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
