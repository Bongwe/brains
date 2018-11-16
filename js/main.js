
startGame();


function startGame() {

    let factsAboutTheBrain = ["The human brain weighs 3 pounds",
    "It comprises 60% of fat and is one of the fattest organs in the human body",
    "Human brain has the capacity to generate approximately 23 watts of power when awake.",
    "Of the total blood and oxygen that is produced in our body, the brain gets 20% of it.",
    "When the blood supply to the brain stops, it is almost after 8-10 seconds that the brain starts losing the consciousness.",
    "The brain is capable of surviving for 5 to 6 minutes only if it doesn’t get oxygen after which it dies.",
    "The blood vessels that are present in the brain are almost 100,000 miles in length.",
    "There are 100 billion neurons present in the brain.",
    "In early pregnancy, the neurons develop at an alarming rate of 250,000 per minute.",
    "As we grow older, we are unable to remember new things. According to the researchers in the US it is because the brain is unable to filter and remove old memories which prevent it from absorbing new ideas.",
    "The brain of a human contains approximately one hundred billion neurons.",
    "It is a myth that humans only use 10 percent of our brain. We actually use all of it. We’re even using more than 10 percent when we sleep.",
    "Cholesterol is key to learning and memory. However, high cholesterol has different effects depending on your age and other factors.",
    "Information runs between neurons in your brain for everything we see, think, or do. These neurons move information at different speeds. The fastest speed for information to pass between neurons is about 250 mph.",
    "Dreams are believed to be a combination of imagination, phycological factors, and neurological factors. They prove that your brain is working even when you are sleeping.",
    "Cholesterol is key to learning and memory. However, high cholesterol has different effects depending on your age and other factors.",
	"Information runs between neurons in your brain for everything we see, think, or do. These neurons move information at different speeds. The fastest speed for information to pass between neurons is about 250 mph.",
	"Dreams are believed to be a combination of imagination, phycological factors, and neurological factors. They prove that your brain is working even when you are sleeping.",
	"Phantom limb pain syndrome is when the central nervous system, which includes your brain, continues to feel the pain of a limb that has been amputated.",
    "The brain can’t feel pain. It interprets pain signals sent to it, but it does not feel pain."];
    let minQuestions = 0;
    let maxQuestions = 16; 
    let pickedQuestionsIndexs = getAListOfRandomNumbers(minQuestions, maxQuestions);
    let pickedBlocksWithZombies = getAListOfRandomNumbers(minQuestions, maxQuestions);
    let numberOfLives = 3;

    for (let index = 0; index < 16; index++) {
        $("#block-" + index).click(function() {
            attachAnInterestingFactToTheBlock(index, pickedQuestionsIndexs, factsAboutTheBrain);
        });
    }

    for (let index = 0; index < 4; index++) {
        $("#block-" + pickedBlocksWithZombies[index]).click(function() {
            attachZombieToBlock();
            numberOfLives = takeALiveFromThePlayer(numberOfLives)
            checkIfPlayerIsStillAlive(numberOfLives);
        });
    }
}

function checkIfPlayerIsStillAlive(numberOfLives) {
    console.log(numberOfLives);
    if (numberOfLives == 0) {
        alert("YOu died!")
    }
}

function takeALiveFromThePlayer (numberOfLives) {
    numberOfLives--;
    return numberOfLives;
}

function attachAnInterestingFactToTheBlock(index, pickedQuestionsIndexs, factsAboutTheBrain) {
    $("#an-interesting-fact").html(factsAboutTheBrain[pickedQuestionsIndexs[index]]);
}

function attachZombieToBlock() {
    $("#an-interesting-fact").html("I wanna eat your brain!");
}

function getAListOfRandomNumbers(min, max){
	let randoms = [];
	let randomNumbers = [];

	while(randomNumbers.length < max){
		var randomnumber = Math.floor(Math.random()*max) + min;
		if(randomNumbers.indexOf(randomnumber) > -1) continue;
		randomNumbers[randomNumbers.length] = randomnumber;
	}

	return randomNumbers;
}