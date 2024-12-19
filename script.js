// script.js

// Get the display element
const display = document.getElementById('display');

// Get the button elements
const buttons = document.querySelectorAll('button');

// Define the calculator functions
const calculator = {
    displayValue: '',
    firstOperand: '',
    secondOperand: '',
    operator: '',

    // Update the display value
    updateDisplay() {
        display.value = this.displayValue;
    },

    // Clear the display value
    clearDisplay() {
        this.displayValue = '';
        this.firstOperand = '';
        this.secondOperand = '';
        this.operator = '';
        this.updateDisplay();
    },

    // Handle number button clicks
    handleNumberClick(number) {
        if (this.operator === '') {
            this.firstOperand += number;
        } else {
            this.secondOperand += number;
        }
        this.displayValue = this.firstOperand + this.operator + this.secondOperand;
        this.updateDisplay();
    },

    // Handle operator button clicks
    handleOperatorClick (operator) {
        if (this.firstOperand !== '') {
            this.operator = operator;
            this.displayValue = this.firstOperand + this.operator;
            this.updateDisplay();
        }
    },

    // Handle equal button click
    handleEqualClick() {
        if (this.firstOperand !== '' && this.secondOperand !== '') {
            const result = eval(this.firstOperand + this.operator + this.secondOperand);
            this.displayValue = result;
            this.updateDisplay();
            this.firstOperand = result;
            this.secondOperand = '';
            this.operator = '';
        }
    },

    // Handle modulo operation
    handleModulo() {
        if (this.firstOperand !== '') {
            const result = this.firstOperand % parseFloat(this.secondOperand);
            this.displayValue = result;
            this.updateDisplay();
            this.firstOperand = result;
            this.secondOperand = '';
            this.operator = '';
        }
    },

    // Handle square operation
    handleSquare() {
        if (this.firstOperand !== '') {
            const result = Math.pow(parseFloat(this.firstOperand), 2);
            this.displayValue = result;
            this.updateDisplay();
            this.firstOperand = result;
            this.secondOperand = '';
            this.operator = '';
        }
    }
};

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'ac') {
            calculator.clearDisplay();
        } else if (button.id === 'equal') {
            calculator.handleEqualClick();
        } else if (button.id === 'mod') {
            calculator.handleModulo();
        } else if (button.id === 'square') {
            calculator.handleSquare();
        } else if (['add', 'subtract', 'multiply', 'divide'].includes(button.id)) {
            calculator.handleOperatorClick(button.innerText);
        } else {
            calculator.handleNumberClick(button.innerText);
        }
    });
});