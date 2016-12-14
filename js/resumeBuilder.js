// # BASICS

// Append Method:
// $("#main").append("Dustin Horstmann")

// Data Type Examples
// var firstName = "James";
// var age = 32;
// console.log(firstname);

// var awesomeThoughts = "I am Dustin and I am AWESOME!!";
// console.log(awesomeThoughts);

// Replace Method:
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// Append variable to index.html
// $("#main").append(funThoughts);

// Arrays:
var skills = ["Script writing", "programming", "HTML"]

// Using Index:
// $("#main").append(skills[0]);

// Getting length:
// $("#main").append(skills.length);

// Creating objects with "Object Literal Notation":
// Note: you can create a property referencing an array (skills, here)
var bio = {
	"name" : "<h2>Dustin Horstmann</h2>",
	"role" : "<p>Front-end Web Developer</p>",
	"contactInfo" : "dustin.horstmann@gmail.com",
	"pictureURL" : "www.google.com",
	"welcomeMessage" : "Thank you for visiting my site!",
	"skills" : skills
};

// To access above properties (object name + property):
$("#main").append(bio.name, bio.role);


var name = "Dustin Horstmann";
var role = "Front-end Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

