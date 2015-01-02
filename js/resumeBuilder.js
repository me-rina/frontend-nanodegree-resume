
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
    "blog": HTMLblog.replace("%data%","outsidethepond.com"),
    "location": HTMLlocation.replace("%data%","07003")},
"bioPic":HTMLbioPic.replace("%data%","images/me.gif"),
"skills":skills,
"welcomeMsg":HTMLWelcomeMsg.replace("%data%","What do I do? ")
};
bio.contactGeneric=HTMLcontactGeneric.replace("%contact%","").replace("%data%",bio.contact)
$("#header").append(bio.name).append(bio.role);
$("#topContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);


$("#header").append(bio.bioPic).append(bio.welcomeMsg).append(bio.skills);
$("#footerContacts").append(bio.contact.email).append(bio.contact.blog).append(bio.contact.location);



