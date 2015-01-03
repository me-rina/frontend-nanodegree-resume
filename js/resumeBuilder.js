
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
 
var formattedName=HTMLheaderName.replace("%data%","Anne Marie Rossi");
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
"welcomeMsg":HTMLWelcomeMsg.replace("%data%","What do I do? ")
};
//bio.contactGeneric=HTMLcontactGeneric.replace("%contact%","").replace("%data%",bio.contact)


var work= {
"jobs": [
{
"position": HTMLworkTitle.replace("%data%","retired"),
"employer": "me",
"location": HTMLworkLocation.replace("%data%","Bloomfield,NJ"),
"dates": ["2012", "2015"],
"desc": HTMLworkDescription.replace("%data%","dilettante, mostly")
},
{"position": HTMLworkTitle.replace("%data%","Manager, Customer Support"),
"employer": HTMLworkEmployer.replace("%data%","http://klopotek.com\" target=\"_blank\">Klopotek"),
"dates": HTMLworkDates.replace("%data%",["1980", "2012"]),
"location": HTMLworkLocation.replace("%data%","Parisppany, NJ"),
"desc": HTMLworkDescription.replace("%data%","call for info....too long to go into here!")
}
]
}
;

var projects = {
"web": [
{"title": "OTP"}
],
"sewing": [
{"title": "wombat"
}
],
"misc": [
{"title": "more to come...."
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



//put it on the page //
$("#header").prepend(bio.role).prepend(bio.name);
$("#topContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);


$("#header").append(bio.bioPic).append(bio.welcomeMsg).append(bio.skills);

$("#workExperience").append(HTMLworkStart).append(work.jobs[1]["position"]).append(work["city"]);

$("#education").append(HTMLschoolStart).append(education.schools[0].name);


$("#footerContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);



