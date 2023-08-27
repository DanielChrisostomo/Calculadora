const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  addDigit(digit) {
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  processOperation(operation) {
    let operationValue;
    let previous = +this.previousOperationText.innerText;
    let current = +this.currentOperationText.innerText;
  }

  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

function callback(e) {
  const value = e.target.innerText;
  if (+value >= 0 || value === ".") {
    calc.addDigit(value);
  } else {
    calc.processOperation("Op: " + value);
  }
}

buttons.forEach((item) => {
  item.addEventListener("click", callback);
});
