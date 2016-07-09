var bio = {
	"name" : "Nikoloz Sanakoevi",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "000111222333",
		"email" : "nikoloz.sanakoevi@gmail.com",
		"github" : "nikasana",
		"twitter" : "(no twitter account yet)",
		"location" : "Tbilisi, Georgia"
	},
	"welcomeMessage" : "I love employers and they love me back! :D",
	"skills" : [
		"HTML", "CSS", "javascript", "jQuery", "C++", "C#"
	],
	"bioPic" : "images/me.jpg"
};

var education = {
	"schools": [
		{
			"name" : "San Diego State University - Georgia",
			"location" : "Saint Petersburg, FL",
			"degree" : "BA",
			"majors" : ["CE"],
			"dates" : 2019,
			"url" : "http://example.com" 
		},
		{
			"name": "MIT",
			"location": "Fort Lauderdale, FL",
			"degree": "Masters",
			"majors": ["EECS"],
			"dates": 2021,
			"url": "http://example.com" 
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2016,
			"url": "http://www.udacity.com"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Paint The World",
			"title": "Web Developer",
			"dates": 2016,
			"description": "I was developing a website for charity organisation.",
			"location": "Tbilisi, Georgia"
		},
		{
			"employer": "Geolymp",
			"title": "C++ Programmer",
			"dates": 2013,
			"description": "I was developing problem sets for the olympiad in informatics.",
			"location": "Tbilisi, Georgia"
		}
	]
}

var projects = {
	"projects": [
	{
		"title": "Memory Development (Online Course)",
		"dates": "2012",
		"description": "I with my friend created a online course on developing memory.",
		"images": [
			"images/brain.jpg",
			"images/head.jpg"
		]
	},
	{
		"title": "Android App",
		"dates": "2013",
		"description": "I was working on the android app: 'Interactive Diary'.",
		"images": [
			"images/phone.jpg",
			"images/smartphone.jpg"
		]
	}
	]
}


bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMessage);
	$("#header").prepend(formattedBioPic);

	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedBlog, formattedLocation);
	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedBlog, formattedLocation);


	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
 		$("#skills").append(formattedSkill);
 		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
 		$("#skills").append(formattedSkill);
	}
}

work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	

		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);
	}
}

projects.display = function (){
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDesc);
		
    	if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

		}  
}


education.display = function (){
		for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
		
    	

		} 

		$(".education-entry:last").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses) {
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].name);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedURL);
		
    	
		}   
}




bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
