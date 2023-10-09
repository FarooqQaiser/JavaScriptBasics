/*
// This is my JS code
let name; //'var' keyword can also be used to declare a variable but using 'let' keyword is a good practice.
name = "Farooq";
console.log(name);

let interestRate = 0.3;
interestRate = 1; //Here we can change the value of the variable but to be not able to not change the value of the variable we then have to use 'const' keyword which means constant and once a variable is declared by const keyword, cannot be changed afterwards in the code.
console.log(interestRate);

const newInterestRate = 0.3;
console.log(newInterestRate);
*/

//primitive value types
/*let name = "Farooq";
let age = 23;
let isApproved = true;
let fristName = undefined;
let selectedColor = null;

typeof name;
typeof age;
typeof isApproved;
typeof fristName;
typeof selectedColor;*/

//Objects
// let person = {
//   name: "Farooq",
//   age: 30,
// };
// console.log(person);

//Dot Notation usage to change the value of the variables
// person.name = "Qaiser";
// console.log(person.name);

//Bracket Notation usage too change the value of the variables
/*
person["name"] = "Muhammad";
console.log(person.name);
*/

//arrays
// let selectedColors = []; //empty array
// selectedColors = ["red", "blue"];
// selectedColors[2] = 1;
// console.log(selectedColors);

//Functions
// function greet(name, lastName) {
//   console.log("Hello " + name + lastName);
// }
// greet("Farooq ", "Qaiser");

// //Types of Functions
// function square(number) {
//   return number * number;
// }

// let numberSquare = square(2);
// console.log(numberSquare);

//Taking input through prompt
// let firstName = prompt("What is your first name? ");
// let lastName = prompt("What is your last name? ");
// let age = prompt("What is your age? ");
// let gender = prompt("What is your age? ");
// let martilStatus = prompt("What is your martial status? ");
// console.log(
//   firstName +
//     " " +
//     lastName +
//     " is " +
//     age +
//     " years old and he is a " +
//     gender +
//     " and is " +
//     martilStatus
// );

//Basic and logical operators
// var year, yearJohn, yearMark;
// now = 2023;
// ageJohn = 23;
// ageMark = 22;
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

//coding chellenge#1
// var marksBMI, marksMass, marksHeight;
// var johnsBMI, johnsMass, marksHeight;
// marksMass = 78;
// marksHeight = 3;
// marksBMI = 78 / (marksHeight * marksHeight);

// johnsMass = 89;
// johnsHeight = 2.5;
// johnsBMI = 89 / (johnsHeight * johnsHeight);

// var marksBMIhigher = marksBMI > johnsBMI;
// console.log("Is the BMI of Mark higher than John? " + marksBMIhigher);

//IF else Statements
// var firstName = "Farooq";
// var civilStatus = "single";

// if (civilStatus == "married") {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will hopefully marry soon.");
// }

// Boolean Logic
// var firstName = "Farooq";
// var age = 23;

// if (age < 13) {
//   console.log(firstName + " is a boy");
// } else if (age >= 13 && age < 18) {
//   console.log(firstName + " is a teenager.");
// } else {
//   console.log(firstName + " is a man.");
// }

// the ternary operator and switch statements
// var firstName = "Farooq";
// var age = 23;
// age >= 18
//   ? console.log(firstName + " smokes cigarette.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

//Switch statement
// var job = "teacher";
// var firstName = "Farooq";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teaches kids how to code.");
//   case "driver":
//     console.log(firstName + " drives an uber in Lisbon.");
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does ssomething else.");
// }

//Functions
// function calculateAge(birthYear) {
//   return 2023 - birthYear;
// }

// var ageJohn = calculateAge(2000);
// console.log(ageJohn);

// Function statements and expression
// var whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code.";
//     case "driver":
//       return firstNa, me + " drives a cabe in Lisbon.";
//     case "designer":
//       return firstName + " designs beautiful websites.";
//     default:
//       return firstName + " does something else.";
//   }
// };

// console.log(whatDoYouDo("teacher", "Muhammad"));
// console.log(whatDoYouDo("driver", "Farooq"));
// console.log(whatDoYouDo("designer", "Qaiser"));
// console.log(whatDoYouDo("retired", "Sherry"));

// Arrays
// var names = ["Muhammad", "Farooq", "Qaiser"];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// names[1] = "Ben";
// names[2] = "Mary";
// console.log(names);

// //Diferent data types of array
// var john = ["John", "Smith", 1990, "teacher", false];
// john.push("blue"); //This method adds element at the end of the array
// john.unshift("MR. "); //This adds element at the start of the array
// console.log(john);
// john.pop(); //This method remoes an element at the end of the array
// console.log(john);
// john.pop();
// console.log(john);
// john.shift(); //removes an elementt the start of the array.
// console.log(john);
// console.log(john.indexOf(1990)); //This method is used to show the position of an index of the element that wwas given in the method.
// var isDesigner =
//   john.indexOf("designer") === -1
//     ? "John is NOT a designer"
//     : "John IS a designer";
// console.log(isDesigner);

// Coding Challenge#2
// var johnBill = [124, 48, 268];
// var johnTip = [];
// var johnPaidAmount = [];

// for (var i = 0; i < johnBill.length; i++) {
//   if (johnBill[i] < 50) {
//     var tip = 0.2 * johnBill[i];
//     johnTip.push(tip);
//     var totalAmount = tip + johnBill[i];
//     johnPaidAmount.push(totalAmount);
//   } else if (johnBill[i] >= 50 && johnBill[i] < 200) {
//     var tip = 0.15 * johnBill[i];
//     johnTip.push(tip);
//     var totalAmount = tip + johnBill[i];
//     johnPaidAmount.push(totalAmount);
//   } else {
//     var tip = 0.1 * johnBill[i];
//     johnTip.push(tip);
//     var totalAmount = tip + johnBill[i];
//     johnPaidAmount.push(totalAmount);
//   }
// }
// console.log("Bills that are to be paid are: \n    " + johnBill);
// console.log("\nTips that are to be given are: \n    " + johnTip);
// console.log("\nTotal amounts to be paid are: \n   " + johnPaidAmount);

// Objects, properties and methods
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },
// };

// console.log(john.calcAge(1990));

//Coding chalenge#3
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 75,
//   height: 2.5,
//   clacBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// var mark = {
//   firstName: "Mark",
//   lastName: "Smith",
//   mass: 95,
//   height: 2,
//   clacBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// console.log(john, mark);
// if (john.clacBMI < mark.clacBMI) {
//   console.log(
//     "This information of the person with the highest BI is:\n   ",
//     john
//   );
// } else if (john.clacBMI == mark.clacBMI) {
//   console.log(john, "\n", mark);
// } else {
//   console.log(
//     "This information of the person with the highest BI is:\n   ",
//     mark
//   );
// }

//Loops and iteration
// var i = 0;
// while (i < 10) {
//   console.log(i + 1);
//   i++;
// }

//Coding Chalenge#4
var john = {
  firstName: "John",
  lastName: "Smith",
  restaurantsBills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.paidTips = [];
    this.totalPaidAmuonts = [];

    for (var i = 0; i < this.restaurantsBills.length; i++) {
      var percentage;

      if (this.restaurantsBills[i] < 50) {
        percentage = 0.2;
      } else if (
        this.restaurantsBills[i] >= 50 &&
        this.restaurantsBills[i] < 200
      ) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.paidTips[i] = this.restaurantsBills * percentage;
      this.totalPaidAmuonts[i] = this.restaurantsBills + this.paidTips[i];
    }
  },
};

john.calcTips();
console.log(john);
