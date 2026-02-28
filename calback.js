function calculator(a, b, callback) {
    return callback(a, b);
}   
function add(a, b) {
    return a + b;
}                           

function subtract(a, b) {
    return a - b;
}
console.log(calculator(10, 5, add)); 
console.log(calculator(10, 5, subtract));