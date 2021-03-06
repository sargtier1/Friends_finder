// dependencies 
var express = require('express');

// set up to express app
var app = express();
var PORT = process.env.PORT || 8080;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//starts our server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});