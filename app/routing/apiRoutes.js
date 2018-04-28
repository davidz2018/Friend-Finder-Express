var friend = require('./data/friends');

module.export = function(app) {
    app.get('app/friends', function(req, res) {
        res.join(friends)
    });

    app.post('app/friends', function(req, res) {
        var friendScore = req.body.scores;
        var score = [];
        var firendCount = 0;
        var match = 0;

        for(var i = 0; i < friend.length; i++) {
            var scoreDif = 0;

        for(var d = 0; d < score.length; d++) {
            scoreDif += (Math.abs(parseInt(friend[i].score[i] - parseInt(friendScore[d]))));
        }
        score.push(scoreDif);
        }
        for (var i = 0; i < score.length; i++) {
            if (score[i] <= score[match]) {
                match = i;
            }
        }
        var bestFri = friend[match];
        res.json(bestFri);
        friend.push(req.body);
    })
}