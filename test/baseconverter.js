const {StackObject}=require('./stack')


function baseConverter(decNumber, base) {
    const remStack = new StackObject();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
    return '';
    } 
    while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
    } 
    while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {7}
    } 
    return baseString;
}

let bin=baseConverter(10,8);

console.log(bin);