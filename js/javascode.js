var iteration = 0; // this variable contains the number of rounds the user play  
var rAllPossibleInput = ["paper", "rock", "scissors"]; // array of all possible choices 
var robotInput; // will contain choice of robot  
var userInputImage = document.getElementById("userInputImage"); // contain the user image that will display in one result section 
var robotInputImage = document.getElementById("robotInputImage"); // contain the robot image that will display in one result section
var userScoreNumber = Number(document.getElementById("myscore").innerHTML);// get current  user  score as number  
var robotScoreNumber = Number(document.getElementById("robotscore").innerHTML); // get current robot score as number 




/******************move from start home to instructions page **************/
function gotoinstructions() //move to instructions
{

        document.getElementById("startPage").style.display = "none"; // hidden start section 
        document.getElementById("instructionsPage").style.display = "block"; //show instructions section 
    }
/*********************go to play**********************/
function gotoplay() // move to game
{

    document.getElementById("instructionsPage").style.display = "none"; // hidden instructions section 
    document.getElementById("mygame").style.display = "block"; // show con-game section 
}
/**********************************play ************************************/
function play(userInput) {
        var i = Math.floor(Math.random() * 3); // i contains random number between 0 - 2 to be index of rAllPossibleInput array 
        robotInput = rAllPossibleInput[i]; // get robot choice  
        iteration += 1; // increase iteration by 1 this means user played   
        showReult(userInput, robotInput); // to show result this function takes user's choice  and robot's choice 

    }
 /****************************show result section**********************/
function showReult(userInput, robotInput) {

    /*******************set result p **************/
    document.getElementById("result").innerHTML = checkInput(userInput, robotInput);
	//this function returns 'Lose' or 'Win' or 'Draw' and set the return value as p's value 
    if (checkInput(userInput, robotInput) === "Lose") //check if function returns 'Lose' 
	{
        document.getElementById("result").style.color = "red"; // set p's color red 

    } else if (checkInput(userInput, robotInput) === "Win")//check if function returns 'Win' 
	{
        document.getElementById("result").style.color = "green";// set p's color green 
    } else //check if function returns 'Draw' 
	{
        document.getElementById("result").style.color = "green"; //set p's color green
    }

    /******************show result section****************************/
    document.getElementById("hands").style.display = "none"; //hidden game 
    document.getElementById("oneRsult").style.display = "block";// show result of this round 
    setNumbers(checkInput(userInput, robotInput));  // set score 
    checkIteration(iteration); //this function checks if user played less 10 times or more  


}



/*********************check inputs***********************************/
function checkInput(userInput, robotInput) // this function takes user's choice and robot's choice 
{
        if (userInput === "paper") {
            userInputImage.src = "images/paperUser.jpg"; // set user image that will display in one result section
            if (robotInput === "paper") {
                robotInputImage.src = "images/paperRobot.jpg"; // set robot image that will display in one result section 
                return "Draw";// return result of this time 
            } else if (robotInput === "rock") {
                robotInputImage.src = "images/rockRobot.jpg";
                return "Win";
            } else {
                robotInputImage.src = "images/scissorsRobot.jpg";
                return "Lose";
            }
        } /****************************/
        else if (userInput === "rock") {
            userInputImage.src = "images/rockUser.jpg";
            if (robotInput === "rock") {
                robotInputImage.src = "images/rockRobot.jpg";
                return "Draw";
            } else if (robotInput === "paper") {
                robotInputImage.src = "images/paperRobot.jpg";
                return "Win";
            } else {
                robotInputImage.src = "images/scissorsRobot.jpg";
                return "Lose";
            }
        } /**********************************************/
        else {
            userInputImage.src = "images/scissorsUser.jpg";
            if (robotInput === "scissors") {
                robotInputImage.src = "images/scissorsRobot.jpg";
                return "Draw";
            } else if (robotInput === "rock") {
                robotInputImage.src = "images/rockRobot.jpg";
                return "Lose";
            } else {
                robotInputImage.src = "images/paperRobot.jpg";
                return "Win";
            }
        }

    } /****end of function**************/
 /******************************check iteration*******************/
function checkIteration(num) {
        if (num < 10) // if less than 10 ,let user play again 
		{
            removeResult();
        } else // if not , show overall result and end the game  
		{

            showFinalResult();

        }
    }
 
/***********************remove result section******************/
function removeResult() // this function hides one result section after 1000s and let user play again  
{
        setTimeout(function() {
            document.getElementById("hands").style.display = "block";
            document.getElementById("oneRsult").style.display = "none";
            document.getElementById("result").innerHTML = ""; 

        }, 1000);
    }
    /************************************************/
function showFinalResult() // this function hides one result section after 1000s  and returns final result of the game  
{

    if (userScoreNumber > robotScoreNumber) {
        document.getElementById("finalresult").innerHTML = "Win"; //set p's value in final result section 
        document.getElementById("finalresult").style.color = "green";
    } else if (robotScoreNumber > userScoreNumber) {
        document.getElementById("finalresult").innerHTML = "Lose";
        document.getElementById("finalresult").style.color = "red";

    } else {
        document.getElementById("finalresult").innerHTML = "Draw";
        document.getElementById("finalresult").style.color = "green";
    }

    setTimeout(function() {
        document.getElementById("conFinalResult").style.display = "block";
        document.getElementById("oneRsult").style.display = "none";
		robotInputImage.src ="";
		userInputImage.src ="";
        document.getElementById("result").innerHTML = "";

    }, 1000);
}

/***************************set numbers *******************************/
function setNumbers(result) // set score  
{



        if (result === "Lose") {
            robotScoreNumber += 1;
            document.getElementById("robotscore").innerHTML = robotScoreNumber;

        } else if (result === "Win") {
            userScoreNumber += 1;
            document.getElementById("myscore").innerHTML = userScoreNumber;

        } else {
            document.getElementById("robotscore").innerHTML = robotScoreNumber;
            document.getElementById("myscore").innerHTML = userScoreNumber;

        }

    }
    /*************************************************************/
    /*************************playAgain******************************/
function playAgain() // let user play new game 
{
    iteration = 0;
    document.getElementById("myscore").innerHTML = "0";
    document.getElementById("robotscore").innerHTML = "0";
    document.getElementById("hands").style.display = "block";
    document.getElementById("oneRsult").style.display = "none";
    document.getElementById("conFinalResult").style.display = "none";

}

