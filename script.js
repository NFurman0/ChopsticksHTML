var currentBoard = [[1, 1], [1, 1]];
var isUserTurn = true;
var userIsSplitting = false;
var gameIsOver = false;
var playerWon = false;
var leftHandSelected = false;
var rightHandSelected = false;
var leftHandBlue = false;
var rightHandBlue = false;
var difficulty = 0;

const leftHandButton = document.getElementById("leftHand");
const rightHandButton = document.getElementById("rightHand");
const leftComputerButton = document.getElementById("computerLeft");
const rightComputerButton = document.getElementById("computerRight");

const fourButton0 = document.getElementById("fourSplit0");
const fourButton1 = document.getElementById("fourSplit1");
const fourButton2 = document.getElementById("fourSplit2");

const thinkingText = document.getElementById("thinkingText");

function selectEasyDifficulty() {
  difficulty = 0;
  document.getElementById("easyDifficulty").style.display = 'none';
  document.getElementById("mediumDifficulty").style.display = 'none';
  document.getElementById("hardDifficulty").style.display = 'none';
  leftHandButton.style.display = 'block';
  rightHandButton.style.display = 'block';
  leftComputerButton.style.display = 'block';
  rightComputerButton.style.display = 'block';
}

function selectMediumDifficulty() {
  difficulty = 1;
  document.getElementById("easyDifficulty").style.display = 'none';
  document.getElementById("mediumDifficulty").style.display = 'none';
  document.getElementById("hardDifficulty").style.display = 'none';
  leftHandButton.style.display = 'block';
  rightHandButton.style.display = 'block';
  leftComputerButton.style.display = 'block';
  rightComputerButton.style.display = 'block';
}

function selectHardDifficulty() {
  difficulty = 2;
  document.getElementById("easyDifficulty").style.display = 'none';
  document.getElementById("mediumDifficulty").style.display = 'none';
  document.getElementById("hardDifficulty").style.display = 'none';
  leftHandButton.style.display = 'block';
  rightHandButton.style.display = 'block';
  leftComputerButton.style.display = 'block';
  rightComputerButton.style.display = 'block';
}

function checkBoard() {
  if(currentBoard[0][0] >= 5) currentBoard[0][0] = 0;
  if(currentBoard[0][1] >= 5) currentBoard[0][1] = 0;
  if(currentBoard[1][0] >= 5) currentBoard[1][0] = 0;
  if(currentBoard[1][1] >= 5) currentBoard[1][1] = 0;
  
  if(currentBoard[0][0] == 0 && currentBoard[0][1] == 0) {
    gameIsOver = true;
    playerWon = true;
  }
  if(currentBoard[1][0] == 0 && currentBoard[1][1] == 0) {
    gameIsOver = true;
    playerWon = false;
  }
}

function leftHandClicked() {
  if(isUserTurn) {
    leftHandSelected = !leftHandSelected;
    if(rightHandSelected) {
      if(currentBoard[0][0] + currentBoard[0][1] > 1 && currentBoard[0][0] + currentBoard[0][1] < 7) userSplit();
      leftHandSelected = false;
      rightHandSelected = false;
    }
  }
  computerMove();
}

function rightHandClicked() {
  if(isUserTurn) {
    rightHandSelected = !rightHandSelected;
    if(leftHandSelected) {
      if(currentBoard[0][0] + currentBoard[0][1] > 1 && currentBoard[0][0] + currentBoard[0][1] < 7) userSplit();
      leftHandSelected = false;
      rightHandSelected = false;
    }
  }
  computerMove();
}

function leftComputerClicked() {
  if(currentBoard[1][0] > 0) {
    if(leftHandSelected && currentBoard[0][0] > 0) {
      if(currentBoard[0][0] == 0) leftHandSelected = false;
      else currentBoard[1][0] += currentBoard[0][0];
      isUserTurn = false;
    } else if(rightHandSelected && currentBoard[0][1] > 0) {
      if(currentBoard[0][1] == 0) rightHandSelected = false;
      else currentBoard[1][0] += currentBoard[0][1];
      isUserTurn = false;
    }
    computerMove();
  }
}

function rightComputerClicked() {
  if(currentBoard[1][1] > 0) {
    if(leftHandSelected && currentBoard[0][0] > 0) {
      if(currentBoard[0][0] == 0) leftHandSelected = false;
      else currentBoard[1][1] += currentBoard[0][0];
      isUserTurn = false;
    } else if(rightHandSelected && currentBoard[0][1] > 0) {
      if(currentBoard[0][1] == 0) rightHandSelected = false;
      else currentBoard[1][1] += currentBoard[0][1];
      isUserTurn = false;
    }
    computerMove();
  }
}

function userSplit() {
  var sum = currentBoard[0][0] + currentBoard[0][1];
  var p1 = currentBoard[0][0];
  var p2 = currentBoard[0][1];
  if(sum == 4) {
    userIsSplitting = true;
    if(p1 == 2) {
      fourButton1.style.display = 'block';
      fourButton0.style.display = 'block';
    } else if(p1 == 0 || p2 == 0) {
      fourButton1.style.display = 'block';
      fourButton2.style.display = 'block';
    } else {
      fourButton0.style.display = 'block';
      fourButton2.style.display = 'block';
    }
  } else {
    if(sum == 2) {
      if(p1 == 1) {
        currentBoard[0][0] = 0;
        currentBoard[0][1] = 2;
      } else {
        currentBoard[0][0] = 1;
        currentBoard[0][1] = 1;
      }
    } else if(sum == 3) {
      if(p1 == 0 || p2 == 0) {
        currentBoard[0][0] = 1;
        currentBoard[0][1] = 2;
      } else {
        currentBoard[0][0] = 0;
        currentBoard[0][1] = 3;
      }
    } else if(sum == 5) {
      if(p1 == 1 || p2 == 1) {
        currentBoard[0][0] = 2;
        currentBoard[0][1] = 3;
      } else {
        currentBoard[0][0] = 1;
        currentBoard[0][1] = 4;
      }
    } else {
      if(p1 == 3) {
        currentBoard[0][0] = 2;
        currentBoard[0][1] = 4;
      } else {
        currentBoard[0][0] = 3;
        currentBoard[0][1] = 3;
      }
    }
  }
  isUserTurn = false;
  updateImages();
}

function updateImages() {
  checkBoard();
  var p1 = currentBoard[0][0];
  var p2 = currentBoard[0][1];
  var c1 = currentBoard[1][0];
  var c2 = currentBoard[1][1];

  if(p1 == 0) {
    leftHandButton.style.background = 'none';
  } else if(p1 == 1) {
    leftHandButton.style.background = 'url("oneSticks.jpg")';
  } else if(p1 == 2) {
    leftHandButton.style.background = 'url("twoSticks.jpg")';
  } else if(p1 == 3) {
    leftHandButton.style.background = 'url("threeSticks.jpg")';
  } else if(p1 == 4) {
    leftHandButton.style.background = 'url("fourSticks.jpg")';
  } else alert("p1: " + p1 + " p2: " + p2);

  if(p2 == 0) {
    rightHandButton.style.background = 'none';
  } else if(p2 == 1) {
    rightHandButton.style.background = 'url("oneSticks.jpg")';
  } else if(p2 == 2) {
    rightHandButton.style.background = 'url("twoSticks.jpg")';
  } else if(p2 == 3) {
    rightHandButton.style.background = 'url("threeSticks.jpg")';
  } else if(p2 == 4) {
    rightHandButton.style.background = 'url("fourSticks.jpg")';
  } else alert("p1: " + p1 + " p2:" + p2);

  if(c1 == 0) {
    leftComputerButton.style.background = 'none';
  } else if(c1 == 1) {
    leftComputerButton.style.background = 'url("oneSticks.jpg")';
  } else if(c1 == 2) {
    leftComputerButton.style.background = 'url("twoSticks.jpg")';
  } else if(c1 == 3) {
    leftComputerButton.style.background = 'url("threeSticks.jpg")';
  } else if(c1 == 4) {
    leftComputerButton.style.background = 'url("fourSticks.jpg")';
  } else alert("c1: " + c1 + " c2: " + c2);

  if(c2 == 0) {
    rightComputerButton.style.background = 'none';
  } else if(c2 == 1) {
    rightComputerButton.style.background = 'url("oneSticks.jpg")';
  } else if(c2 == 2) {
    rightComputerButton.style.background = 'url("twoSticks.jpg")';
  } else if(c2 == 3) {
    rightComputerButton.style.background = 'url("threeSticks.jpg")';
  } else if(c2 == 4) {
    rightComputerButton.style.background = 'url("fourSticks.jpg")';
  } else alert("c1: " + c1 + " c2: " + c2);
  
  if(leftHandSelected) {
    leftHandButton.style.boxShadow = '10px 5px 5px red';
    leftHandBlue = false;
  }
  else {
    if(!leftHandBlue) leftHandButton.style.boxShadow = 'none';
  }
  if(rightHandSelected) {
    rightHandButton.style.boxShadow = '10px 5px 5px red';
    rightHandBlue = false;
  }
  else {
    if(!rightHandBlue) rightHandButton.style.boxShadow = 'none';
  }
  endGame();
}

function split13() {
  currentBoard[0][0] = 1;
  currentBoard[0][1] = 3;
  fourButton0.style.display = 'none';
  fourButton1.style.display = 'none';
  fourButton2.style.display = 'none';
  isUserTurn = false;
  userIsSplitting = false;
  computerMove();
}

function split22() {
  currentBoard[0][0] = 2;
  currentBoard[0][1] = 2;
  fourButton0.style.display = 'none';
  fourButton1.style.display = 'none';
  fourButton2.style.display = 'none';
  isUserTurn = false;
  userIsSplitting = false;
  computerMove();
}

function split04() {
  currentBoard[0][0] = 0;
  currentBoard[0][1] = 4;
  fourButton0.style.display = 'none';
  fourButton1.style.display = 'none';
  fourButton2.style.display = 'none';
  isUserTurn = false;
  userIsSplitting = false;
  computerMove();
}

function computerMove() {
  checkBoard();
  if(!isUserTurn && !userIsSplitting && !gameIsOver) {
    leftHandSelected = false;
    rightHandSelected = false;
    thinkingText.style.display = "block";
    thinkingText.innerHTML = 'Thinking...';
    leftComputerButton.style.boxShadow = 'none';
    rightComputerButton.style.boxShadow = 'none';
    leftHandBlue = false;
    rightHandBlue = false;
    setTimeout(function() {
      if(difficulty == 0) {
        randomChoice();
      } else if(difficulty == 1) {
        mediumChoice();
      } else {
        optimalChoice();
      }
      updateImages();
    }, 500)
    isUserTurn = true;
  }
  updateImages();
}

function randomChoice() {
  var firstChoice =  parseInt(Math.random()*3); 
  if(currentBoard[1][0] + currentBoard[1][1] == 1 || currentBoard[1][0]+currentBoard[1][1] >= 7) firstChoice = parseInt(Math.random()*2);
  if(firstChoice == 0 || firstChoice == 1) {
    thinkingText.innerHTML = "Attack";
    if(currentBoard[1][0] == 0) firstChoice = 1;
    if(currentBoard[1][1] == 0) firstChoice = 0;
    var secondChoice = parseInt(Math.random()*2);
    if(currentBoard[0][0] == 0) secondChoice = 1;
    if(currentBoard[0][1] == 0) secondChoice = 0;
    currentBoard[0][secondChoice] += currentBoard[1][firstChoice];
    if(firstChoice == 0) leftComputerButton.style.boxShadow = '10px 5px 5px blue';
    else rightComputerButton.style.boxShadow = '10px 5px 5px blue';
    if(secondChoice == 0) {
      leftHandButton.style.boxShadow = '10px 5px 5px blue';
      leftHandBlue = true;
    }
    else {
      rightHandButton.style.boxShadow = '10px 5px 5px blue';
      rightHandBlue = true;
    }
  } else {
    thinkingText.innerHTML = 'Split';
    rightComputerButton.style.boxShadow = '10px 5px 5px blue';
    leftComputerButton.style.boxShadow = '10px 5px 5px blue';
    var range = currentBoard[1][0] + currentBoard[1][1];
    var min = range-5;
    range = Math.min(range, 3);
    min = Math.max(min, 0);
    var secondChoice = parseInt((Math.random()*(range-min)))+1+min;
    while(secondChoice == currentBoard[1][0] || secondChoice == currentBoard[1][1]) {
      secondChoice = parseInt((Math.random()*(range-min)))+1+min;
    }
    currentBoard[1][1] = (currentBoard[1][0] + currentBoard[1][1]) - secondChoice;
    currentBoard[1][0] = secondChoice;
  }
  isUserTurn = true;
  leftHandSelected = false;
  rightHandSelected = false;
}

function computerSplit() {
  var c1 = currentBoard[1][0];
  var c2 = currentBoard[1][1];
  if(c1+c2 == 4) {
    if(c1 != 2) {
      currentBoard[1][0] = 2;
      currentBoard[1][1] = 2;
    }
    else {
      currentBoard[1][0] = 1;
      currentBoard[1][1] = 3;
    }
  } else {
    total = c1+c2;
    if(c1 == 0 || c2 == 0) {
      currentBoard[1][0] = 1;
      currentBoard[1][1] = total-1;
    } else {
      currentBoard[1][0] = Math.min(4, total);
      currentBoard[1][1] = total-currentBoard[1][0];
    }
  }
}

function optimalChoice() {
  checkBoard();
  var c1 = currentBoard[1][0];
  var c2 = currentBoard[1][1];
  var p1 = currentBoard[0][0];
  var p2 = currentBoard[0][1];
  var cHighest = Math.max(c1, c2);
  
  if(p1+p2 == 1) {
    if((c1 == 0 && c2 == 2) || (c2 == 0 && c1 == 2)) {
      currentBoard[1][0] = 1;
      currentBoard[1][1] = 1;
    } else if((c1 == 0 && c2 == 3) || (c2 == 0 && c1 == 3)) {
      currentBoard[1][0] = 1;
      currentBoard[1][1] = 2;
    } else if(c1 == 4 || c2 == 4) {
      if(p1 == 0) currentBoard[0][1] += 4;
      else currentBoard[0][0] += 4;
    } else if((c1 == 1 && c2 == 1)) {
      currentBoard[1][0] = 0;
      currentBoard[1][1] = 2;
    } else if((c1 == 1 && c2 == 2) || (c2 == 1 && c1 == 2)) {
      currentBoard[1][0] = 0;
      currentBoard[1][1] = 3;
    } else if(c1 == 2 && c2 == 2) {
      currentBoard[1][0] = 3;
      currentBoard[1][1] = 1;
    } else if((c1 == 2 && c2 == 3) || (c2 == 2 && c1 == 3)) {
      if(p1 == 0) currentBoard[0][1] += 2;
      else currentBoard[0][0] += 2;
    } else if(c1 == 3 && c2 == 3) {
      currentBoard[1][0] = 4;
      currentBoard[1][1] = 2;
    } else {
      if(p1 == 0) currentBoard[0][1] += 1;
      else currentBoard[0][0] += 1;
    }
  }
  else if((p1 == 0 || p2 == 0) && cHighest + Math.max(p1, p2) >= 5) {
    if(p1 == 0) currentBoard[0][1] += cHighest;
    else currentBoard[0][0] += cHighest;
  }
  else if(c1 == 0 || c2 == 0) {
    if(cHighest + Math.max(p1, p2) >= 5 && cHighest + Math.min(p1, p2) < 5) {
      if(p1 > p2) currentBoard[0][0] += cHighest;
      else currentBoard[0][1] += cHighest;
    } else if(cHighest > 1 && c1 + c2 < 7) computerSplit();
    else {
      if(p1 > p2) currentBoard[0][0] += cHighest;
      else currentBoard[0][1] += cHighest;
    }
  }
  else if((p1 == 1 || p2 == 1) && (Math.max(p1, p2) + cHighest >= 5)) {
    if((c1 == 1 && c2 == 4) || (c1 == 4 && c2 == 1)) {
      currentBoard[1][0] = 3;
      currentBoard[1][1] = 2;
    } else {
      if(p1 > p2) currentBoard[0][0] += cHighest;
      else currentBoard[0][1] += cHighest;
    }
  }
  else if((p1 == 3 || p2 == 3) && ((c1 >= 2 && c2 >= 3) || (c2 >= 2 && c1 >= 3))) {
    if(p1 == 3) currentBoard[0][1] += 3;
    else currentBoard[0][0] += 3;
  } 
  else if((c1 == 1 || c2 == 1) && Math.min(p1, p2) + cHighest >= 5) {
    if(cHighest == 1) {
      currentBoard[0][0] += 1;
    } else if(cHighest == 2) {
      if(p1 > p2) currentBoard[0][1] += 2;
      else currentBoard[0][0] += 2;
    } else if(cHighest == 3) {
      currentBoard[1][0] = 2;
      currentBoard[1][1] = 2;
    } else if(cHighest == 4) {
      currentBoard[1][0] = 3;
      currentBoard[1][1] = 2;
    }
  }
  else if((p1 == 1 || p2 == 1) && Math.max(p1, p2) + cHighest >= 4 && cHighest >= 3) {
    if(p1 > p2) currentBoard[0][0] += 3;
    else currentBoard[0][1] += 3;
  }
  else if(p1 == 1 && p2 == 1 && c1+c2 > 2) {
    computerSplit();
  }
  else if(c1 == 1 && c2 == 1) {
    if((p1 == 1 && p2 <= 2) || (p2 == 1 && p1 <= 2)) {
      currentBoard[1][0] = 2;
      currentBoard[1][1] = 0;
    } else {
      if(p1 == 0) currentBoard[0][1]++;
      else if(p2 == 0) currentBoard[0][0]++;
      else if(p1 < p2) currentBoard[0][0]++;
      else currentBoard[0][1]++;
    }
  }
  else {
    if(p1 > p2) currentBoard[0][0] += cHighest;
    else currentBoard[0][1] += cHighest;
  }

  if(c1 != currentBoard[1][0]) {
    leftComputerButton.style.boxShadow = '10px 5px 5px blue';
    rightComputerButton.style.boxShadow = '10px 5px 5px blue';
    thinkingText.innerHTML = 'Split';
  } else {
    leftComputerButton.style.boxShadow = 'none';
    rightComputerButton.style.boxShadow = 'none';
  }

  if(p1 != currentBoard[0][0]) {
    thinkingText.innerHTML = 'Attack';
    leftHandButton.style.boxShadow = '10px 5px 5px blue';
    leftHandBlue = true;
    if(currentBoard[0][0] == p1+c1) {
      leftComputerButton.style.boxShadow = '10px 5px 5px blue';
    } else {
      rightComputerButton.style.boxShadow = '10px 5px 5px blue';
    }
  } else {
    leftHandButton.style.boxShadow = 'none';
    leftHandBlue = false;
  }

  if(p2 != currentBoard[0][1]) {
    thinkingText.innerHTML = 'Attack';
    rightHandButton.style.boxShadow = '10px 5px 5px blue';
    rightHandBlue = true;
    if(currentBoard[0][1] == p2+c1) {
      leftComputerButton.style.boxShadow = '10px 5px 5px blue';
    } else {
      rightComputerButton.style.boxShadow = '10px 5px 5px blue';
    }
  } else {
    rightHandButton.style.boxShadow = 'none';
    rightHandBlue = false;
  }
}

function mediumChoice() {
  if((currentBoard[0][0] == 0 || currentBoard[0][1] == 0) && Math.max(currentBoard[0][0], currentBoard[0][1]) + Math.max(currentBoard[1][0], currentBoard[1][1]) >= 5) optimalChoice();
  else {
    var randnum = parseInt(Math.random()*2);
    if(randnum == 0) optimalChoice();
    else randomChoice();
  }
}

function endGame() {
  if(currentBoard[0][0] + currentBoard[0][1] == 0 || currentBoard[1][0] + currentBoard[1][1] == 0) {
    //alert(currentBoard[1][0] + " " + currentBoard[1][1] + "\n" + currentBoard[0][0] + " " + currentBoard[0][1]);
    fourButton0.display = 'none';
    fourButton1.display = 'none';
    fourButton2.display = 'none';
    rightHandButton.style.boxShadow = 'none';
    leftHandButton.style.boxShadow = 'none';
    leftHandButton.disabled = true;
    rightHandButton.disabled = true;
    leftComputerButton.disabled = true;
    rightComputerButton.disabled = true;
    if(currentBoard[0][0] + currentBoard[0][1] == 0) alert("Computer Wins.");
    else alert("You Win!");
  }
}
