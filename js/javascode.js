var iteration = 0; // this variable contains the number of rounds the user play  
var rAllPossibleInput = ["paper", "rock", "scissors"]; // array of all possible choices 
var robotInput; // will contain choice of robot  
var userInputImage = document.getElementById("userInputImage"); // contain the user image that will display in one result section 
var robotInputImage = document.getElementById("robotInputImage"); // contain the robot image that will display in one result section
var userScoreNumber = Number(document.getElementById("myscore").innerHTML);// get current  user  score as number  
var robotScoreNumber = Number(document.getElementById("robotscore").innerHTML); // get current robot score as number 




/******************move from start home to instructions page **************/
function gotoinstructions() {

        document.getElementById("startPage").style.display = "none"; // hidden start section 
        document.getElementById("instructionsPage").style.display = "block"; //show instructions section 
    }
    /*********************go to play**********************/