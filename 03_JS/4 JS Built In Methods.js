/*

String Methods--------------------------------------------------------------------------------------
String length: Returns the length of the string.
str.length;

String charAt(index): Returns the character at the specified index.
str.charAt(index);

String charCodeAt(index): Returns the Unicode value of the character at the specified index.
str.charCodeAt(index);

String at(): Get the third letter of name:
const name = "W3Schools";
let letter = name.at(2);


String [ ]: Accesses the character at the specified index.
str[index];

String slice(start, end): Extracts a section of a string and returns it as a new string.
str.slice(start, end);
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // Banana
// If a parameter is negative, the position is counted from the end of the string:
let part = text.slice(-12)
let part = text.slice(-12, -6);


String substring(start, end): Extracts characters from a string between two specified indices.
str.substring(start, end);
// it doesn't take negative value - it will convert negative values to 0

String substr(start, length): Returns the characters in a string beginning at the specified location through the specified number of characters.
str.substr(start, length);
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); // Banana
// If the first parameter is negative, the position counts from the end of the string.
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);// Kiwi


String toUpperCase(): Converts a string to uppercase letters.
str.toUpperCase();

String toLowerCase(): Converts a string to lowercase letters.
str.toLowerCase();

String concat(string2): Combines two or more strings and returns a new string.
str.concat(string2);
text1.concat(" ", text2, " Anil");

String trim(): Removes whitespace from both ends of a string.
str.trim();

String trimStart(): Removes whitespace from the beginning of a string.
str.trimStart();

String trimEnd(): Removes whitespace from the end of a string.
str.trimEnd();

String padStart(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length.
str.padStart(targetLength, padString);
let text = "5";
let padded = text.padStart(4,"0"); // 0005

String padEnd(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length.
str.padEnd(targetLength, padString);
let text = "5";
let padded = text.padStart(4,"0"); // 5000


String repeat(count): Returns a new string with a specified number of copies of the string it was called on.
str.repeat(count);
let text = "Hello world!";
let result = text.repeat(2); // Hello world!Hello world!

String replace(searchValue, replaceValue): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
str.replace(searchValue, replaceValue);
// The replace() method returns a new string.
// The replace() method replaces only the first match


String replaceAll(): Replaces all occurrences of a specified value with another value.
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");


String split(separator): Splits a string into an array of substrings based on a specified separator string.
str.split(separator);
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
text.split("")      // Split every text



--------String Search------------------------------
String indexOf()
# The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); // 7



String lastIndexOf()
# The lastIndexOf() method returns the index of the last occurrence of a specified text in a string: return -1 if not found
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate"); // 21



String search()
# The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let text = "Please locate where 'locate' occurs!";
text.search("locate"); // 7
# The search() method cannot take a second start position argument.
# The indexOf() method cannot take powerful search values (regular expressions).


String match()
# The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");


String matchAll()
# The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
Array.from(iterator); // Cats,Cats


String includes()
The includes() method returns true if a string contains a specified value.
let text = "Hello world, welcome to the universe.";
text.includes("world"); // true

Check if a string includes "world". Start at position 12:
text.includes("world", 12); // false

String startsWith()
# The startsWith() method returns true if a string begins with a specified value.
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello"); // true
# A start position for the search can be specified:
text.startsWith("world", 5) // false

String endsWith()
# The endsWith() method returns true if a string ends with a specified value.
let text = "John Doe";
text.endsWith("Doe");
# Check if the 11 first characters of a string ends with "world":
text.endsWith("world", 11);



-------------------------------------------------------------------
Number Methods
1. JavaScript Number Methods
    toString()	Returns a number as a string
    toExponential()	Returns a number written in exponential notation
    toFixed()	Returns a number written with a number of decimals
    toPrecision()	Returns a number written with a specified length
    valueOf()	Returns a number as a number

    // Example of toString()
    let num = 123;
    let str = num.toString(); // Converts the number to a string
    console.log(str); // Output: "123"

    // Example of toExponential()
    let num = 123456;
    let exp = num.toExponential(); // Converts the number to exponential notation
    console.log(exp); // Output: "1.23456e+5"
    let num1 = 2;
    console.log(num.toExponential(2)) // 4

    // Example of toFixed()
    let num = 123.456;
    let fixed = num.toFixed(2); // Formats the number with 2 digits after the decimal point
    let fixed1 = num.toFixed(3); // Formats the number with 3 digits after the decimal point
    console.log(fixed); // Output: "123.46"
    console.log(fixed1); // Output: "123.456"

    // Example of toPrecision()
    let num = 123.456;
    let precise = num.toPrecision(4); // Formats the number with a total length of 4 digits
    let precise1 = num.toPrecision(5); // Formats the number with a total length of 4 digits
    console.log(precise); // Output: "123.5"
    console.log(precise1); // Output: "123.45"

    // Example of valueOf()
    let num = new Number(42);
    let val = num.valueOf(); // Returns the primitive value of the number
    console.log(val); // Output: 42


2. Converting Variables to Numbers
    // Example of Number()
    let str = "123";
    let num = Number(str); // Converts the string to a number
    console.log(num); // Output: 123

    // Example of parseFloat()
    let str = "3.14";
    let floatNum = parseFloat(str); // Parses the string to a floating-point number
    console.log(floatNum); // Output: 3.14
    parseFloat("10 years"); // 10
    parseFloat("years 10"); // NaN

    // Example of parseInt()
    let str = "42";
    let intNum = parseInt(str); // Parses the string to an integer
    console.log(intNum); // Output: 42
    // Only the first number is returned:
    parseInt("years 10"); // NaN
    parseInt("10 20 30"); // 10

3. Number Object Methods
    Number.isInteger()	Returns true if the argument is an integer
    Number.isInteger(10); // true
    Number.isInteger(10.5); // false


    Number.isSafeInteger()	Returns true if the argument is a safe integer
    // Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
    Number.isSafeInteger(10); // true
    Number.isSafeInteger(12345678901234567890); // false


    str.parseFloat()	Converts a string to a number
    str.parseInt()	Converts a string to a whole number





----------------------------------------------------------
Array Methods
Array length: Returns the number of elements in an array.
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5


Array toString(): Converts the elements of an array to strings and concatenates them into a single string.
let arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3"


Array at(): Not a standard method in JavaScript.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2); // Apple



Array join(): Joins all elements of an array into a single string using a specified separator.
let arr = ["apple", "banana", "orange"];
console.log(arr.join(", ")); // Output: "apple, banana, orange"


Array pop(): Removes the last element from an array and returns that element.
let arr = [1, 2, 3];
let removedElement = arr.pop();
console.log(arr); // Output: [1, 2]
console.log(removedElement); // Output: 3


Array push(): Adds one or more elements to the end of an array and returns the new length of the array.
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]


Array shift(): Removes the first element from an array and returns that element.
let arr = [1, 2, 3];
let removedElement = arr.shift();
console.log(arr); // Output: [2, 3]
console.log(removedElement); // Output: 1


Array unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
let arr = [2, 3];
arr.unshift(0, 1);
console.log(arr); // Output: [0, 1, 2, 3]


Array delete(): 
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];


Array concat(): Returns a new array that is a concatenation of two or more arrays.
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4]
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);


Array copyWithin(): Copies a sequence of elements within the array to the target index.
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 5);
console.log(arr); // Output: [4, 5, 3, 4, 5]
// Copy to index 2, all elements from index 0:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); // ]"Banana", "Orange"]
// Copy to index 2, the elements from index 0 to 2:
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2); // Banana,Orange,Banana,Orange,Kiwi,Papaya


Array flat(): Flattens nested arrays recursively up to the specified depth.
let arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // Output: [1, 2, 3, 4]
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

Array splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(where to put, how many delete, what all to put);
fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.


Array toSpliced(): The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array


Array slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end.
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4);
console.log(newArr); // Output: [2, 3, 4]
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // Orange,Lemon,Apple,Mango
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // Orange,Lemon




--------------------------
Array Methods
Array indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // Output: 2
console.log(arr.indexOf(6)); // Output: -1


Array lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
let arr = [1, 2, 3, 4, 3];
console.log(arr.lastIndexOf(3)); // Output: 4
console.log(arr.lastIndexOf(6)); // Output: -1


Array includes(): Determines whether an array includes a certain value among its elements, returning true or false as appropriate.
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // Output: true
console.log(arr.includes(6)); // Output: false


Array find(): Returns the first element in the array that satisfies the provided testing function, or undefined if no such element is found.
let arr = [1, 2, 3, 4, 5];
let found = arr.find(element => element > 3);
console.log(found); // Output: 4
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18; // 25 which is first number found
}


Array findIndex(): Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no such element is found.
let arr = [1, 2, 3, 4, 5];
let foundIndex = arr.findIndex(element => element > 3);
console.log(foundIndex); // Output: 3


JavaScript Array findLast() Method
// ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);


JavaScript Array findLastIndex() Method
// The findLastIndex() method finds the index of the last element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);


----------------------SORTING----------------------------------
Alpabetic Sort
Array sort()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();


Array reverse()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();


Array toSorted(): return new array;
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

Array toReversed(): return new array
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();


Sorting Objects
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});

Numeric Sort
Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // ascending
points.sort(function(a, b){return b - a}); // decending

Random Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});


Math.min()
You can use Math.min.apply to find the lowest number in an array:
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}


Math.max()
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}


-----------Array Iteration-------------------------------
Array forEach
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array_itself) {
  txt += value + "<br>";
}
function myFunction(value) { // simple
    txt += value + "<br>";
  }


Array map(): creates a new array
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
}
function myFunction(value) {
    return value * 2;
  }


Array flatMap(): first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2); // 2,4,6,8,10,12

Array filter() // method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
function myFunction(value) {
    return value > 18;
}


Array reduce(): // works from left-to-right
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) { // total = previously returned value
  return total + value;
}
function myFunction(total, value) {
    return total + value;
}


Array reduceRight(): // works from right-to-left

Array every(): //checks if all array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);
function myFunction(value, index, array) {
  return value > 18; // true or false
}
function myFunction(value) {
    return value > 18; // true or false
}



Array some(): method checks if some array values pass a test.

Array from(): returns an Array object from any object with a length property or any iterable object.
let arr = Array.from("ABCDEFG"); 


Array keys()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for (let x of keys) {
  text += x + "<br>"; // 0 1 2 3
}


Array entries(): // Create an Array Iterator, and then iterate over the key/value pairs:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
  document.getElementById("demo").innerHTML += x;
//   0,Banana
// 1,Orange
// 2,Apple
// 3,Mango
}


Array with() : // method as a safe way to update elements in an array without altering the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");


Array Spread (...) : // The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]; // Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May


---------MATH-------------------------------
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6) // 4.8 - remove decimal part = 4
Math.pow(x, y)
Math.sqrt(x)
Math.abs(x) returns the absolute (positive) value of x:
Math.min()
Math.max()
Math.random()

Math.sign(-4); // -1
Math.sign(0); // 0
Math.sign(4); // 1

Infinity





--------------------------------------------------

*/