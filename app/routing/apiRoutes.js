
// LOAD DATA
var friendsData = require('../data/friends');

//routing
module.exports= function(app) {
    //reads ALL friends in app's data in form of JSON object
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });
    app.post("/api/friends", (req, res) => {
        var bestMatch= {
            name : "",
            photo : "",
            friendDifference: Infinity 
        };
        
        var userData = req.body;
        var userScores = userData.scores
        var totalDifference;

        for (var i = 0; i < friendsData.length; i++) {
            var currentFriend = friendsData[i];
            totalDifference = 0;
        
            console.log(currentFriend.name);

            for (var i = 0; i < currentFriend.scores.length; i++) {
                var currentFriendScore = currentFriend.scores[i];
                var currentUserScore= userScores[i];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        friendsData.push(userData);
        res.json(bestMatch);
    });
};

