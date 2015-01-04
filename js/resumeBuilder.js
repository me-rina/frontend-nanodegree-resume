
/* JS Basics Course
* Udacity
* author: amr
* date: 2-Jan-2015
*
*/



var bloglink="<a href=\"http://outsidethepond.com\" target=\"_blank\">OutsideThePond</a>"
var skills = [HTMLskills.replace("%data%","SQL"),
 HTMLskills.replace("%data%","Support"),
 HTMLskills.replace("%data%","Programming"),
 HTMLskills.replace("%data%","Other Stuff ")];

var name="Anne Marie Rossi";
var formattedName=HTMLheaderName.replace("%data%",name);
var formattedRole=HTMLheaderRole.replace("%data%","Factotum");
var bio = {
//key: value pairs
"name": formattedName,
"role": formattedRole,
"contact": 
    {"email": HTMLemail.replace("%data%","amr@outsidethepond.com"),
    "blog": HTMLblog.replace("%data%",bloglink),
    "location": HTMLlocation.replace("%data%","07003")},
"bioPic":HTMLbioPic.replace("%data%","images/me.gif"),
"skills":skills,
"welcomeMsg":HTMLWelcomeMsg.replace("%data%","What do I do? "),

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
"location": HTMLworkLocation.replace("%data%","Parisppany, NJ"),
"desc": HTMLworkDescription.replace("%data%","call for info....too long to go into here!")
}
]
}
;

var projects = {
 "list": [
{"title": HTMLprojectTitle.replace("%data%","OTP"),
"desc": HTMLprojectDescription.replace("%data%","made a blog")
},

{"title": HTMLprojectTitle.replace("%data%","sewing"),
"desc": HTMLprojectDescription.replace("%data%","wombat")
},

{"title": HTMLprojectTitle.replace("%data%","misc"),
"desc": HTMLprojectDescription.replace("%data%","more to come....")
}
]
};

var education = {
   "schools" : [
   {
"name": "Seton Hall University",
"dates": ["1974","1978"],
"location": "South Orange, NJ",
"degree": "BS",
"majors": ["Mathematics"]
   },
    ],
   "online" :[
   {"title": "Programming Languages",
   "school": "UW",
   "prof": "Dan Grossman",
   "provider": "Coursera"
   },
   {"title": "Irrational Behaviour",
   "school": "DUP",
   "prof": "Dan Ariely",
   "provider": "Coursera"
   },
   {"title": "JavaScript Basics",
   "school": "Udacity",
   "prof": "Cameron&James",
   "provider": "Udacity"
   }
   ]
   }
;

/* I assume this is where you would "verify" your data
but that's not the quiz, is it?
the quiz is "just" a function that takes a "data" and returns a "cleaned" data
once again, not reading the instructions, or rather
doing more than the instructions require. DOH!
*/

//put it on the page //
$("#header").prepend(bio.role).prepend(bio.name);
$("#topContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);


$("#header").append(bio.bioPic).append(bio.welcomeMsg); //.append(bio.skills);

if ( bio["skills"].length !== 0) {
//$("#header").append(HTMLskillsStart);
$("#header").append(bio.skills);
};

//$("#workExperience").append(HTMLworkStart).append(work.jobs[0]["desc"]);

function displaywork() {
for (var i in work.jobs) {
var thisjob = work.jobs[i];
$("#workExperience").append(HTMLworkStart);

$(".work-entry:last").append(thisjob.employer + thisjob.title).append(thisjob.location).append(thisjob.dates).append(thisjob.desc);
};
};
displaywork();

projects.display = function () {
    for (var i in projects.list) {
    var thisproj =projects.list[i];
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last").append(thisproj.title).append(thisproj.desc);
    };
};

$("#main").append(projects.display);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(education.schools[0].name);



$("#footerContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);

//$("#main").append(internationalizeButton);

function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
	 var x = finalName.lastIndexOf(" ");
     var lastName=finalName.substr(x).toUpperCase();
	 return  finalName.substr(0,x) + lastName
	 }


