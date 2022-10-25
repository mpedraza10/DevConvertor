// Variables
const inputBinaryValue = document.getElementById('input-binary-value');
const resultParagraph = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');

// Funciton that converts a binary number to a decimal number
const convertBinToDec = (event) => {
    event.preventDefault();
    const binaryNum = inputBinaryValue.value;
    
    let result = 0;
    const lastIndex = binaryNum.length - 1 
    for (let i = lastIndex; i >= 0; i--) {        
        let currentDigit = parseInt(binaryNum[lastIndex - i]);        
        result += Math.pow(2, i) * currentDigit;        
    }

    resultParagraph.textContent = result;
}

// Event listeners

// Makes the convesion of binary to decimal
convertBtn.addEventListener('click', convertBinToDec);

// Checks that only 1 or 0 is entered
inputBinaryValue.addEventListener('keyup', (event) => {        
    if (event.key != 1 && event.key != 0) {                
        event.target.value = event.target.value.slice(0, -1);        
    }
});