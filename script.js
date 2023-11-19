let currentInput = '';
let operator = '';
let previousInput = '';

// Función para agregar un valor a la pantalla
function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

// Función para establecer el operador
function setOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

// Función para realizar el cálculo
function calculate() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    updateDisplay();
}

// Función para limpiar la pantalla
function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    
    // Mostrar el operador junto con el valor actual, si está presente
    if (operator && currentInput) {
        displayElement.value = `${previousInput} ${operator} ${currentInput}`;
    } else {
        // Mostrar solo el valor actual si no hay operador
        displayElement.value = currentInput || '';
    }
}

