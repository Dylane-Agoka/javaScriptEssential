function performOperation(operation) {
  let num1 = parseInt(document.getElementById('input1').value);
  let num2 = parseInt(document.getElementById('input2').value);
  if (!isNaN(num1) && !isNaN(num2)) {
    let result;
    switch (operation) {
      case 'add':
        result = add(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        if (num2 === 0) {
          displayResult('❌ Error: Division by Zero');
          return;
        }
        result = divide(num1, num2).toFixed(4);
        break;
      default:
        displayResult('Unknown operation');
    }
    displayResult(result);
  } else {
    displayResult('Please enter valid numbers');
  }
}

function multiply(a,b) {
  debugger;
  return a*b;
}

function add(a,b) {
  debugger;
  return a+b;
}

function divide(a,b) {
  debugger;
  return a/b;
}

function displayResult(result) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById('result');
  resultElement.textContent = `The result is : ${result}`;
}