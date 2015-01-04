
/* JS Basics Course
* Udacity
* author: amr
* date: 2-Jan-2015
*
*/



var bloglink="<a href=\"http://outsidethepond.com\" target=\"_blank\">OutsideThePond</a>"
var linkdlink="<a href=\"http://www.linkedin.com/in/AnneMarieRossi\" target=\"_blank\">LinkedIn</a>"
var skills = [HTMLskills.replace("%data%","<i>Skills include:</i>:"),HTMLskills.replace("%data%","SQL"),
 HTMLskills.replace("%data%","Support"),
 HTMLskills.replace("%data%","Programming"),
 HTMLskills.replace("%data%","Other Stuff ")];
 
var jobcontent="My experience is with a software development house that  provides ERP solutions to publishers.  As product offerings evolved,  I became an expert in the latest-and-greatest and was always instrumental in development, training,   QA, implementations and upgrades/migrations.  My experience, skill and acumen led to a successful and rewarding tenure as Customer Support Manager. <br><br> Proven excellence in:  Analysis, troubleshooting and debugging; Analysis of performance and capacity issues; Creating monitoring frameworks;  Analyzing, correlating and corroborating logs and trace files; Reproducing anomalous behavior to find the real problem; Finding/fixing unnatural data conditions; Evaluating differences between working and non-working states;  Encouraging others to tap into their own intelligence and acumen; Proposing or creating solutions to get the job done easier, faster, more accurately; Creating workarounds to bridge development lag; Turning data into information;  Data transformation, verification and validation.<br>"

var name="Anne Marie Rossi";
var formattedName=HTMLheaderName.replace("%data%",name);
var formattedRole=HTMLheaderRole.replace("%data%","Factotum");
var bio = {
//key: value pairs
"name": formattedName,
"role": formattedRole,
"contacts": 
    {"email": HTMLemail.replace("%data%","amr@outsidethepond.com"),
    "blog": HTMLblog.replace("%data%",bloglink),
    "location": HTMLlocation.replace("%data%","07003"),
	"linkedin": HTMLcontactGeneric.replace("%contact%","LinkedIn").replace("%data%",linkdlink)},
"bioPic":HTMLbioPic.replace("%data%","images/me.gif"),
"skills":skills,
"welcomeMsg":HTMLWelcomeMsg.replace("%data%","I love to solve hard problems and create solid solutions that remove the obstacles to the success and progress of others. If the solutions are considered clever, all the better! "),

};
bio.display = function () {
    $("#header").prepend(bio.role).prepend(bio.name);
    $("#topContacts").append(bio.contacts.email).append(bio.contacts.blog).append(bio.contacts.location).append(bio.contacts.linkedin);


    $("#header").append(bio.bioPic).append(bio.welcomeMsg); //.append(bio.skills);

    if ( bio["skills"].length !== 0) {
      //$("#header").append(HTMLskillsStart);
      $("#header").append(bio.skills);
      };
	};
//bio.contactGeneric=HTMLcontactGeneric.replace("%contact%","").replace("%data%",bio.contact)


var work= {
"jobs": [
{
"title": HTMLworkTitle.replace("%data%","retired"),
"employer": HTMLworkEmployer.replace("%data%","Currently"),
"location": HTMLworkLocation.replace("%data%","Bloomfield,NJ"),
"dates": HTMLworkDates.replace("%data%","2012 -Present"),
"desc": HTMLworkDescription.replace("%data%","dilettante, mostly<br></br>")
},
{"title": HTMLworkTitle.replace("%data%","Manager, Customer Support"),
"employer": HTMLworkEmployer.replace("%data%","Klopotek, NA"),
"dates": HTMLworkDates.replace("%data%","1980 - 2012"),
"location": HTMLworkLocation.replace("%data%","Parsippany,NJ"),
"desc": HTMLworkDescription.replace("%data%",jobcontent)
}
]
};

work.display = function () {
   for (var i in work.jobs) {
    var thisjob = work.jobs[i];
    $("#workExperience").append(HTMLworkStart);

    $(".work-entry:last").append(thisjob.employer + thisjob.title).append(thisjob.location).append(thisjob.dates).append(thisjob.desc);
    };
};

var projects = {
 "list": [
{"title": HTMLprojectTitle.replace("%data%","OTP"),
"desc": HTMLprojectDescription.replace("%data%","made a blog<br></br><br></br>")
},

{"title": HTMLprojectTitle.replace("%data%","sewing"),
"desc": HTMLprojectDescription.replace("%data%","wombat<br><br>"),
"image": HTMLprojectImage.replace("%data%","images/wombat.gif")
},

{"title": HTMLprojectTitle.replace("%data%","misc"),
"desc": HTMLprojectDescription.replace("%data%","more to come....<br><br>")
}
]
};
projects.display = function () {
    for (var i in projects.list) {
    var thisproj =projects.list[i];
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(thisproj.title).append(thisproj.desc).append(thisproj.image);
    };
};

var education = {

   "online" : [
   {"title": HTMLonlineTitle.replace("%data%","Programming Languages"),
   "school": HTMLonlineSchool.replace("%data%","University of Washington ")
   
   },
   {"title": HTMLonlineTitle.replace("%data%","A Beginner's Guide to Irrational Behaviour"),
   "school": HTMLonlineSchool.replace("%data%","Duke University")
   },
   {"title": HTMLonlineTitle.replace("%data%","JavaScript Basics"),
   "school": HTMLonlineSchool.replace("%data%","Udacity ")
   },
   {"title": HTMLonlineTitle.replace("%data%","Introduction to Mathematical Thinking"),
   "school": HTMLonlineSchool.replace("%data%","Stanford University ")
   },
   {"title": HTMLonlineTitle.replace("%data%","An Introduction to Interactive Programming in Python"),
   "school": HTMLonlineSchool.replace("%data%","Rice University")
   },
      {"title": HTMLonlineTitle.replace("%data%","Learn to Program: Crafting Quality Code"),
   "school": HTMLonlineSchool.replace("%data%","University of Toronto")
   },
      {"title": HTMLonlineTitle.replace("%data%","Developing Innovative Ideas for New Companies"),
   "school": HTMLonlineSchool.replace("%data%","University of Maryland, College Park")
   },
      {"title": HTMLonlineTitle.replace("%data%","Introduction to Art: Concepts and Techniques"),
   "school": HTMLonlineSchool.replace("%data%","The Pennsylvania State University")
   },
      {"title": HTMLonlineTitle.replace("%data%","Learn to Program: The Fundamentals"),
   "school": HTMLonlineSchool.replace("%data%","University of Toronto")
   },
      {"title": HTMLonlineTitle.replace("%data%","Creativity, Innovation, and Change"),
   "school": HTMLonlineSchool.replace("%data%","The Pennsylvania State University")
   },
      {"title": HTMLonlineTitle.replace("%data%","How Green Is That Product? An Introduction to LCEA"),
   "school": HTMLonlineSchool.replace("%data%","Northwestern University")
   },
      {"title": HTMLonlineTitle.replace("%data%","On Strategy: What Managers Can Learn from Philosophy (Part 1)"),
   "school": HTMLonlineSchool.replace("%data%","\u00c9cole Centrale Paris")
   }
   ],
      "schools" : [
   {
"name": HTMLschoolName.replace("%data%","Seton Hall University"),
"dates": HTMLschoolDates.replace("%data%","1978"),
"location": "South Orange, NJ",
"degree": HTMLschoolDegree.replace("%data%","BS"),
"major": HTMLschoolMajor.replace ("%data%","Mathematics")
   }
    ]
   };

education.displayS = function() {
    for (var school in education.schools) {
	   var thisschool = education.schools[school];
       $("#education").append(HTMLschoolStart);
       $(".education-entry:last").append(thisschool.name).append(thisschool.degree).append(thisschool.dates).append(thisschool.major);	
	   };
	};
	
education.displayo = function() {   
	 $("#education").append(HTMLonlineClasses);
	 for (var aclass in education.online) {
        var thisclass =education.online[aclass];
		$("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(thisclass.title).append(thisclass.school);		
	    };
	};

	
/* I assume this is where you would "verify" your data
but that's not the quiz, is it?
the quiz is "just" a function that takes a "data" and returns a "cleaned" data
once again, not reading the instructions, or rather
doing more than the instructions require. DOH!
*/

//put it on the page //
/*
$("#header").prepend(bio.role).prepend(bio.name);
$("#topContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);


$("#header").append(bio.bioPic).append(bio.welcomeMsg); //.append(bio.skills);

if ( bio["skills"].length !== 0) {
//$("#header").append(HTMLskillsStart);
$("#header").append(bio.skills);
};
*/


$("#main").append(bio.display);
$("#main").append(work.display);
$("#main").append(projects.display);
$("#main").append(education.displayS);
$("#main").append(education.displayo);

// map crap
$("#mapDiv").append(googleMap);



$("#footerContacts").append(bio.contacts.email).append(bio.contacts.blog).append(bio.contacts.location);

//$("#main").append(internationalizeButton);

function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
	 var x = finalName.lastIndexOf(" ");
     var lastName=finalName.substr(x).toUpperCase();
	 return  finalName.substr(0,x) + lastName
	 }


