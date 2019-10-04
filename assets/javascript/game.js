const numGuesses = 15;
let playerWins;
let wordGuess;
let allKeyGs = [];
let badGuess = [];
let emptArr = [];
let compArr = [];
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
  ,""
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

// console.log(hangdood[0]);
// console.log(hangdood[1]);
// console.log(hangdood[2]);
// console.log(hangdood[3]);
// console.log(hangdood[4]);
// console.log(hangdood[5]);
// console.log(hangdood[6]);
// console.log(hangdood[7]);
// console.log(hangdood[8]);
// console.log(hangdood[9]);
// console.log(hangdood[10]);
// console.log(hangdood[11]);
// console.log(hangdood[12]);
// console.log(hangdood[13]);
// console.log(hangdood[14]);


// console.log(hangdood[15]);
document.getElementById("hangman-graphic").innerHTML = hangdood[15];


function randoWord() {
  let rndWrd = wordChoice[Math.floor(Math.random() * wordChoice.length)];
  //console.log(rndWrd);
  return rndWrd;
}

//function checks if the key pressed is a letter or not using regex.
function ltrOnly(usrGs) {
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
    if (usrGs.toLowerCase() === wordGuess.charAt(i)) {
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
  for (i = 0; i < mtchPos.length; i++) { 
    compArr[mtchPos[i]] = usrGs;
  }
  return compArr;
}

//display the 
function updateDisplay(wordArray, badGuess) {
  // let wordJoin = wordArray.join(" ");
  document.getElementById("guess-word").innerHTML = wordArray.join(" ");
  if (badGuess !== undefined) {
    document.getElementById("letters-guessed").innerHTML = badGuess.join(", ");
    document.getElementById("guess-remain").innerHTML = numGuesses - badGuess.length;
    document.getElementById("hangman-graphic").innerHTML = hangdood[badGuess.length];
  }
  else {
    document.getElementById("letters-guessed").innerHTML = "";
    document.getElementById("guess-remain").innerHTML = numGuesses;
  }
}

function guessWord(wordGuess) {
  
}

//starting point for the program: establishes the random word to guess and 
//displays the dashes for the letters of the word as well as the number of 
//guesses remaining 
function wordChoose() {
  wordGuess = randoWord();
  for (let i = 0; i < wordGuess.length; i++) {
    emptArr[i] = "_";
  }
  updateDisplay(emptArr);
}

wordChoose();
//console.log(wordGuess);


document.onkeyup = function(evnt) {
  let usrGs = evnt.key;
  let rtrnArr = [[],[]];
  let mtchPos = [];
  if (ltrOnly(usrGs)) { //if key pressed is a letter try and find a match
    let rtrnArr = ltrMatch(usrGs, badGuess);
    mtchPos = rtrnArr[0];
    badGuess = rtrnArr[1];
  }

  if (mtchPos.length > 0 && !compArr.length) {  //only add matches if rtrnArr[1] has a length
    compArr = emptArr;
    compArr = flMatch(usrGs, mtchPos, compArr);
  }
  else if (mtchPos.length > 0) {
    compArr = flMatch(usrGs, mtchPos, compArr);
  }
  else if (!compArr.length) {
    compArr = emptArr;
  }
  //update display of the current status of the guesses 
  updateDisplay(compArr, badGuess);
  
}
