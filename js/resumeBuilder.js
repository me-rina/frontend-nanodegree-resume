
/* JS Basics Course
* Udacity
* author: amr
* date: 2-Jan-2015
*
*/


/*
var firstname= "james";
var at = "I am " + firstname + " crabby";
var newat =at.replace("crabby","hungry");
//$("#main").append(newat);
console.log(at);
// console.log(newat);
console.log("This is B4",HTMLheaderName);
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
bio.contactGeneric=HTMLcontactGeneric.replace("%contact%","").replace("%data%",bio.contact)

var work= {
"position": HTMLworkTitle.replace("%data%","retired"),
"employer": "me",
"city": "Bloomfield,NJ",
"yearsWorked": "2012 - Present"
};
var edu = {
"schoolName": "Seton Hall University",
"yearsAttended": "1974 - 1978",
"schoolCity": "South Orange, NJ"
};

//put it on the page //
$("#header").prepend(bio.role).prepend(bio.name);
$("#topContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);


$("#header").append(bio.bioPic).append(bio.welcomeMsg).append(bio.skills);

$("#workExperience").append(HTMLworkStart).append(work["position"]).append(work["city"]);

$("#education").append(HTMLschoolStart).append(edu.schoolName);


$("#footerContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);



