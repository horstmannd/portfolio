// Declare bio object to hold info about me
var bio = {
    "name": "Dustin Horstmann",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "dustin.horstmann@gmail.com",
        "github": "horstmannd",
        "location": "Smalltown, MN"
    },
    "pictureURL": "images/fry.jpg",
    "welcomeMessage": "Thank you for visiting my site!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Python"]
};

// Encapsulate function in bio object to get info from object and 
// display on index.html
bio.display = function() {
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
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();

// Declare a projects object that holds project info
var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "December, 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "images": ["images/fry.jpg"]
    }, {
        "title": "Harmonis",
        "dates": "2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "images": ["images/fry.jpg"]
    }]
};

// Encapsulate function in projects object that iterates through project info
// and displays on index.html
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
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        "employer": "IHOPU",
        "title": "Media Coordinator and Producer",
        "dates": "2009 - 2013",
        "location": "Grandview, MO USA",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }]
};

// Encapsulate a function inside the work object that
// iterates through education info and displays it on index.html
// Got the for loop idea here:
// https://www.youtube.com/watch?v=rJesac0_Ftw
work.display = function() {
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

// Declare education object that holds education info
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

// Encapsulate function in education object that iterates through 
// education info and displays it on index.html
education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
        $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor, formattedSchoolMinor);
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

// Append google map to index.html
$("#mapDiv").append(googleMap);