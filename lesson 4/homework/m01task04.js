// Task04 - Write a code that returns string converted from 3 inputted digits
// Don't use a separators in string
// first, second and third are inputed values 
// For example: 
// Inputed value are 2, 5 and 7
// You should return a next string - "257"

function task04(first, second, third) {
    let f = first.toString(),
        s = second.toString(),
        t = third.toString();
    let sum = f + s + t;
    return sum;
    // TODO: Write your code here
}
console.log(task04(3,5,8));
