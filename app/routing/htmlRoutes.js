//dependency
var path = require('path');

//routing
module.exports = function(app) {
    //routing html files
    
    app.get("/survey", function (req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function () {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};

