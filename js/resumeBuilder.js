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
	"employer" : "The Schwan's Food Company",
	"title" : "Multimedia Producer",
	"dates" : "September 2016 - present",
	"location" : "Marshall, MN",
	"description" : "To da da da."
};

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);
$(".work-entry").append(formattedWorkEmployer, formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);


// Create Education Object
var education = {
	"name" : "Minnesota State University, Mankato",
	"degree" : "Bachelor of Arts",
	"dates" : "1999 - 2007",
	"location" : "Mankato, MN",
	"major" : "French"
};

$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.major);
$(".education-entry").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);


