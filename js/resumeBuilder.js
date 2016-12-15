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

// Create Project Object (JSON style)
var projects = [{
	"title" : "Portfolio Site",
	"dates" : "December, 2016",
	"description" : "Some text",
	"image" : "images/fry.jpg"
},
{
	"title" : "Harmonis",
	"dates" : "2015",
	"description" : "Developer",
	"image" : "images/fry.jpg"
}];

$("#projects").append(HTMLprojectStart);
var formattedProjectTitle1 = HTMLprojectTitle.replace("%data%", projects[0].title);
var formattedProjectDates1 = HTMLprojectDates.replace("%data%", projects[0].dates);
var formattedProjectDescription1 = HTMLprojectDescription.replace("%data%", projects[0].description);
var formattedProjectImage1 = HTMLprojectImage.replace("%data%", projects[0].image);
$(".project-entry").append(formattedProjectTitle1, formattedProjectDates1, formattedProjectDescription1, formattedProjectImage1);

var formattedProjectTitle2 = HTMLprojectTitle.replace("%data%", projects[1].title);
var formattedProjectDates2 = HTMLprojectDates.replace("%data%", projects[1].dates);
var formattedProjectDescription2 = HTMLprojectDescription.replace("%data%", projects[1].description);
var formattedProjectImage2 = HTMLprojectImage.replace("%data%", projects[1].image);
$(".project-entry").append(formattedProjectTitle2, formattedProjectDates2, formattedProjectDescription2, formattedProjectImage2);


// Create Work Object
// Using Dot Notation to create this object
var work = {};
work.employer = "The Schwan's Food Company";
work.title = "Multimedia Producer";
work.dates = "September 2016 - present";
work.location = "Marshall, MN";
work.description = "To da da da.";

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);
$(".work-entry").append(formattedWorkEmployer, formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);


// Create Education Object
// Using JSON
var education = {
	"name" : "Minnesota State University, Mankato",
	"degree" : "Bachelor of Arts",
	"dates" : "1999 - 2007",
	"location" : "Mankato, MN",
	"major" : "French",
	"minor" : "Creative Writing (with an emphasis on peotry)"
};

var onlineEducation = {
	"title": "Intro to Programming",
	"school": "Udacity",
	"dates": "September 2016 - Present",
	"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
};


$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.major);
var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.minor);
$(".education-entry").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor, formattedSchoolMinor);

$("#education").append(HTMLonlineClasses, HTMLschoolStart);
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineEducation.title);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineEducation.school);
var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineEducation.dates);
var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineEducation.url);
$(".education-entry").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);



