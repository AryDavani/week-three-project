(function() {
  'use strict';

  var holding = '';

  var display = document.getElementById('display');
  var buttons = document.querySelectorAll('.inputData');
  var clear = document.querySelector('.clear');
  var equals = document.querySelector('.equals');

  equals.addEventListener('click', evaluate);
  clear.addEventListener('click', clearIt);



  function displayStuff(event) {
    var stuff = event.target.textContent;
    holding += stuff;
    display.textContent = holding;
    console.log(holding);
  }

  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', displayStuff);
  }

  function evaluate() {
    var holdingArray = holding.split(' ');
    var answer;
    switch (holdingArray[1]) {
      case '-':
        answer = holdingArray[0] - holdingArray[2];
        break;
      case '+':
        answer = holdingArray[0] + holdingArray[2];
        break;
      case '/':
        answer = holdingArray[0] / holdingArray[2];
        break;
      case '*':
        answer = holdingArray[0] * holdingArray[2];
        break;

    }
    display.textContent = answer;
    return;

    }

  function clearIt() {
    holding = '';
    display.textContent = holding;
  }


  // var operator == false;
  // enter a number; store that to a variable (var a)
  // enter an operator; toggle operator; store that to a variable (var oper)
  // enter a number; store that to a variable (var b)
  // equal; return a oper b

}());
