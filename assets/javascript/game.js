
var crystals = {
  blue:
  {
    name: "Blue Crystal",
    value: 0
  },
  green:
  {
    name: "Green Crystal",
    value: 0
  },
  red:
  {
    name: "Red Crystal",
    value: 0
  },
  yellow:
  {
    name: "Yellow Crystal",
    value: 0
  }
};


var yourSum = 0;
var randomNumber = 0;


var wins = 0;
var losses = 0;


var randomize = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var startGame = function() {

  yourSum = 0;

  randomNumber = randomize(19, 120);

  
crystals.blue.value = randomize(1, 12);
console.log(crystals.blue.value = randomize(1, 12));
crystals.red.value = randomize(1, 12);
console.log(crystals.red.value = randomize(1, 12));
crystals.green.value = randomize(1, 12);
console.log(crystals.green.value = randomize(1, 12));
crystals.yellow.value = randomize(1, 12);
console.log(crystals.yellow.value = randomize(1, 12));

  
  $("#your-sum").html(yourSum);
  $("#random-number").html(randomNumber);

};


var checkWin = function() {

  
  if (yourSum > randomNumber) {
    alert("YOU'VE LOST!");

    
    losses++;

    
    $("#losses").html(losses);

    // Restart the game
    startGame();
  }

  else if (yourSum === randomNumber) {
    alert("YOU'VE WON!");

    
    wins++;

    
    $("#wins").html(wins);

    
    startGame();
  }

};


var sumNumbers = function(clickedCrystal) {

  
  yourSum += clickedCrystal.value;

  
  $("#your-sum").html(yourSum);

  
  checkWin();

};



startGame();

$("#blue").click(function() {
  sumNumbers(crystals.blue);
});

$("#red").click(function() {
  sumNumbers(crystals.red);
});

$("#green").click(function() {
  sumNumbers(crystals.green);
});

$("#yellow").click(function() {
  sumNumbers(crystals.yellow);
});