// Create bio object (w/ sObject Literal Notation)
var bio = {
	"name": "Dustin Horstmann",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "507-530-9324",
		"email": "dustin.horstmann@gmail.com",
		"github": "horstmannd",
		"location": "Marshall, MN"
	},
	"pictureURL": "images/fry.jpg",
	"welcomeMessage": "Thank you for visiting my site!",
	"skills": ["HTML", "CSS", "JavaScript", "jQuery", "Python"]
};
// Name and Role
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);
// Contact Info
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
// Pic, Message and Skills
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedBioPic, formattedWelcomeMsg);
//$("#skills").append(formattedSkills1, formattedSkills2, formattedSkills3, formattedSkills4, formattedSkills5);
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[0]);
	var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[1]);
	var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[2]);
	var formattedSkills4 = HTMLskills.replace("%data%", bio.skills[3]);
	var formattedSkills5 = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills1, formattedSkills2, formattedSkills3, formattedSkills4, formattedSkills5);
}
// Declare a projects object that holds project info
var projects = {
	"projects": [{
		"title": "Portfolio Site",
		"dates": "December, 2016",
		"description": "Some text",
		"images": ["images/fry.jpg"]
	}, {
		"title": "Harmonis",
		"dates": "2015",
		"description": "Developer",
		"images": ["images/fry.jpg"]
	}]
};

// Encapsulate function in projects object that iterates through project info
// and prints to index.html
projects.display = function() {
	for (var project = 0; project < projects.projects.length; project++) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (var image = 0; image < projects.projects[project].images.length; image++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();

// Declare a work object that holds job info
var work = {
	"jobs": [{
		"employer": "The Schwan's Food Company",
		"title": "Multimedia Producer",
		"dates": "September 2016 - present",
		"location": "Marshall, MN USA",
		"description": "To da da da."
	}, {
		"employer": "IHOPU",
		"title": "Media Coordinator and Producer",
		"dates": "2009 - 2013",
		"location": "Grandview, MO USA",
		"description": "To da da da."
	}]
};

// Encapsulate a function inside the work display method
// Got the for loop idea here:
// https://www.youtube.com/watch?v=rJesac0_Ftw
work.display = function () {
	for (var job = 0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkEmployer, formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
	}
};
work.display();

// Create Education object that holds education info
var education = {
	"schools": [{
		"name": "Minnesota State University, Mankato",
		"degree": "Bachelor of Arts",
		"dates": "1999 - 2007",
		"location": "Mankato, MN",
		"major": "French",
		"minor": "Creative Writing (with an emphasis on peotry)"
	}],
	"onlineCourses": [{
		"title": "Intro to Programming",
		"school": "Udacity",
		"dates": "September 2016 - Present",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	}]
};

education.display = function () {
	for (var school = 0; school < education.schools.length; school++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
		$(".education-entry").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor, formattedSchoolMinor);
	}

	for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(HTMLonlineClasses, formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
	}
};
education.display();



// Log clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});
// Internationalize Name
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

//$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);