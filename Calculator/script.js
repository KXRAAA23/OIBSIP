const output = document.getElementById('output');

let currentInput = '';
let previousInput = '';
let operator = '';
let shouldResetScreen = false;

function updateDisplay() {
    output.textContent = currentInput;
}

function clear() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    shouldResetScreen = false;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') currentInput = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function chooseOperator(op) {
    if (operator !== '') evaluate();
    previousInput = currentInput;
    operator = op;
    shouldResetScreen = true;
}

function evaluate() {
    if (operator === '' || shouldResetScreen) return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("You can't divide by 0!");
                clear();
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    shouldResetScreen = true;
    updateDisplay();
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            appendNumber(value);
        } else if (value === 'AC') {
            clear();
        } else if (value === 'C') {
            deleteLast();
        } else if (value === '=') {
            evaluate();
        } else {
            chooseOperator(value);
        }
    });
});

updateDisplay();
