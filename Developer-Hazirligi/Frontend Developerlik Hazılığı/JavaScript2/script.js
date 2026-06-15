let qiymet = 35;
console.log(qiymet);
let ad = 'koynek';
console.log(ad);
let anbarda = true;
console.log(anbarda);
let qiymet1 = 36,
    ad1 = 'koynek2',
    anbarda1 = false;
console.log(qiymet1, ad1, anbarda1);
let 1car = 'bmw'
let car1 = 'bmw'
let ca r1 = 'bmw'
let car, r1 = 'bmw'
console.log(r1);
let let = 5;
let var = 5;
let uninitilalized;
console.log(uninitilalized);
console.log(console.log(uninitilalized));
const monthInYear = 12;
monthInYear = 16;
const fingersinHand;
const fingersinHand = 5;
const fingerinHand = 5;
fingerinHand

let variableWithLet = 55;

console.log('deyisenin deyeri', variableWithLet);

var variableWithVar;

console.log('deyisenin deyeri', variableWithVar);

var variableWithVar = 77;

/* Rest */

function printNames(school, ...allNames) {
    allNames.forEach(name => console.log(name));
};
printNames('ADNA', 'Ali', 'Veli', 'Mammad');

function printNames(...allNames) {
    allNames.forEach(name => console.log(name));
};
printNames('ADNA', 'Ali', 'Veli', 'Mammad');

function printNames(...allNames, scool) {
    allNames.forEach(name => console.log(name));
}
printNames('ADNA', 'Ali', 'Veli', 'Mammad');

/* Array Destructure */
let names = ['Ali', 'Veli', 'Mammad'];
let [name1, name2, name3] = names;
console.log(name1, name2, name3);

let names2 = ['Ali', 'Veli', 'Mammad'];
let [name4, ...remainingNames] = names2;

console.log(names2);

let names3 = ['Suleiman', 'Nariman', 'Aykhan'];
let [, ...remainingNames2] = names3;

console.log(names3);

let names4 = ['Aysel', 'Gulsum', 'Xedice'];
let [name5, ...remainingNames3] = names4;

console.log(names4);

let names7 = ['Gozel', 'Sirin', 'Balaca'];
let [...remainingNames6] = names7;

console.log(remainingNames6);

let names5 = ['Gozel', 'Sirin', 'Balaca'];
let [, ...remainingNames4] = names5;

console.log(remainingNames4);

let names6 = ['Gozel', 'Sirin', 'Balaca'];
let [, , ...remainingNames5] = names6;

console.log(remainingNames5);

let person = { age: 22, name: 'Suleiman' };
let { age, name } = person;
console.log(name, age);

let person1 = { age: 22, name: 'Suleiman' };
let age1, name10;
({ age, name } = person);
console.log(name, age);

function printNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}
let names8 = ['Axmaq', 'Deli', 'Sey'];
printNames(...names8);

function printNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}
let names9 = ['Axmaq', 'Deli', 'Sey', 'Suleiman'];
printNames(...names9);

function printNames(name1, name2, name3, name4) {
    console.log(name1, name2, name3, name4);
}
let names10 = ['Axmaq', 'Deli', 'Sey', 'Suleiman'];
printNames(...names10);

function printNames(name1, ...restNames) {
    console.log(name1, restNames);
}
let names11 = ['Axmaq', 'Deli', 'Sey', 'Suleiman'];
printNames(...names11);

function printNames(name1, ...restNames) {
    console.log(name1);
    console.log(restNames);
}
let names12 = ['Axmaq', 'Deli', 'Sey', 'Suleiman'];
printNames(...names12);

'hell ' / 3;
typeof ('hello' / 3);

typeof (NaN);
typeof (() => { });
let funcAdd = function (a, b) { return a + b }
typeof funcAdd

let text = `Hello
world`;

if (speed > 100) {
    console.log('He is driving crazy');
} else if (speed > 60) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}

price = 20;
let message = (price > 100) ? 'expensive' : 'cheap';
console.log(message);

let count = 1;

while (count < 4) {
    console.log(count);
    count++;
}

let person = { age: 25, name: 'David' };
let age, name;
{ age, name } = person;
console.log(name, age);

let person = { age: 25, name: 'David' };
let age, name;
({ age, name } = person;)
console.log(name, age);

function printNames(name1, ...restNames) {
    console.log(name1);
    console.log(restNmes);
}

let speed = 100;
let result = 'normal';
if( speed > 60) {
    result = 'fast'
}

console.log('He is driving ', result);

if (speed > 100) {
    console.log('He is driving crazy');
} else if (speed > 60 ) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}

const monthInYear = 12;
undefined
monthInYear = 16;
VM137:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:13
(anonymous) @ VM137:1
const fingersInHand;
VM179:1 Uncaught SyntaxError: Missing initializer in const declaration
const = fingersInHand = 5;
VM236:1 Uncaught SyntaxError: Unexpected token '='
const fingerInHand = 5;
undefined
fingerInHand
5
const fingersInHand = 5;
undefined
fingersInHand
5
function printNames ( school, ...allNames ) {
    allNames.forEach( name => console.log(name) );
};
undefined
printNames( 'ADNA', 'Ali','Veli','Mammad' );
VM625:2 Ali
VM625:2 Veli
VM625:2 Mammad
undefined
function printNames (...allNames ) {
    allNames.forEach( name => console.log(name) );
};
undefined
printNames( 'ADNA', 'Ali','Veli','Mammad' );
VM820:2 ADNA
VM820:2 Ali
VM820:2 Veli
VM820:2 Mammad
undefined
function printNames (...allNames, school ) {
    allNames.forEach( name => console.log(name) );
};
VM852:1 Uncaught SyntaxError: Rest parameter must be last formal parameter
printNames( 'ADNA', 'Ali','Veli','Mammad' );
VM820:2 ADNA
VM820:2 Ali
VM820:2 Veli
VM820:2 Mammad
undefined
let names = [ 'Ali', 'Veli', 'Mammad' ];
undefined
let [name1,name2,name3]=names;
undefined
console.log(name1,name2,name3)
VM1105:1 Ali Veli Mammad
undefined
let [name1, ...remainingNames]=names;
undefined
console.log(name1,remainingNames)
VM1257:1 Ali (2) ['Veli', 'Mammad']
undefined
let [, ...remainingNames]=names;
undefined
console.log(remainingNames)
VM1417:1 (2) ['Veli', 'Mammad']
undefined
let [,, ...remainingNames]=names;
undefined
console.log(remainingNames)
VM1456:1 ['Mammad']
undefined
let person = { age: 25, name: 'David' };
undefined
let { age, name } = person;
undefined
console.log(name, age);
VM1766:1 David 25
undefined
let person = { age: 25, name: 'David' };
let age, name;
{ age, name } = person;
console.log(name, age);
VM1780:3 Uncaught SyntaxError: Unexpected token '='
let person = { age: 25, name: 'David' };
let age, name;
({ age, name } = person);
console.log(name, age);
VM1840:4 David 25
undefined
function printNames(name1,name2,name3) {
    console.log(name1,name2,name3);
}
undefined
let names = [ 'Ali','Veli','Mammad'];
undefined
printNames( ...names );
VM2066:2 Ali Veli Mammad
undefined
let names = [ 'Ali','Veli','Mammad', 'Suleiman'];
undefined
printNames(...names);
VM2066:2 Ali Veli Mammad
undefined
function printNames(name1,name2,name3,name4) {
    console.log(name1,name2,name3,name4);
}
undefined
printNames(...names);
VM2353:2 Ali Veli Mammad Suleiman
undefined
function printNames(name1, ...restNames) {
    console.log(name1, restNames);
}
undefined
printNames(...names);
VM2549:2 Ali (3) ['Veli', 'Mammad', 'Suleiman']0: "Veli"1: "Mammad"2: "Suleiman"length: 3[[Prototype]]: Array(0)
undefined
function printNames(name1, ...restNames) {
    console.log(name1);
}
undefined
printNames(...names);
VM2583:2 Ali
undefined
function printNames(name1, ...restNames) {
    console.log(name1);
}
undefined
function printNames(name1, ...restNames) {
    console.log(name1);
    console.log(restNmes);
}
undefined
printNames(...names);
VM2616:2 Ali
VM2616:3 Uncaught ReferenceError: restNmes is not defined
    at printNames (<anonymous>:3:17)
    at <anonymous>:1:1
printNames @ VM2616:3
(anonymous) @ VM2624:1
function printNames(name1, ...restNames) {
    console.log(name1);
    console.log(restNmes);
}
undefined
let names = [ 'Ali','Veli','Mammad', 'Suleiman'];
undefined
printNames(...names);
VM2630:2 Ali
VM2630:3 Uncaught ReferenceError: restNmes is not defined
    at printNames (<anonymous>:3:17)
    at <anonymous>:1:1
printNames @ VM2630:3
(anonymous) @ VM2708:1
'hello ' /3
NaN
typeof('hello ' /3);
'number'
typeof(NaN)
'number'
typeof(() => {});
'function'
let funcAdd = function (a,b) {
    return a+b;}
undefined
typeof funcAdd
'function'
let age;
undefined
typeof age
'undefined'
let age = null
undefined
typeoof age
VM3098:1 Uncaught SyntaxError: Unexpected identifier 'age'
typeof age
'object'
let person { name: 'Suleiman', age: 22};
VM3191:1 Uncaught SyntaxError: Unexpected token '{'
typeof person;
'object'
let person =  { name: 'Suleiman', age: 22};
undefined
typeof person;
'object'
let age
undefined
age = 23;
23
age = 20 +5;
25
age = 20 - 7;
13
age = age + 11
24
age / 2
12
age * 3
72
age
24
age % 10
4
age += 5
29
age -= 10;
19
age++
19
age
20
age
20
console.log(++age)
VM3698:1 21
undefined
console.log(age++)
VM3727:1 21
undefined
age
22
--age
21
age--
21
let price = 12.45;
undefined
price = price + 4;
16.45
price = price - 4;
12.45
price = 1.3 + 1;
2.3
price = 1 +1.1;
2.1
price = 1.3 + 1.1
2.4000000000000004
price = 0.1*0.2
0.020000000000000004
let text = 'Helo world';
undefined
console.log(text)
VM4195:1 Helo world
undefined
let text = "Hello World";
undefined
console.log(text)
VM4312:1 Hello World
undefined
let text = "Hello \ 'World\";
VM4344:1 Uncaught SyntaxError: Invalid or unexpected token
let text = "Hello \ 'World\'";
undefined
console.log(text)
VM4410:1 Hello  'World'
undefined
let text = `Hello world`;
undefined
console.log(text)
VM4481:1 Hello world
undefined
let text = `Hello world`;
undefined
let name = 'Mammad';
undefined
let text = `Hello ${name}`;
undefined
console.log(text)
VM4756:1 Hello Mammad
undefined
let text = 'Hello ' + name;
undefined
console.log(text)
VM4853:1 Hello Mammad
undefined
text.toLowerCase()
'hello mammad'
text.toUpperCase()
'HELLO MAMMAD'
text
'Hello Mammad'
text = text.toUpperCase();
'HELLO MAMMAD'
text
'HELLO MAMMAD'
text.substr(6, 6);
'MAMMAD'
text.substr(6, 6);
'MAMMAD'
text.length
12
text
'HELLO MAMMAD'
text = text.substr(6, 6);
'MAMMAD'
text
'MAMMAD'
text.length
6
text = 'Suleiman'
'Suleiman'
text
'Suleiman'
text.length
8
text.toUpperCase()
'SULEIMAN'
text = text.toUpperCase()
'SULEIMAN'
text
'SULEIMAN'
text.lenght
undefined
text.length
8
text.substr(6,6)
'AN'
text
'SULEIMAN'
text = text.substr(6,6)
'AN'
text
'AN'
text= 'Suleiman'
'Suleiman'
text
'Suleiman'
text = text.toLowerCase()
'suleiman'
text
'suleiman'
let result;
undefined
result = 'hello' - 'bye';
NaN
typeof result
'number'
resut = 6 + undefined;
NaN
typeof result
'number'
result = Number('667');
667
typeof result
'number'
result = Number('20gr');
NaN
result = parseInt('20gr');
20
result = parseInt('h20gr');
NaN
result = parseInt('h20');
NaN
let flag = true;
undefined
flag = false;
false
!flag
true
flag = !flag;
true
let text = 'salam';
undefined
flag = !!text
true
flag = !!text;
true
!!' '
true
!!null
false
!!''
false
!!indefined
VM6380:1 Uncaught ReferenceError: indefined is not defined
    at <anonymous>:1:1
(anonymous) @ VM6380:1
!!undefined
false
!!0
false
!!1
true
!!22
true
!![]
true
!!{}
true
let price;
undefined
console.log(price);
VM6542:1 undefined
undefined
let price = 15;
undefined
price;
15
typeof price
'number'
price += 10;
25
price
25
price = null
null
console.log(price)
VM6760:1 null
undefined
price = undefined;
undefined
let name = 'Mammad';
undefined
let surname = 'Hajizadeh'
undefined
let person = {
    name: 'Suleiman',
    surname: 'Hajizadeh',
    age: 22,
}
undefined
typeof person
'object'
console.log(person)
VM7111:1 {name: 'Suleiman', surname: 'Hajizadeh', age: 22}
undefined
person.name
'Suleiman'
console.log(parseon.name, ' is ', person.age, ' years old');
VM7342:1 Uncaught ReferenceError: parseon is not defined
    at <anonymous>:1:13
(anonymous) @ VM7342:1
console.log(perseon.name, ' is ', person.age, ' years old');
VM7394:1 Uncaught ReferenceError: perseon is not defined
    at <anonymous>:1:13
(anonymous) @ VM7394:1
let name = 'Suleiman'
undefined
let surname = 'Hajizadeh';
undefined
let person = {
    name: 'Suleiman',
    surname: 'Hajizadeh',
    age: 22,
};
undefined
typeof person;
'object'
console.log(person)
VM7765:1 {name: 'Suleiman', surname: 'Hajizadeh', age: 22}
undefined
person.name
'Suleiman'
console.log(person.name, ' is ', person.age, ' years old');
VM7983:1 Suleiman  is  22  years old
undefined
if ( 5 = 5) {
    console.log('5 equals to 5');
};
VM8127:1 Uncaught SyntaxError: Invalid left-hand side in assignment
if ( 5 == 5) {
    console.log('5 equals to 5');
};
VM8138:2 5 equals to 5
undefined
if ( 5 == 6) {
    console.log('5 equals to 5');
};
undefined
if ( 5 == 5) {
    console.log('5 equals to 5');
};
VM8162:2 5 equals to 5
undefined
if ( 5 != 5) {
    console.log('5 equals to 5');
};
undefined
if ( 5 != 5) {
    console.log('5 does not equals to 5');
};
undefined
if ( 10 > 5 ) {
    console.log('YES');
}
VM8312:2 YES
undefined
if ( 10 > 10 ) {
    console.log('YES');
}
undefined
if ( 10 > 5 ) {
    console.log('YES');
}
VM8332:2 YES
undefined
let speed = 50;
undefined
let result = 'normal';
undefined
if( speed > 60 ) {
    result = 'fast'
}
undefined
console.log('He is driving ', result);
VM8641:1 He is driving  normal
undefined
let speed = 1000;
undefined
console.log('He is driving ', result);
VM8666:1 He is driving  normal
undefined
let speed = 100;
undefined
console.log('He is driving ', result);
VM8716:1 He is driving  normal
undefined
let speed = 100;
let result = 'normal';
if( speed > 60) {
    result = 'fast'
}

console.log('He is driving ', result);
VM8720:7 He is driving  fast
undefined
if (speed > 60) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM8938:2 He is driving fast
undefined
speed = 44;
44
if (speed > 60) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM8973:4 He is driving normal
undefined
speed = 100;
100
if (speed > 60) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM8997:2 He is driving fast
undefined
speed = 59;
59
if (speed > 60) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM9020:4 He is driving normal
undefined
speed = 60;
60
if (speed > 60) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM9039:4 He is driving normal
undefined
if (speed > 100) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM9053:4 He is driving normal
undefined
if (speed > 100) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM9066:4 He is driving normal
undefined
if (speed > 100) {
    console.log('He is driving crazy');
} else if (speed > 60 ) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM9070:6 He is driving normal
undefined
speed = 77;
77
if (speed > 100) {
    console.log('He is driving crazy');
} else if (speed > 60 ) {
    console.log('He is driving fast');
} else {
    console.log('He is driving normal');
}
VM9105:4 He is driving fast
undefined
if(1=='1') {
    console.log('true');
) else {
VM9225:3 Uncaught SyntaxError: Unexpected token ')'
if(1=='1') {
    console.log('true');
} else {
    console.log('false');
}
VM9426:2 true
undefined
if(1=='1') {
    console.log('true');
} else {
    console.log('false');
}
VM9436:2 true
undefined
if(1==='1') {
    console.log('true');
} else {
    console.log('false');
}
VM9448:4 false
undefined
if(1!='1') {
    console.log('true');
} else {
    console.log('false');
}
VM9467:4 false
undefined
if(1!=='1') {
    console.log('true');
} else {
    console.log('false');
}
VM9479:2 true
undefined

price = 20;
20
let message = ( price > 100) ? 'expensive', : 'cheap';
VM9695:1 Uncaught SyntaxError: Unexpected token ','
let message = ( price > 100) ? 'expensive' : 'cheap';
undefined
console.log(message)
VM9769:1 cheap
undefined
let message =  price > 100 ? 'expensive' : 'cheap';
undefined
console.log(message)
VM9822:1 cheap
undefined
price = 200;
200
let message =  price > 100 ? 'expensive' : 'cheap';
undefined
console.log(message)
VM9868:1 expensive
undefined

let var1 = 1;
undefined
let var2 = 22;
undefined
if ( var1 < 10 && var2 > 10 ) {
    console.log('Yes');
}
VM10078:2 Yes
undefined
if ( var1 < 10 && var2 > 40 ) {
    console.log('Yes');
}
undefined
if ( var1 < 10 || var2 > 40 ) {
    console.log('Yes');
}
VM10148:2 Yes
undefined
let var3 = var1 && var2;
undefined
var3
22
var 1 = null;
VM10272:1 Uncaught SyntaxError: Unexpected number
var1 = null;
null
let var3 = var1 && var2;
undefined
var3;
null
let var3 = var1 || var2;
undefined
var3;
22
var1 = 55;
55
let var3 = var1 || var2;
undefined
var3;
55

let var1 = 1;
undefined
let var2 = 22;
undefined
if ( var1 < 10 && var2 > 10 ) {
    console.log('Yes');
}
VM10078:2 Yes
undefined
if ( var1 < 10 && var2 > 40 ) {
    console.log('Yes');
}
undefined
if ( var1 < 10 || var2 > 40 ) {
    console.log('Yes');
}
VM10148:2 Yes
undefined
let var3 = var1 && var2;
undefined
var3
22
var 1 = null;
VM10272:1 Uncaught SyntaxError: Unexpected number
var1 = null;
null
let var3 = var1 && var2;
undefined
var3;
null
let var3 = var1 || var2;
undefined
var3;
22
var1 = 55;
55
let var3 = var1 || var2;
undefined
var3;
55

for (let i=0;i<=3;i--) {
    console.log(i);
}

for(let i=0; i<3;i++) {
    console.log(i);
}
VM183:2 0
VM183:2 1
VM183:2 2
undefined
for(let i=0; i<=3;i++) {
    console.log(i);
}
VM196:2 0
VM196:2 1
VM196:2 2
VM196:2 3

let i = 1;
while (i < 4) {
    console.log(i);
    i++;
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i < 4);

let count = 1;
undefined
while (count < 4) {
    console.log(count);
    count++;
}
VM350:2 1
VM350:2 2
VM350:2 3
3
while (count < 4) {
    console.log(count);
    count++;
}
undefined
let count = 1;
undefined
while (count < 4) {
    console.log(count);
    count++;
}
VM366:2 1
VM366:2 2
VM366:2 3
3
count
4
let i = 1;
undefined
while (i < 4) {
    console.log(i);
    i++;
}
VM461:2 1
VM461:2 2
VM461:2 3
3
let i = 1;
do {
    console.log(i);
    i++;
} while (i < 4);
VM486:3 1
VM486:3 2
VM486:3 3
3
let i = 5;
do {
    console.log(i);
    i++;
} while (i < 4);
VM495:3 5
5
let i = 5;
undefined
while (i<4) {
    console.log(i);
    i++;
}
undefined

function showMessage () {
    console.log("inside a function");
}
undefined
showMessage();
VM742:2 inside a function
undefined
showMessage();
VM742:2 inside a function
undefined
let fn = function () {
}
undefined
fn();
undefined
let fn = function () {
console.log("another function");
}
undefined
fn();
VM944:2 another function
undefined
let fn = function anotherFn() {
console.log("another function");
}
undefined
fn();
VM980:2 another function
undefined
anotherFn();
VM1009:1 Uncaught ReferenceError: anotherFn is not defined
    at <anonymous>:1:1
(anonymous) @ VM1009:1

function square(value) {
    let res = value*value;
    return res;
}
square();
console.log(res);

ley key = 34;
function squareKey(value) {
    let key = 1;
    let res = value*value*key;
    return res;
}
console.log(squareKey(5));
console.log("Key after function -", key);
let key = 55;

function showMessage () {
    console.log("inside a function");
}
undefined
showMessage();
VM742:2 inside a function
undefined
showMessage();
VM742:2 inside a function
undefined
let fn = function () {
}
undefined
fn();
undefined
let fn = function () {
console.log("another function");
}
undefined
fn();
VM944:2 another function
undefined
let fn = function anotherFn() {
console.log("another function");
}
undefined
fn();
VM980:2 another function
undefined
anotherFn();
VM1009:1 Uncaught ReferenceError: anotherFn is not defined
    at <anonymous>:1:1
(anonymous) @ VM1009:1
let greeting = function (name) {
    console.log("Hi,", name);
}
undefined
greeting("Suleiman");
VM1177:2 Hi, Suleiman
undefined
let greeting = function (name, title) {
    console.log("Hi,", title, name);
}
undefined
greeting("Suleiman","dr");
VM1290:2 Hi, dr Suleiman
undefined
greeting("Suleiman");
VM1290:2 Hi, undefined Suleiman
undefined
let square = function(a) {
    return a*a;
}
undefined
let res = square(5);
undefined
res
25
let logPass = function(serialNum, code="AZE") {
    console.log(code, "-", serialNum);
}
undefined
logPass(1231231);
VM1813:2 AZE - 1231231
undefined
logPass(1231231, "CZ");
VM1813:2 CZ - 1231231
undefined
let logPass = function(code="AZE", serialNum) {
    console.log(code, "-", serialNum);
}
undefined
logPass(1231231);
VM1945:2 1231231 '-' undefined
undefined
function square(value) {
    let res = value*value;
    return res;
}
VM2086:1 Uncaught SyntaxError: Identifier 'square' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM2086:1
square()
NaN
console.log(res);
VM2218:1 25
undefined
function square(value) {
    let res = value*value;
    return res;
}
square();
console.log(res);
VM2222:1 Uncaught SyntaxError: Identifier 'square' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM2222:1
let key = 34;
undefined
function squareKey(value) {
    let res = value*value;
    return res;
}
undefined
function squareKey(value) {
    let res = value*value*key;
    return res;
}
undefined
console.log(squareKey(5));
VM2494:1 850
undefined
let key = 34;
undefined
function squareKey(value) {
    let key = 1;
    let res = value*value*key;
    return res;
}
undefined
console.log(squareKey(5));
VM2799:1 25
undefined
console.log("Key after function -", key); 
VM2904:1 Key after function - 34
undefined
let key = 55;
undefined
ley key = 34;
function squareKey(value) {
    let key = 1;
    let res = value*value*key;
    return res;
}
console.log(squareKey(5));
console.log("Key after function -", key);
let key = 55;
VM2950:1 Uncaught SyntaxError: Unexpected identifier 'key'
ley key = 34;
function squareKey(value) {
    let key = 1;
    let res = value*value*key;
    return res;
}
console.log(squareKey(5));
console.log("Key after function -", key);
VM2970:1 Uncaught SyntaxError: Unexpected identifier 'key'
let key = 34;
function squareKey(value) {
    let key = 1;
    let res = value*value*key;
    return res;
}
console.log(squareKey(5));
console.log("Key after function -", key);
VM2990:7 25
VM2990:8 Key after function - 34
undefined
ley key = 34;
function squareKey(value) {
    let key = 1;
    let res = value*value*key;
    return res;
}
console.log(squareKey(5));
console.log("Key after function -", key);
let key = 55;
VM3035:1 Uncaught SyntaxError: Unexpected identifier 'key'
function () {
VM3065:1 Uncaught SyntaxError: Function statements require a function name
function () {
VM3134:1 Uncaught SyntaxError: Function statements require a function name

function () {
    console.log('inside function');
}

function () {
    console.log('inside function');
}
VM3235:1 Uncaught SyntaxError: Function statements require a function name
(function () {
    console.log('inside function');
})();
VM3349:2 inside function
undefined
function fn() {
    console.log('inside function');
}
undefined
fn()
VM3460:2 inside function
undefined

let car = (function() {
    let brand = "BMW";
    let getBrand = function() {
        return brand;
    }
    return {
        getBrand: getBrand
    };
})();
car.getBrand();
'BMW'

const person {
    firstName: "Suleiman",
    lastName: "Hajizadeh",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person = {
    firstName: "Suleiman",
    lastName: "Hajizadeh",
    fullName: function() {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
firstName: "Suleiman",
lastName: "Hajizadeh",
fullName: function() {
    return this.firstName + "" + this.lastName;
}
};
const person2 = {
    firstName: "Aysel",
    lastName: "Hajizadeh",
};

const person1 = {
    firstName: "Suleiman ",
    lastName: "Hajizadeh",
    fullName: function(title) {
        return title + " " + this.firstName + " " + this.lastName;
    }
};
const person2 = {
    firstName: "Aysel ",
    lastName: "Hajizadeh",
};

const person1 = {
    firstName: "Suleiman",
    lastName: "Hajizadeh",
    fullName: function() {
        return this.firstName + "" + this.lastName;
    }
    };
    const person2 = {
        firstName: "Aysel",
        lastName: "Hajizadeh",
    };
    undefined
    person1.fullName();
    'SuleimanHajizadeh'
    person.1.fullName.call(person2);
    VM164:1 Uncaught SyntaxError: Unexpected number
    person1.fullName.call(person2);
    'AyselHajizadeh'
    const person1 = {
    firstName: "Suleiman ",
    lastName: "Hajizadeh",
    fullName: function() {
        return this.firstName + "" + this.lastName;
    }
    };
    const person2 = {
        firstName: "Aysel ",
        lastName: "Hajizadeh",
    };
    undefined
    person1.fullName.call(person2);
    'Aysel Hajizadeh'
    person.1.fullName.call(person2);
    VM226:1 Uncaught SyntaxError: Unexpected number
    person1.fullName();
    'Suleiman Hajizadeh'
    const person1 = {
        firstName: "Suleiman ",
        lastName: "Hajizadeh",
        fullName: function(title) {
            return title + " " + this.firstName + " " + this.lastName;
        }
    };
    const person2 = {
        firstName: "Aysel ",
        lastName: "Hajizadeh",
    };
    undefined
    person1.fullName.apply(person2), ["dr"]);
    VM354:1 Uncaught SyntaxError: Unexpected token ')'
    const person1 = {
        firstName: "Suleiman ",
        lastName: "Hajizadeh",
        fullName: function(title) {
            return title + " " + this.firstName + " " + this.lastName;
        }
    };
    const person2 = {
        firstName: "Aysel",
        lastName: "Hajizadeh",
    }
    undefined
    person1.fullName.apply(person2, ["dr"]);
    'dr Aysel Hajizadeh'
    const person1 = {
        firstName: "Suleiman ",
        lastName: "Hajizadeh",
        fullName: function(title) {
            return title + " " + this.firstName + " " + this.lastName;
        }
    };
    const person2 = {
        firstName: "Aysel",
        lastName: "Hajizadeh",
    }
    undefined
    person1.fullName();
    'undefined Suleiman  Hajizadeh'
    const person1 = {
        firstName: "Suleiman ",
        lastName: "Hajizadeh",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    const person2 = {
        firstName: "Aysel",
        lastName: "Hajizadeh",
    }
    undefined
    person1.fullName();
    'Suleiman  Hajizadeh'
    let newFn = person1.fullName.bind(person2);
    undefined
    newFn()
    'Aysel Hajizadeh'

}

let fn = a => a + 100;
undefined
fn(19)
119
let fn2 = (a,b)=> {
    const c = 100;
    return a + b + c;
}
undefined
fn2(4,7);
111

let person = {
    name: "Aysel",
    age: 24,
    pupil: true
};
undefined
console.log(person.name);
VM238:1 Aysel
undefined
console.log(person.age);
VM310:1 24
undefined
console.log(person.pupil);
VM394:1 true
undefined
console.log(person.name,person.age,person.pupil);
VM507:1 Aysel 24 true
undefined
person.age = 22;
22
console.log(person.age);
VM608:1 22
undefined
console.log(person["age"]);
VM684:1 22
undefined
console.log(person["name"]);
VM709:1 Aysel
undefined
console.log(person["pupil"]);
VM739:1 true
undefined
let person = {
    name: "Aysel",
    age: 24,
    pupil: true
};
undefined
let person = {
    name: "Aysel",
    age: 24,
    pupil: true,
    showInfo: function () {
        console.log("Info");
    }
}
undefined
person.showInfo();
VM924:6 Info
undefined
let person = {
    name: "Aysel",
    age: 24,
    pupil: true,
    showInfo: function () {
        console.log(this.name, "is", this.age);
    }
}
undefined
person.showInfo();
VM1106:6 Aysel is 24
undefined
let person = {
    name: "Aysel",
    age: 24,
    pupil: true,
    showInfo: function () {
        console.log(name, "is", age);
    }
}
undefined
person.showInfo();
VM1158:6 Uncaught ReferenceError: age is not defined
    at Object.showInfo (<anonymous>:6:33)
    at <anonymous>:1:8
showInfo @ VM1158:6
(anonymous) @ VM1168:1
typeof person.showInfo
'function'
let age = 11;
function incrementNumber(num) {
num++;
console.log("inside func", num);
}
let person = {
name: "Suleiman",
age: 22
};
function incrementAge(person) {
person.age++;
console.log("inside func", person.age);
}
let age = 11;
undefined
function incrementNumber(num) {
    num++;
}
undefined
console.log(age);
VM1388:1 11
undefined
incrementNumber(age);
undefined
console.log(age);
VM1501:1 11
undefined
let age = 11;
function incrementNumber(num) {
num++;
console.log("inside func", num);
}
undefined
incrementNumber(age)
VM1525:4 inside func 12
undefined
console.log(age);
VM1624:1 11
undefined
let person = {
name: "Suleiman",
age: 22
};
function incrementAge(person) {
person.age++;
console.log("inside func", person.age);
}
undefined
incrementAge(person);
VM1628:7 inside func 23
undefined
person.age;
23
let person = {
name: "Suleiman",
age: 22
};
function incrementAge(p) {
p.age++;
console.log("inside func", p.age);
}
undefined
incrementAge(person);
VM1787:7 inside func 23
undefined
person.age;
23
function Person(name) {
this.name = name;
}
let person = new Person("Aysel");
console.log(person.name);
function Person(name) {
this.name = name;
this.greet = function() {
console.log("Hi,", this.name);
}
}
let person = new Person("Aysel");
person.greet();
function Person(name) {
this.name = name;
}
let person = new Person("Aysel");
console.log(person.name);
VM1864:5 Aysel
undefined
function Person(name) {
this.name = name;
this.greet = function() {
console.log("Hi,", this.name);
}
}
let person = new Person("Aysel");
person.greet();
VM1868:4 Hi, Aysel
undefined
let person = new Person("Aysel");
undefined
person.greet();
VM1868:4 Hi, Aysel
undefined
let personAli = new Person("Ali");
undefined
person.greet();
VM1868:4 Hi, Aysel
undefined
personAli.greet();
VM1868:4 Hi, Ali
undefined
function Person(name) {
this.name = name;
this.greet = function() {
console.log("Hi,", name);
}
}
function Person(name) {
this.name = name;
this.greet = function() {
console.log("Hi,", name);
}
}
undefined
let p  = new Person("Jamal");
undefined
p.name;
'Jamal'
p.greet();
VM2148:4 Hi, Jamal
undefined
function Person(personName) {
this.name = personName;
this.greet = function() {
console.log("Hi,", name);
}
}
function Person(personName) {
this.name = personName;
this.greet = function() {
console.log("Hi,", name);
}
}
undefined
let p2 = new Person("Aykhan");
undefined
p2.name;
'Aykhan'
p2.greet();
VM2276:4 Hi, 
undefined
let name = "Qoca";
undefined
p2.greet();
VM2276:4 Hi, Qoca
undefined
Date.now()
1679645469740
let date = new Date();
undefined
date.toDateString();
'Fri Mar 24 2023'
date.getDay();
5
Math.PI
3.141592653589793
Math.random();
0.6329799114170325
Math.random();
0.1989783046342546
Math.random();
0.8852627809867062
Math.round(Math.random()*10);
7
Math.round(Math.random()*10);
5
Math.round(Math.random()*10);
2
Math.round(Math.random()*10);
8
Math.round(Math.random()*10);
7
Math.round(Math.random()*10);
4
Math.round(Math.random()*10);
6
Math.round(Math.random()*10);
6
Math.round(Math.random()*10);
4
Math.round(Math.random()*10);
5
Math.round(Math.random()*10);
8
Math.random();
0.5327035454947562
Math.random();
0.18181411983692009
Math.random();
0.9543290522900025
Math.round(Math.random()*10);
1
Math.round(Math.random()*10);
0
Math.round(Math.random()*10);
8
let name = "Suleiman";
undefined
name.charAt(3);
'e'
name.charAt();
'S'
name.charAt();
'S'
name.charAt(0);
'S'
name.substring(2)
'leiman'
name.substring(2, 4);
'le'
function Person(name) {
this.name = name;
}
Person.prototype.greet = function() {
console.log("Hi,", this.name);
}
let person = new Person("Aysel");
String.prototype.hello = function() {
return this.toString() + " Hello";
}
function Person(name) {
this.name = name;
}
Person.prototype.greet = function() {
console.log("Hi,", this.name);
}
let person = new Person("Aysel");
ƒ () {
console.log("Hi,", this.name);
}
person.greet();
VM3054:5 Hi, Aysel
undefined
let person2 = new Person("Suleiman");
undefined
person2.greet();
VM3054:5 Hi, Suleiman
undefined
String.prototype.hello = function() {
return this.toString() + " Hello";
}
ƒ () {
return this.toString() + " Hello";
}
"Suleiman".toString();
'Suleiman'
"Suleiman".hello();
'Suleiman Hello'
let elements = [1,2,3];
undefined
console.log(elements):
VM3438:1 Uncaught SyntaxError: Unexpected token ':'
console.log(elements);
VM3446:1 (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)
undefined
let names = ["Aysel","Suleiman","Nariman","Aykhan"];
undefined
console.log(names);
VM3694:1 (4) ['Aysel', 'Suleiman', 'Nariman', 'Aykhan']0: "Aysel"1: "Suleiman"2: "Nariman"3: "Aykhan"length: 4[[Prototype]]: Array(0)
undefined
names[0];
'Aysel'
names[1];
'Suleiman'
names[5]
undefined
typeof names;
'object'
Array.isArray(names);
true
names[2] = "Gozel Nariman";
'Gozel Nariman'
console.log(names);
VM3955:1 (4) ['Aysel', 'Suleiman', 'Gozel Nariman', 'Aykhan']
undefined
names.length
4
console.log(names);
VM4033:1 (4) ['Aysel', 'Suleiman', 'Gozel Nariman', 'Aykhan']
undefined
names.push("Mammad");
5
console.log(names);
VM4153:1 (5) ['Aysel', 'Suleiman', 'Gozel Nariman', 'Aykhan', 'Mammad']
undefined
let lastName = names.pop();
undefined
console.log(lastName);
VM4308:1 Mammad
undefined
names
(4) ['Aysel', 'Suleiman', 'Gozel Nariman', 'Aykhan']
names
(4) ['Aysel', 'Suleiman', 'Gozel Nariman', 'Aykhan']
names.shift(1);
'Aysel'
names.shift();
'Suleiman'
names
(2) ['Gozel Nariman', 'Aykhan']
names.unshift("Aysel");
3
names
(3) ['Aysel', 'Gozel Nariman', 'Aykhan']
names.unshift("Suleiman");
4
names
(4) ['Suleiman', 'Aysel', 'Gozel Nariman', 'Aykhan']
let firstName = names.shift();
undefined
firstName
'Suleiman'
names
(3) ['Aysel', 'Gozel Nariman', 'Aykhan']
names.unshift("Suleiman");
4
names
(4) ['Suleiman', 'Aysel', 'Gozel Nariman', 'Aykhan']
console.log(names);
VM4707:1 (4) ['Suleiman', 'Aysel', 'Gozel Nariman', 'Aykhan']
undefined
let elements = ['a','b','c','d'];
let filteredElements = elements.filter(function(item) {
return item > 'b';
} );
let elements = ['a','b','ccc'];
let longerThanTwo = elements.find(item=> item.length > 2);
let elements = ['a','b','ccc'];
elements.forEach(item=> {
console.log('array item', item);
});
let elements = ['a','b','c','d'];
let filteredElements = elements.filter(function(item) {
return item > 'b';
} );
undefined
filteredElements
(2) ['c', 'd']
let elements = ['a','e','b','c','d'];
let filteredElements = elements.filter(function(item) {
return item > 'b';
} );
undefined
filteredElements
(3) ['e', 'c', 'd']
let elements = ['a','b','ccc'];
let longerThanTwo = elements.find(item=> item.length > 2);
undefined
longerThanTwo
'ccc'
let elements = ['a','b','ccc','adhnbygvycvv'];
let longerThanTwo = elements.find(item=> item.length > 2);
undefined
longerThanTwo
'ccc'
let elements = ['a','b','ccc','adhnbygvycvv'];
let longerThanTwo = elements.find(item=> item.length > 123);
undefined
longerThanTwo
undefined
let elements = ['a','b','ccc'];
elements.forEach(item=> {
console.log('array item', item);
});
VM4885:3 array item a
VM4885:3 array item b
VM4885:3 array item ccc
undefined
class Car {
}
let car = new Car();
class Car {
}
let car = new Car();
undefined
console.log(car);
VM4965:1 Car {}[[Prototype]]: Objectconstructor: class Car[[Prototype]]: Object
undefined
class Car {
constructor (id) {
this.id = id;
}
}
let car = new Car(123);
console.log(car,id);
class Vehicle {
constructor() {
this.type = 'car';
}
start() {
console.log(`starting ${this.type}...`)
}
}
class Car extends Vehicle {
}

let car = new Car();
console.log(car.type);

class Car extends Vehicle {
constructor() {
this.speedLimit = 250;
}
}
let car = new Car();
console.log(car.type);
class Car extends Vehicle {
constructor() {
super();
this.speedLimit = 250;
}
}
let car = new Car();
console.log(car.type);
class Car extends Vehicle {
constructor() {
super();
this.speedLimit = 250;
}
start() {
console.log(`starting ${this.type}...`)
}
}
let car = new Car();
console.log(car.type)

class Car extends Vehicle {
constructor() {
super();
this.speedLimit = 250;
}
start() {
super.start();
console.log(`starting ${this.type}... max speed id ${this.speedLimit}.`)
}
}
let car = new Car();
class Car {
constructor (id) {
this.id = id;
}
}
let car = new Car(123);
console.log(car,id);
VM4970:7 Uncaught ReferenceError: id is not defined
    at <anonymous>:7:17
(anonymous) @ VM4970:7
class Car {
constructor(id) {
        this.id = id;
      }
}
let car = new Car(123);
console.log(car,id);
VM5084:7 Uncaught ReferenceError: id is not defined
    at <anonymous>:7:17
(anonymous) @ VM5084:7
class Car {
constructor(id) {
        this.id = id;
        }
}
let car = new Car(123);
console.log(car.id);
VM5118:7 123
undefined
class Car {
constructor(carId) {
        id = carId;
        }
}
let car = new Car(123);
console.log(car.id);
VM5169:3 Uncaught ReferenceError: id is not defined
    at new Car (<anonymous>:3:12)
    at <anonymous>:6:11
Car @ VM5169:3
(anonymous) @ VM5169:6
var id = 123;
undefined
class Car {
constructor(carId) {
        id = carId;
        }
}
let car = new Car(123);
console.log(car.id);
VM5205:7 undefined
undefined
class Car {
constructor(carId) {
        this.id = carId;
        }
}
let car = new Car(123);
console.log(car.id);
VM5226:7 123
undefined
class Vehicle {
constructor() {
this.type = 'car';
}
start() {
console.log(`starting ${this.type}...`)
}
}
undefined
class Car extends Vehicle {
}

let car = new Car();
console.log(car.type);
VM5234:5 car
undefined
class Car {
}

let car = new Car();
console.log(car.type);
VM5268:5 undefined
undefined
class Car extends Vehicle {
constructor() {
this.speedLimit = 250;
}
}
let car = new Car();
console.log(car.type);
VM5282:3 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Car (<anonymous>:3:1)
    at <anonymous>:6:11
Car @ VM5282:3
(anonymous) @ VM5282:6
class Car extends Vehicle {
constructor() {
super();
this.speedLimit = 250;
}
}
let car = new Car();
console.log(car.type);
VM5313:8 car
undefined
class Car extends Vehicle {
constructor() {
super();
this.speedLimit = 250;
}
start() {
console.log(`starting ${this.type}... max speed id ${this.speedLimit}.`)
}
}
let car = new Car();
console.log(car.type);
VM5409:11 car
undefined
car.start();
VM5409:7 starting car... max speed id 250.
undefined
class Car extends Vehicle {
constructor() {
super();
this.speedLimit = 250;
}
start() {
super.start();
console.log(`starting ${this.type}... max speed id ${this.speedLimit}.`)
}
}
let car = new Car();
undefined
car.start();
VM5230:6 starting car...
VM5441:8 starting car... max speed id 250.
undefined
class Car {
constructor(id) {
this.id=id;
}
start() {
console.log(`starting the car with ID: ${this.id}`);
}
}
let car = new Car(123);
console.log(car.start);

class Car {
constructor(id) {
this.id=id;
}
start() {
console.log(`starting the car with ID: ${this.id}`);
}
}
let car = new Car(123);
console.log(car.start());
class Car {
constructor(id) {
this.id=id;
}
start() {
console.log(`starting the car with ID: ${this.id}`);
}
}
let car = new Car(123);
console.log(car.start);
VM5483:10 ƒ start() {
console.log(`starting the car with ID: ${this.id}`);
}
undefined
class Car {
constructor(id) {
this.id=id;
}
start() {
console.log(`starting the car with ID: ${this.id}`);
}
}
let car = new Car(123);
console.log(car.start());
VM5487:6 starting the car with ID: 123
VM5487:10 undefined
undefined
class Car {
constructor(id) {
this.id=id;
}
start() {
console.log(`starting the car with ID: ${id}`);
}
}
let car = new Car(123);
console.log(car.start());
VM5498:6 starting the car with ID: 123
VM5498:10 undefined
undefined
class Car {
constructor(id) {
this.myCardId=id;
}
start() {
console.log(`starting the car with ID: ${myCardId}`);
}
}
let car = new Car(123);
console.log(car.start());
VM5552:6 Uncaught ReferenceError: myCardId is not defined
    at Car.start (<anonymous>:6:42)
    at <anonymous>:10:17
start @ VM5552:6
(anonymous) @ VM5552:10
class Car {
constructor(id) {
this.myCardId=id;
}
start() {
console.log(`starting the car with ID: ${this.myCardId}`);
}
}
let car = new Car(123);
console.log(car.start());
VM5574:6 starting the car with ID: 123
VM5574:10 undefined
undefined
var myCardId = "dexlisiz deyer";
undefined
class Car {
constructor(id) {
this.myCardId=id;
}
start() {
console.log(`starting the car with ID: ${this.myCardId}`);
}
}
let car = new Car(123);
console.log(car.start());
VM5648:6 starting the car with ID: 123
VM5648:10 undefined
undefined
class Car {
constructor(id) {
this.myCardId=id;
}
start() {
console.log(`starting the car with ID: ${myCardId}`);
}
}
let car = new Car(123);
console.log(car.start());
VM5700:6 starting the car with ID: dexlisiz deyer
VM5700:10 undefined
undefined
class Car {
constructor(id) {
this.myCardId=id;
}
start(suffix) {
console.log(`starting the car with ID: ${this.myCardId}, ${suffix}`);
}
}
let car = new Car(123);
console.log(car.start());
VM5805:6 starting the car with ID: 123, undefined
VM5805:10 undefined
undefined
console.log(car.start('in style'));
VM5805:6 starting the car with ID: 123, in style
VM5937:1 undefined
undefined