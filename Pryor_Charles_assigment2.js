//Charles Pryor
//12/4/14



console.log("hello world");
//console.log(boolFunction());

var playerName = "Andrew";
var playerAge = 12;
var playerSick = false;
var gameModes = [ "Boss Fight", " MiniBoss Fight", " Player vs Player"];



//It has been awhile since our player
console.log(playerName, "has played the game but it looks like he wants to play");
//there are a few diffrent modes the player can play so he can choose one now
var chosenGameMode = prompt("what game mode would you like to play?", gameModes+ " (Type One)");

console.log(playerName+" has chosen "+chosenGameMode+" as the game mode");

if ( chosenGameMode == "Boss Fight" || chosenGameMode == "boss fight") {
	// looks like the player wants to fight a boss well they will then have to solve the tricky riddle
	var bossRiddle =stringFunction(playerName);
	console.log(bossRiddle);

}

if ( chosenGameMode == "MiniBoss Fight" || chosenGameMode == "miniboss fight") {
	//With a laugh the game developers to decide to make this part rated m for mature so only old players can attempt
	var ageRequirment = numberFunction(playerAge);
	console.log("we regret to inform you "+playerName+ " this content is rated m but you can come back in " +ageRequirment+" years");
	

}

if ( chosenGameMode == "Player vs Player" || chosenGameMode == "player vs player") {
	//The game want to make sure other players do not get infected so before you can enter the arena they make sure you are not sick
	var playerSick = boolFunction(playerSick);
	if (playerSick) {
		console.log(playerName," we cant risk other players getting sick we cant let you enter")
	
	
	} else {
		console.log(playerName," you may enter brave warrior");
	}

}



function stringFunction (a){

	//You fools you have come to my  dungeon and expect to beat me!
	//You must now answer this riddle to try to beat me if you succeed I will let you live

return playerName," how much wood would a wood chuck chuck if a wood chuck could chuck wood";
}

function numberFunction (b){
	var offAge = 0;

	for (var i = b; i < 17; i++) {
   	 	offAge++;
   		 //Do something
	}



return offAge;
}

function boolFunction (c) {
	//since the player is sick we can try to help a little but no promised to helping the get back to a healthy below 5 sick rating
	var sickValue = Math.floor(Math.random() * 80) + 15;
	var isSick = true;
	
	while (30 > sickValue) {
		sickValue--;
		if (sickValue < 5) {
			isSick = false;
			break;
		}
		console.log(sickValue);
		
	}

return isSick;
}