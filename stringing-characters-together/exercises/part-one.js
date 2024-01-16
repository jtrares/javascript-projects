let num = 1001;
 
//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
str = num.toString();
len = str.length; 
console.log(len)

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//Modify your code to print out the length of a decimal value EXCLUDING the period.
//var value = 192.123123; stringValue = value.toString(); length = stringValue.split('.')[1].length;
num = 123.45;
str = num.toString();
let len = str.length
if (str.includes('.')) {
    len = str.length -1
}
console.log(len)

//Experiment! What if num could be EITHER an integer or a decimal?  
//Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')) {
    console.log(String(num).length - 1);
} else {
    console.log(String(num).length);
}