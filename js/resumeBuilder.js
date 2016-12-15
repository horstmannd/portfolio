// Create bio object (w/ sObject Literal Notation)
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
	"skills" : ["HTML", "CSS", "JavaScript", "jQuery", "Python"]
};

// Name and Role
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

// Contact Info
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

// Pic, Message and Skills
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkills4 = HTMLskills.replace("%data%", bio.skills[3]);
var formattedSkills5 = HTMLskills.replace("%data%", bio.skills[4]);
$("#header").append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);
$("#skills").append(formattedSkills1, formattedSkills2, formattedSkills3, formattedSkills4, formattedSkills5);

// Create Work Object
var work = {
	"currentPosition" : "Multimedia Producer",
	"employer" : "The Schwan's Food Company",
	"yearsWorked" : "September 2016 - present",
	"city" : "Marshall, MN"
};

// Create Education Object
var education = {
	"nameOfSchool" : "Minnesota State University, Mankato",
	"yearAttended" : "1999 - 2007",
	"city" : "Mankato, MN"
};


