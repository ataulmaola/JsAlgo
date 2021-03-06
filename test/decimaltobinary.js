const {StackObject}=require('../lib/stack/stackObject')


function decimalToBinary(decNumber) {
    const remStack = new StackObject();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) {
    rem = Math.floor(number % 2); 
    remStack.push(rem);
    number = Math.floor(number / 2); 
    } 
    while (!remStack.isEmpty()) { 
    binaryString += remStack.pop().toString();
    } 
    return binaryString;
}

