// Addition Operator + add করে

let a = 5;
let b = 2;
let c = a + b;

console.log(c);

// Assignment Operator = একটা variable এর value assign করে

// Assign the value 5 to x
let x = 5;

//  ================== Type Operators ===========================
// 1 Arithmetic Operators
// 2 Assignment Operators
// 3 Comparison Operators
// 4 String Operators
// 5 Logical Operators
// 6 Bitwise Operators
// 7 Ternary Operators

/* 
There are different types of JavaScript operators:

1 =========== Arithmetic Operators=================
var additionOutput = 2 + 2; //addition
var subtractionOutput = 2 - 2; //subtraction
var multiplcationOutput = 2 * 2; //multiplcation
var divisionOutput = 2 / 2; //division
var exponentiation = 2**2; // Exponentiation
var modulus = 5 % 2; // Modulus (Remainder)
var unaryOperator = 1;  -----------------------------------------------------?
++unaryOperator; // Unary Operator Increment // ++ , --

==============================================
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2  x >> 3      // minary shifting 
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal
a !== b             // strict unequal
a < b   a > b       // less and greater than
a <= b  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or




2 ============ Assignment Operators ==============

Operator	Name	Example
=	Assignment operator	a = 7; // 7
+=	Addition assignment	a += 5; // a = a + 5
-=	Subtraction Assignment	a -= 2; // a = a - 2
*=	Multiplication Assignment	a *= 3; // a = a * 3
/=	Division Assignment	a /= 2; // a = a / 2
%=	Remainder Assignment	a %= 2; // a = a % 2
**=	Exponentiation Assignment	a **= 2; // a = a**2

x = 13 //Assigns value 13 to x
x += 13 // x = x + 13
x -= 13 // x = x - 13
x *= 13 // x = x * 13
x /= 13 // x = x / 13
x %= 13 // x = x % 13
x **= 13 // x = x ** 13

3 ===========  Comparison Operators ============

Javascript Comparison Operators
== Equal to
=== Equal value and equal type
!= Not equal
!== Not equal value or not equal type
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
? Ternary operator



Operator	Description	Example ========

==	Equal to: returns true if the operands are equal	x == y
!=	Not equal to: returns true if the operands are not equal	x != y
===	Strict equal to: true if the operands are equal and of the same type	x === y
!==	Strict not equal to: true if the operands are equal but of different type or not equal at all	x !== y
>	Greater than: true if left operand is greater than the right operand	x > y
>=	Greater than or equal to: true if left operand is greater than or equal to the right operand	x >= y
<	Less than: true if the left operand is less than the right operand	x < y
<=	Less than or equal to: true if the left operand is less than or equal to the right operand	x <= y


4 =============== String Operators ============================

// concatenation operator
console.log('hello' + 'world');

let a = 'JavaScript';
a += ' tutorial';  // a = a + ' tutorial';
console.log(a);


5 =============== Logical Operators ===============================

var a = 2;
var b = 5;
var c = 10;

if (a === 3 || a === 2) {
	console.log("TRUE");
} else {console.log("FALSE");}
if (a === 4 || b === 3 || c === 11) {
	console.log("TRUE");
} else {console.log("FALSE");}
if (b === 5 || c != 10) {
	console.log("TRUE");
} else {console.log("FALSE");}

/* Output:
TRUE
FALSE
TRUE
*


const num = 6;
if (num <= 7 && num <= 8) {
    console.log('true')
} else {
    console.log('false')
}
//Expected output:true



6 ================= Bitwise Operators ==================

Javascript Bitwise Operators
& AND statement
| OR statement
~ NOT
^ XOR
<< Left shift
>> Right shift
>>> Zero fill right shift

Operator	Description
&	Bitwise AND
|	Bitwise OR
^	Bitwise XOR
~	Bitwise NOT
<<	Left shift
>>	Sign-propagating right shift
>>>	Zero-fill right shift




7 ================= Ternary Operators ====================
condition ? doThisIfTrue : doThisIfFalse

1 > 2 ? console.log(true) : console.log(false)


FullName: (obj.FirstName && obj.LastName) ? obj.FirstName + " " + obj.LastName : "missing values",






 */

let text1 = "5456870";
let text2 = "55000";
let result = text1 < text2;

// এভাবে ও concanet করা যায়

var texts = "What a very ";
texts += "nice day";

console.log(texts);
