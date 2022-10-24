const inputBinaryValue = document.getElementById('input-binary-value');
const resultParagraph = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');

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

convertBtn.addEventListener('click', convertBinToDec);