// # BASICS

// Append Method:
// $("#main").append("Dustin Horstmann")

// ## Data Types
// var firstName = "James";
// var age = 32;
// console.log(firstname);

// var awesomeThoughts = "I am Dustin and I am AWESOME!!";
// console.log(awesomeThoughts);

// Replace Method:
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// Append variable to index.html
// $("#main").append(funThoughts);

var name = "Dustin Horstmann";
var role = "Front-end Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

