// Practice 1

// alert("Don't give your personal data to unknown sources!");

// var firstName = prompt("What is your fist name?", "Ahmad");
// var lastName = prompt("What is your last name?", "Jurayev");
// var comeFrom = prompt("Where do you come from?", "Bukhara");
// var age = prompt("How old are you?", "31");
// var workPlace = prompt("Where do you work?", "Najot Ta'lim");
// var occupation = prompt("What is your job?", "Freelancer");
// var field = prompt("What field do you work in?", "Front End");
// var period = prompt("How long have you been working?", "3 months");
// var futurePlace = prompt("Where do want to live in the future?", "America");
// var futurePlan = prompt("Where do you want to work in the future?", "Google");

// console.log(
//   "First Name: " +
//     firstName +
//     "\nLast Name: " +
//     lastName +
//     "\nWas born in : " +
//     comeFrom +
//     "\nAge: " +
//     age +
//     "\nWorks at: " +
//     workPlace +
//     "\nAs a: " +
//     occupation +
//     "\nIn the spehere of: " +
//     field +
//     "\nFor: " +
//     period +
//     "\nPlanning to live in: " +
//     futurePlace +
//     "\nIn the company: " +
//     futurePlan +
//     "\n\nThanks for the form. Good luck!"
// );

// Practice 2
// var x = Number(prompt("Birinchi sonni kiriting:"));
// var y = Number(prompt("Ikkinchi sonni kiritng:"));
// var z = Number(prompt(`${x}+${y}=`));

// if (z === x + y) {
//   console.log("OK");
// } else {
//   console.log("Wrong");
// }

// Practice 3
var elParagraph = document.querySelector(".paragraph");
var ticket = Math.round(500 * 9433.34);
var hotel = Math.round(250 * 9433.34);
var sightsee = Math.round(120 * 10354.03);
var expanse = Math.round(ticket + hotel + sightsee);

alert(`The list of expanses:
- The return ticket - 500 dollars
- Booking the hotel - 250 dollars
- Going sighseeing - 120 euros`);

var name = prompt("What is your name?");
var wealth = prompt(
  `${name}, How much do you intend to spend (in UZS, please)?`
);

if (wealth >= expanse) {
  elParagraph.textContent = `${name}, you can pack your luggage!`;
} else {
  elParagraph.textContent = `Sorry, ${name} but you should wait a bit more`;
}
