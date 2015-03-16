var bio = {
	"name" : "Mary Nickless",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "727-678-2469",
		"email": "maryghughes@gmail.com",
		"github": "MaryNick",
		"twitter": "@MaryNick",
		"location": "St.Petersburg,FL"
	},
	"welcomeMessage": "Thanks for checking out my webpage!!",
	"skills" : ["Great Communicator", "HTML&CSS", "Javascript", "Team player"],
	"bioPic": "images/me.jpg"
}

var work = {
	"jobs" : [
		{
			"employer": "Plato Academy Largo",
			"title" : "4th grade Math and Science Teacher",
			"location": "Largo,FL",
			"dates": "2012-present",
			"description": "Planned and implemented 4th grade curriculum to a large group and small group of students.  Communicated with parents on students skills, abilities and successes."
		},
		{
			"title" : "English Teacher",
			"employer": "Wolpo Elementary School",
			"location": "Masan, South Korea",
			"dates": "2010-2012",
			"description": "Planned and implemented english lessons for grades 3-6.  Actively strived to keep students engaged and constantly learning."
		},
		{
			"title" : "English Teacher",
			"employer": "English for Children",
			"location": "Vienna,Austria",
			"dates": "2009-2010",
			"description": "Followed English for Children curriculum to engage students in 'Play English' learning.  Worked in preschools, elementary schools and traveled to clients' homes."
		},
		{
			"title" : "English Teacher",
			"employer": "Kid's World",
			"location": "Rome,Italy",
			"dates": "2007-2009",
			"description": "Provided English lessons for children ages pre-K to Highschool.  Traveled throughout the city and worked in schools, kindergartens and homes.  Taught students in large and small groups."
		}
	]
}

var education = {
	"schools": [
		{
			"name": "University of Florida",
			"location": "Gainesville,FL",
			"degree": "Masters",
			"major": ["Math and Technology"],
			"dates": "2004-2005",
			"url": "http://education.ufl.edu/"
		},
		{
			"name": "University of Florida",
			"location": "Gainesville,FL",
			"degree": "Bachelors",
			"major": "Elementary Education K-6",
			"dates": "2000-2004",
			"url": "http://education.ufl.edu/"
		}
	  ],
		"onlineCourse": [
        {
            "title": "Intro to HTML & CSS",
            "school": "Udacity",
            "dates": "January 2015",
            "url": "https://www.udacity.com/course/ud304"
        },
        {
        	"title": "How To Use Git & GitHub",
            "school": "Udacity",
            "dates": "January 2015",
            "url": "https://www.udacity.com/course/ud775"
        },
        {
        	"title": "Javascript Basics",
            "school": "Udacity",
            "dates": "February 2015",
            "url": "https://www.udacity.com/course/ud804"
        },
        {
        	"title": "Intro to jQuery",
            "school": "Udacity",
            "dates": "February 2015",
            "url": "https://www.udacity.com/course/ud245"
        }
      ]
    }

var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "2015",
			"description": "Created a webpage off a designers mockup",
			"images" : ["images/mug.jpg"]
		},
		{
			"title" : "Project 2",
			"dates" : "2015",
			"description" : "Interactive Portfolio",
			"images" : ["images/portpic.jpg"]
		}
	]
}

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
HTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);
$("#header").append(HTMLbioPic);
$("#header").append(HTMLWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for (i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
    }
};
displayWork();


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.display();

education.display = function(){
   	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
   		$('#education').append(HTMLschoolStart);
   		for (i in education.schools) {
		   var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
		   var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		   var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		   var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		   var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		   $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		   $(".education-entry:last").append(formattedSchoolDates);
		   $(".education-entry:last").append(formattedSchoolLocation);
		   $(".education-entry:last").append(formattedSchoolMajor);
		}
		if(education.onlineCourse.length > 0){
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			for (i in education.onlineCourse) {
				var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[i].title).replace("#", education.onlineCourse[i].url);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[i].school);
				var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[i].dates);
				var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[i].url).replace("#", education.onlineCourse[i].url);
				$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
				$(".education-entry:last").append(formattedonlineDates);
				$(".education-entry:last").append(formattedonlineURL);
			}
		}
	}
};
education.display();

$("#mapDiv").append(googleMap);

