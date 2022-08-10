// STORING VALUES WITH ASSSINGMENT OPERATORS

var a; //Decclaring a variable
var b = 2; //Assigning a variable
console.log(); //Prints outs

// INITIALIZING VARIABLES WITH ASSINGMENT OPERATOR

var a = 10; // = is the assingment operator, while =10 means initializing it

// CASE SENSITIVITY IN VARIABLES

var studlyCapVar = 10; // Always use the Camel Case method

// ADDING NUMBERS

var sum = 10 +10;
console.log(sum);

// SUBTRACTING NUMBERS

var difference = 40 - 15;
console.log(difference);

// MULTIPLYING NUMBERS

var product = 5 * 30;
console.log(product);

// DIVIDING NUMBERS

var quotient = 15 / 3;
console.log(quotient);

// INCREMENTING NUMBERS 

var myVar = 5;
myVar ++;
console.log(myVar);

// DECREMENTING NUMBERS

var myVar = 10;
myVar --;
console.log(myVar);

// MULTIPLYING DECIMAL NUMBERS 

var product = 2.2 * 2.3;
console.log(product);

// DIVIDING DECIMALS

var quotient = 4.2 / 2.0;
console.log(quotient);

// FINDING A REMAINDER (always used to determine if a number is even or odd)

var remainder = 11 % 3;
console.log(remainder);

// COMPOUND ASSIGNMENT WITH AUGUMENTED ADDITION

var a = 3;
var b = 5;
var c = 7;

a += 5; // MEANS a = a + 5;
b += 3; // MEANS b = b + 3;
c += 7; // MEANS c = c + 7;

// COMPOUND ASSINGMENT WITH AUGUMENTED SUBTRACTION

var a = 11;
var b = 9;
var c = 3;

a -= 6 // MEANS a = a - 6;
b -= 15 // MEANS b = b - 15;
c -= 1 // MEANS c = c - 1;

// COMPOUND ASSINGMENT WITH AUGUMENTED MULTIPLICATION

var a = 5;
var b = 12;
var c = 4.6;

a *= 5; // MEANS a = a * 5;
b *= 3; // MEANS b = b * 3;
c *= 10; // MEANS c = c * 10;

// COMPOUND ASSINGMENT WITH AUGUMENTED DIVISION

var a = 48;
var b = 108;
var c = 33;

a /= 12; // MEANS a = a / 12;
b /= 2; // MEANS b = b / 2;
c /= 11; // MEANS c = c / 11;

// DECLARE STRING VARIABLES 

var firstName = "Ayomide";
var lastName = "Alake";

// ESCAPING LITERAL QUOTES IN STRINGS

/*Adding a back slash before each quotes skips the quote*/
var myStr = "i am a \"double quote\" inside the text"

console.log(myStr);

// FIND THE LENGHT OF A STRING;

var firstName = "Ayomide";
var firstName = firstName.length;

// BRAKET NOTATION TO FIND A SPECIFIC CHARACTER IN A STRING

var firstName = "Ayomide";
firstName = firstName[0];
// bracket notation to find the last letter in a string 
var lastName = "Alake";
lastName = lastName[lastName.length -1];

// WORD BLANKS

function wordBlanks(myNoun, myAdjective,  myVerb, myAdverb)
{
    var result = "";

    result += "The"+" "+myAdjective+" "+myNoun+" "+myVerb+" "+"to the store"+" "+myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

// STORE MULTIPLE VALUES WITH ARRAYS

/*Arrays allow you to store several types of data in one place*/
var ourArray = ["John", 23];
/*Nested array means you are having an array in another*/
var myArray = [["John", 23], ["Quincy",46]];
// Access array data with indexes
var myArray = [50,70,100];
var myData = myArray [0];
// Modify array data with indexes
var myArray = [10,20,30,40,50]
myArray [0] = 70;
// Access Nested array with indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray [2][1];
// Manipulate arrays with Push() which adds to the last of an array
var myArray = ["John", "J", "cat"];
myArray.push(["happy", "Joy"]);
// Manipulate arrays with Pop() which deletes the last of an array
var myArray = ["John", 26, "cat"]
myArray.pop();
// Manipulates arrays with Shift() which deletes the first in an array
var myArray = ["John", "J", "cat"];
myArray.shift();
// Manipulates arrays with Unshift() which adds to the first in an array
var myArray = ["John", "J", "cat"];
myArray.unshift("Ayomide");

// SHOPPING LIST

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2],];

// WRITE RE-USABLE CODE WITH FUNCTION 

function ourReusableCode(){
    console.log("Hello World !");
    
// Anytime you need Hello World!, just call the function
}

// PASSING VALUES TO FUNCTION WITH ARGUEMENTS

function ourFunctionWithArguements(a,b) {
    console.log(a - b);
}
ourFunctionWithArguements(10,5);

// RETURN A VALUE FROM A FUNCTION WITH RETURN 

function minusSeven (num) {
    return num -7;
}
console.log(minusSeven(10));

// UNDERSTANDING UNDEFINED VALUE RETAIN FROM A FUNCTION

var sum = 0;
function addThree() {
    sum = sum + 3;
}

// ASSIGNMENT WITH A RETURNED VALUE

var sum = 0;
function change (num){
    return (num + 5) / 3;
}
var changed = change (10);

// STAND IN LINE 

function nextInLine (arr, item) {
    arr.push(item);
    return arr.shift()
}
var testArray = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArray))
console.log(nextInLine (testArray, 6));
console.log ("Array: " + JSON.stringify(testArray));

// BOOLEAN VALUES

function welcomeToBooleans() {
    return false;
}

// USING CONDITIONAL LOGIC WITH IF STATEMENT

function trueOrFalse (wasThatTrue){
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

// COMPARISON WITH THE LOGICAL AND OPERATOR

function testGreaterThan (val) {
    if (val > 100) {
        return "over 100";
    }
    if (val > 10) {
        return "over 10";
    }
    return "10 or under";
}
console.log(testGreaterThan());

// CHECKING WITH TWO CONDITIONS

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

// COMPARISON WITH LOGICAL OR 

function testLogicalOr (val) {
    if (val < 10 || val > 20) {
        return "Outside";

    }

    return "Inside";
}

// ELSE STATEMENT

function testElse (val){
    var result = "";
    
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or smaller";
    }
    return result;
}

// ELSE IF STATEMENT

function testElseIf (val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5){
        return "smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}

/* Write chained if/else Statement to fufil the following conditions
 n < 5 return "Tiny"
 n < 10 return "Small"
 n < 15 return "Medium"
 n <20 return "Large"
 n >= 20 return "Huge"
*/

function testSize (num) {
    if (num < 5){
        return "Tiny"
    }
    else if (num < 10){
        return "Small"
    }
    else if (num < 15){
        return "Medium"
    }
    else if (num < 20){
        return "Large"
    }
    else {
        return "Huge"
        }
    }
    console.log(testSize());

// SWITCH STATEMENTS

/* Write a switch statement which tests val and sets answer for the following conditions 
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

function caseInSwitch (val){
var answer = "";
switch (val) {
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;
}
return answer;
}

 // RETURN BOOLEAN VALUES FROM FUNCTIONS 

 function isLess (a, b) {
    if (a < b){
        return true;
    }
    else {
        return false;
    }
 }