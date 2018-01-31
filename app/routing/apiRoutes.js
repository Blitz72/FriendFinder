var friendsList = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function (request, response) {
		response.json(friendsList);
	});

	app.post("/api/friends", function (request, response) {
		var newFriend = 40;
		var indexer = 0;
		var difference = [];
		var newDiff = 0;
		var diff = 0;
		console.log("body: ", request.body);
		for (var i = 0; i < friendsList.length; i++) {
			diff = 0;
			newDiff = 0;
			// console.log(friendsList[i].answers);
			for (var x = 0; x < 10; x++) {
				var newDiff = Math.abs(parseInt(request.body.answers[x]) - parseInt(friendsList[i].answers[x]));
				diff += newDiff;
			}
			difference.push(diff);
		}
		for (var i = 0; i < difference.length; i++) {
			if (difference[i] < newFriend) {
				newFriend = difference[i];
				indexer = i;
			}
		}
		console.log(difference);
		friendsList.push(request.body);
		response.json(friendsList[indexer]);
	});

}