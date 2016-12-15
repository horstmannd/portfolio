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
var skills = ["Script writing", "programming", "HTML"];

// Using Index:
// $("#main").append(skills[0]);

// Getting length:
// $("#main").append(skills.length);

// Creating objects with "Object Literal Notation":
// Note: you can create a property referencing an array (skills, here)
var bio = {
	"name" : "Dustin Horstmann",
	"role" : "Front-end Web Developer",
	"contactInfo" : {
		"mobile" : "507-530-9324",
		"email" : "dustin.horstmann@gmail.com",
		"github" : "horstmannd",
		"location" : "Marshall, MN"
	},
	"pictureURL" : "images/fry.jpg",
	"welcomeMessage" : "Thank you for visiting my site!",
	"skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

// Work Object in Dot Notation

var work = {
	"currentPosition" : "Multimedia Producer",
	"employer" : "The Schwan's Food Company",
	"yearsWorked" : "September 2016 - present",
	"city" : "Marshall, MN"
};

var education = {
	"nameOfSchool" : "Minnesota State University, Mankato",
	"yearAttended" : "1999 - 2007",
	"city" : "Mankato, MN"
};


