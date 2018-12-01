var friends = require("../data/friends");

module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        }
        console.log(req.body);

        // posts and parses user's response; assigns scores to variable
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        // declaring variable to contain difference between user's scores and those of other profiles
        var totalDifference = 0;

        // loops through data contained in friends.js
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;
        
            // loops through each friend's cumulative score
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // calculates absolute difference between user's scores and each friend in loop, assigning the number to totalDifference variable
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // if current value of totalDifference is less than or equal to bestMatch.friendDiffence, reassign that value as well as the name and photo of the corresponding friend
                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        // once everything is complete, push user's data to friends.js
        friends.push(userData);

        // returns bestMatch to frontend in JSON form
        res.json(bestMatch);
    });
}