// Task06 - Write a code that returns number - result of sum 3 numbers:
// -- first should be extracted from String, second - should be Boolean.
// For example, "10" and true - as a result you get 11 
// or "2long" and true give you 3.

function task06(string, boolean) {
    // TODO: Write your code here
    let fN = parseFloat(string),
        sN = boolean;
    sN ? sN = 1 : sN = 2;
    let sum  = fN + sN;
    return (sum);
}
console.log(task06("2long",true))