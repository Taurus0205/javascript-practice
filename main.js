alert("Don't give your personal data to unknown sources!");

var firstName = prompt("What is your fist name?", "Ahmad");
var lastName = prompt("What is your last name?", "Jurayev");
var comeFrom = prompt("Where do you come from?", "Bukhara");
var age = prompt("How old are you?", "31");
var workPlace = prompt("Where do you work?", "Najot Ta'lim");
var occupation = prompt("What is your job?", "Freelancer");
var field = prompt("What field do you work in?", "Front End");
var period = prompt("How long have you been working?", "3 months");
var futurePlace = prompt("Where do want to live in the future?", "America");
var futurePlan = prompt("Where do you want to work in the future?", "Google");

console.log(
  "First Name: " +
    firstName +
    "\nLast Name: " +
    lastName +
    "\nWas born in : " +
    comeFrom +
    "\nAge: " +
    age +
    "\nWorks at: " +
    workPlace +
    "\nAs a: " +
    occupation +
    "\nIn the spehere of: " +
    field +
    "\nFor: " +
    period +
    "\nPlanning to live in: " +
    futurePlace +
    "\nIn the company: " +
    futurePlan +
    "\nThanks for the form. Good luck!"
);
