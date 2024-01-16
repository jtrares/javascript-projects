//Part Three section one
const language = "JavaScript";

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let str = language.slice(0, 1);
let strTwo = language.slice(4, 5);
console.log(str + strTwo);

//2. Without using slice(), use method chaining to accomplish the same thing.
language.split("").toSpliced(1, 3).toSpliced(2, 5);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initials = "JS";
console.log(`The abrreviation for '${language}' is '${initials}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let fun = "Tacos are life!"
let newFun = fun.repeat(4).replace('are', 'equal').repeat(3);
console.log(newFun);

//Part Three section Two
//1. Use the string methods you know to print 'Title Case' from the string 'title case'.
let notTitleCase = "title case";
let titleCase = notTitleCase.replace('t', 'T').replace('c', 'C')
console.log(titleCase);