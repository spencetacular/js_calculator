// function lastAnswer(){
//   var element = document.getElementById('output');
//   if (element.innerHTML == '') {
//     return 0;
//     } else{
//       return parseFloat(element.innerHTML);
//     }

//   return parseFloat(document.getElementById('output').innerHTML);
// }

var operator = '';

var inputs = [];
var numbers = [];

function numberPress(num){
    inputs.push(num);
    console.log(inputs);
    setOutput(inputs.join(''));
  }


function getLastNumber(){
  var num = parseFloat(inputs.join(''));
  console.log(num);
  inputs = [];
  //numbers.push(num);
    if (isNaN(num) == false) {
      numbers.push(num);

    };
   
}



function getNumbers(){
  // var inputOne = parseFloat(document.getElementById('input_1').value);
  // var inputTwo = parseFloat(document.getElementById('input_2').value);
  numberOne = numbers[numbers.length -2];
  numberTwo = numbers[numbers.length -1];
  console.log('numbers ' + numbers);
  return [numberOne, numberTwo];
}



function setOutput(sum){
  //var lastOutput = lastAnswer();
  document.getElementById('output').innerHTML = sum;
  //document.getElementById('last_answer').innerHTML = lastOutput;
}

function equals(){

  switch (operator){
    case 'add':
      //add();
      num = add();
      numbers.push(num);
      console.log('numbers ' + numbers);
      break;
    default:
    break;
  }


  
} 


function add(){
  getLastNumber();
  var lastTwoInputs = getNumbers();
  var sum = lastTwoInputs[0] + lastTwoInputs[1];
  operator = 'add';
  setOutput(sum);
  return sum;
}

function subtract(){
  var inputs = getInputs();
  var sum = inputs[0] - inputs[1];
  setOutput(sum);
}

function divide(){
  var inputs = getInputs();
  var sum = inputs[0] / inputs[1];
  setOutput(sum);
}

function mult(){
  var inputs = getInputs();
  var sum = inputs[0] * inputs[1];
  setOutput(sum);
}
