console.log("Ready!");

//First create two arrays to cointain the different components of a proper user name. The first array will contain adjetives, while the second array will contain nouns.
firstUser = ["able", "bad", "best", "better", "big", "black", "certain", "clear", "different", "early", "easy", "economic", "federal", "free", "full",
			 "good", "great", "hard", "high", "human", "important", "international", "large", "late", "little", "local", "long", "low", "major", "military",
			 "national", "new", "old", "only", "other", "political", "possible", "public", "real", "recent", "right", "small", "social", "special", "strong",
			 "sure", "true", "white", "whole", "young"];


secondUser = ["Orange", "Actor", "Reception", "Exam", "Engineering", "Version", "Family", "Addition", "Health", "Player", "Story", "Extent", "Relation",
			 "Revenue", "Worker", "Intention", "Measure", "Guest", "Sister", "Insect", "Trainer", "Audience", "User", "Obligation", "Airport", "Proposal",
			 "Mixture", "History", "Delivery", "Context", "Signature", "Tradition", "Government", "Marriage", "Classroom", "Garbage", "Instance", "Heart",
			 "Manufactorer", "Assistance", "Writing", "Girlfriend", "Permission", "Menu", "Ability", "Camera", "Equipment", "Difficulty", "Topic"];

//Create function to  generate a random number. Max will = the highest possible number it can generate.
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
//Create a function to retrieve the user input amount and then create a loop that outputs a randomly selected combination of arrays using the getRandomInt function. 
function loopFunction() {
	var loopAmount = document.querySelector(".user-amount").value;
	
	for (var i = 0; i < loopAmount; i++) {
		document.querySelector(".req_commend").innerHTML += "<b>" + firstUser[(getRandomInt(50))] + secondUser[getRandomInt(49)] + "</b>" + "<br><br>";
	}
}