//Charlie Pryor
//12/11/14

var characterName = "paul";
var friendsToBring = Math.floor(Math.random() * 6) + 3;
var placesToGo = [ "zoo", "movie", "disney land","water park","fair","park"];
var friendsWhoCouldCome = [ "andrew", "reid", "ben","nathanal","garath","will","brien","mike","jeff"];


//so far we have had a busy month and need to take a day off lets decide something fun to do!
console.log(placesToGo);
//those are the options that we can choose from to go
console.log("i will let you ",characterName," choose where we go");
console.log(characterName," thinks very hard and finally comes up with ",placeToGoStringFuntion(placesToGo));
console.log("very good choice who do you want to invite you can only invite ",friendsToBring)
console.log("ok let me give ",inviteFriendsArrayFunction(friendsWhoCouldCome), " a call");
console.log("ok sounds like it will be a good time but we gotta make sure you have enough money to get in");
console.log("each person will be 12 so how much will that be");
console.log("I can do this! carry the 1 add the remander subtract 7, ",whatCostMathFunction(friendsToBring), " will be the final cost");
console.log("wait we should probably check the weather to make sure it is at least nice out which will make everyone in a a beter mood");
console.log("good thinking it will be raining tomorrow is ",rainCheckBoolFunction());





function rainCheckBoolFunction(d){
	var rainValue = false;
	var countNumber = 0;
	
	while (30 > countNumber) {
		countNumber++;
		var randomChance = Math.floor(Math.random() * 15) + 1;
		if (randomChance == 2) {
			rainValue = true;
			break;
		}

	}

return rainValue;
}


function whatCostMathFunction(c){
	var cost = c * 15;
	
	if (friendsToBring > 6) {
		console.log("since you have more than 6 friends i will thrown in a little extra for lunch");
		cost = cost + c * 5;
	}

return cost;
}




function inviteFriendsArrayFunction(b){
	var newArray = [];
	for (var i = 0; i < friendsToBring; i++) {
   	 	newArray.push(b[Math.floor(Math.random() * b.length)])
	}

return newArray;
}


function placeToGoStringFuntion (a){

	var PlaceweWillGo = a[Math.floor(Math.random() * a.length)]

return PlaceweWillGo;
}