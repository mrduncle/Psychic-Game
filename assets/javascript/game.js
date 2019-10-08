
//@ts-check

let emptArr = [];
const numGuesses = 15;
let playerWins = 0;
let wordGuess = "";
let allKeyGs = [];
let badGuess = [];
let cnfmText = "";
let compArr = [];
let wins = 0;
let losses = 0;
let wordChoice = [
  "first"
  ,"worst"
  ,"exemplary"
  ,"nightmare"
  ,"pique"
  ,"burnt"
  ,"tight"
  ,"flog"
  ,"dog"
  ,"cocoa"
  ,"narcissist"
  ,"deuce"
  ,"work"
  ,"pastime"
  ,"incorrigible"
  ,"monster"
  ,"diabolical"
  ,"park"
  ,"ocean"
  ,"river"
  ,"obfuscate"
  ,"recompense"
  ,"beauty"
  ,"end"
  ,"mission"
  ,"stout"
  ,"Christmas"
  ,"holiday"
  ,"birthday"
  ,"maze"
  ,"dream"
  ,"doctor"
  ,"flay"
  ,"skeleton"
  ,"genius"
  ,"slap"
  ,"waterfall"
  ,"rapid"
  ,"wind"
  ,"nowhere"
  ,"anyone"
  ,"oblivious"
  ,"endurance"
]








let hangdood = [""
    ,`
     
                                 
                                 
                                
      
    
                              
                             
                             
                             
                             
                             
                               
                               
                               
                             
                             
                               
                                        
                                
                             
                             
                             
                             
                             
                          
                           
    
    
    
    
_____________________________________________________`
    ,`
     
      |                             
      |                             
      |                             
      |                            
      |                           
      |                          
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                           
      |                                    
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |                             
      |                             
      |                             
      |                            
      |                           
      |                          
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                           
      |                                    
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                         
      |   /                          
      |  /                           
      | /                           
      |/                           
      |                          
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                           
      |                                    
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|_
      |/                          /   \\
      |                          /     \\
      |                         |       |
      |                         \\      /
      |                          \\    /
      |                           \\__/
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                           
      |                                    
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | o  o |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                             \\/
      |                         
      |                         
      |                         
      |                         
      |                         
      |                         
      |                           
      |                                    
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | o  o |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                          __|\\/|_
      |                         |        |
      |                         |        |
      |                         |        |
      |                         |        |
      |                         |        |
      |                         |        |
      |                          ________  
      |                                    
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | o  o |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                          __|\\/|_
      |                        /         |
      |                       /          |
      |                      |           |
      |                      |  |        |
      |                      |  |        |
      |                      |  |        |
      |                      \\  _________  
      |                       \\            
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | o  o |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                          __|\\/|__
      |                        /          \\
      |                       /            \\
      |                      |              |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      \\  __________  /
      |                       \\            /
      |                            
      |                         
      |                         
      |                         
      |                         
      |                         
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | o  o |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                          __|\\/|__
      |                        /          \\
      |                       /            \\
      |                      |              |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      \\  __________  /
      |                       \\ |          /
      |                         |   _
      |                         |   |
      |                         |   |
      |                         |   |
      |                         |   |
      |                         |   |
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | o  o |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                          __|\\/|__
      |                        /          \\
      |                       /            \\
      |                      |              |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      \\  __________  /
      |                       \\ |        | /
      |                         |   __   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                      
      |                       
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | o  o |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                          __|\\/|__
      |                        /          \\
      |                       /            \\
      |                      |              |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      \\  __________  /
      |                       \\ |        | /
      |                         |   __   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                      __/    ||    \\__
      |                     /_______||_______\\  
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | O  O |
      |                          |  ||  |
      |                          | ____ |
      |                           \\____/
      |                          __|\\/|__
      |                        /          \\
      |                       /            \\
      |                      |              |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      \\  __________  /
      |                       \\ |        | /
      |                         |   __   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                      __/    ||    \\__
      |                     /_______||_______\\  
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | 0  0 |
      |                          |  ||  |
      |                          | ____ |
      |                           \\_U__/
      |                          __|\\/|__
      |                        /          \\
      |                       /            \\
      |                      |              |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      \\  __________  /
      |                       \\ |        | /
      |                         |   __   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                      __/    ||    \\__
      |                     /_______||_______\\  
      |
      |
      |
      |
______|_______________________________________________`
    ,`
      ______________________________
      |    /                        |
      |   /                         |
      |  /                          |
      | /                          _|__
      |/                          /    \\
      |                          | X  X |
      |                          |  ||  |
      |                          | ____ |
      |                           \\_U__/
      |                          __|\\/|__
      |                        /          \\
      |                       /            \\
      |                      |              |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      |  |        |  |
      |                      \\  __________  /
      |                       \\ |        | /
      |                         |   __   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                         |   ||   |
      |                      __/    ||    \\__
      |                     /_______||_______\\  
      |
      |
      |
      |
______|_______________________________________________`
];

$(document).ready(function() {
  document.getElementById("hangman-graphic").innerHTML = hangdood[15];

  function randoWord() {
    let rndWrd = wordChoice[Math.floor(Math.random() * wordChoice.length)];
    //console.log(rndWrd);
    return rndWrd;
  }

  //function checks if the key pressed is a letter or not using regex.
  function newLtrOnly(usrGs) {
    let letters = /^[A-Za-z]$/;
    if (usrGs.match(letters)) {

      if (!(allKeyGs.includes(usrGs))) { //add to the all keys guessed array if not guessed before
        allKeyGs.push(usrGs);
        return true;
      }
      else {  //alert user that the letter has been guessed before
        alert("Try another letter, you have already guessed '" + usrGs + "'.");
        return false;
      }
    }
    else {  //alert the user that letters from the alphabet only are acceptable inputs
      alert("Please choose keys from the alphabet only.");
      return false;
    }
  }

  //function takes the letter guessed by the user and checks for a match in the selected word
  function ltrMatch(usrGs, badGuess) {
    let mtchPos = [];
    for (let i = 0; i < wordGuess.length; i++) {
      if (usrGs === wordGuess.charAt(i)) {
        mtchPos.push(i);
        console.log(mtchPos);
      }
      else if (!mtchPos.length && i === wordGuess.length - 1) {
        badGuess.push(usrGs);
        console.log(badGuess);
      }
    }
    return [mtchPos, badGuess];
  }

  //function takes the list of matches and matched letter and fills a display array
  function flMatch(usrGs, mtchPos, compArr) {
    for (let i = 0; i < mtchPos.length; i++) { 
      compArr[mtchPos[i]] = usrGs;
    }
    return compArr;
  }

  //display the wordArray which may be the empty array at the start of a game or the
  //compare array. Variable midGame is not passed when the game is first started so
  //is undefined for updating the display as the game commences. During the game the 
  //value of midGame is assigned the value of the array badGuess in order to display
  //the incorrect guesses
  function updateDisplay(wordArray, midGame) {
    // let wordJoin = wordArray.join(" ");
    document.getElementById("guess-word").innerHTML = wordArray.join(" ");
    if (midGame !== undefined) {
      document.getElementById("letters-guessed").innerHTML = "Letters guessed: " + midGame.join(", ");
      document.getElementById("guess-remain").innerHTML = "Guesses left: " + parseInt(numGuesses - midGame.length);
      document.getElementById("hangman-graphic").innerHTML = hangdood[midGame.length];
    }
    else {
      document.getElementById("letters-guessed").innerHTML = "Letters guessed: ";
      document.getElementById("guess-remain").innerHTML = "Guesses left: " + numGuesses;
    }
  }

  // function winLoss()


  function assessGame(isNewLetter, usrGs) {
    //first check if the current game is still in progress (ie there 
    //are still missing letters and the number of wrong guesses has 
    //not been exceeded)
    if (numGuesses > badGuess.length && compArr.includes("_")) {
      if (isNewLetter && compArr.includes(usrGs)) {
        alert(usrGs.toUpperCase() + " is a correct guess!! Please guess another letter.");
      }
      else if (isNewLetter && !compArr.includes(usrGs)){
        alert(usrGs.toUpperCase() + " is a wrong guess!! Please guess another letter.");
      }
    }
    else {  //check if all letters have been filled out for the array
      if (!compArr.includes("_")) {
        wins++;
        document.getElementById("wins").innerHTML = "Session wins: " + wins;
        document.getElementById("result").style.color = "green";
        document.getElementById("result").style.top = "370px";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "You win!!!!";
      }
      else if (badGuess.length = numGuesses) {
        losses++;
        document.getElementById("losses").innerHTML = "Session losses: " + losses;
        document.getElementById("result").style.color = "red";
        document.getElementById("result").style.top = "250px";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "You lose!!!! The word was " + wordGuess + ".";
      }
      setTimeout(function() { startGame("Do you want to play again?") }, 100);
      ; //go to function to check if game is to be played again
    }
  }

  //establishes the random word to guess and displays the dashes for the
  //letters of the word as well as the number of guesses remaining 
  function wordChoose() {
    wordGuess = randoWord();
    //resize the empty array so it reduces in size if the next word
    //is smaller than the current word
    if (wordGuess.length < emptArr.length) { 
      let redArr = emptArr.length - wordGuess.length
      for (let i = 0; i < redArr; i++) {
        emptArr.pop(); //remove the last element of the array
      }
    }
    //populate the array with the correct number of empty elements
    for (let j = 0; j < wordGuess.length; j++) {
      emptArr[j] = "_";
    }
    updateDisplay(emptArr);
  }

  //starting point for the game
  function startGame(cnfmText) {
    if (confirm(cnfmText)) {
      badGuess = [];
      compArr = [];
      allKeyGs = [];
      document.getElementById("result").style.display = "none";
      // document.getElementById("letters-guessed").innerHTML = "Letters guessed: ";
      // document.getElementById("guess-remain").innerHTML = "Guesses left: " + numGuesses;
      wordChoose();
    }
    else {
      alert("Thank you for playing, please close the browser page.");
    }
  }

  startGame("Do you wish to start playing?");

  document.onkeyup = function(evnt) {
    let usrGs = evnt.key.toLowerCase();
    let rtrnArr = [[],[]];
    let mtchPos = [];
    let isNewLetter = newLtrOnly(usrGs);
    if (isNewLetter) { //if key pressed is a letter try and find a match
      let rtrnArr = ltrMatch(usrGs, badGuess);
      mtchPos = rtrnArr[0].slice(0);
      badGuess = rtrnArr[1].slice(0);
      //first check for zero prior letter guesses that match letters in the word and a matched current letter
      if (mtchPos.length > 0 && !compArr.length) {
        compArr = emptArr.slice(0);
        compArr = flMatch(usrGs, mtchPos, compArr);
      }
      //next check for situation where prior letter guesses had matched and there is a matched current letter
      else if (mtchPos.length > 0) {
        compArr = flMatch(usrGs, mtchPos, compArr);
      }
      //lastly check for zero prior letter guesses that match letters in the word and there is not a current matched letter
      else if (!compArr.length) {
        compArr = emptArr.slice(0);
      }
      //update display of the current status of the guesses 
      updateDisplay(compArr, badGuess);
      
      setTimeout(function() { assessGame(isNewLetter, usrGs) }, 0);
    }
  }
})
