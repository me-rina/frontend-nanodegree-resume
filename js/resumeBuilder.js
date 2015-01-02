
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
var skills = ["SQL, ","Support, ","Programming, ","Other Stuff "]
var formattedName=HTMLheaderName.replace("%data%","Anne Marie Rossi");
var formattedRole=HTMLheaderRole.replace("%data%","Factotum");
var bio = {
//key: value pairs
"name": formattedName,
"role": formattedRole,
"contactGeneric": HTMLcontactGeneric.replace("%contact%","Call me ").replace("%data%","+1 973.743.5968"),
"bioPic":HTMLbioPic.replace("%data%","images/me.gif"),
"skills":skills,
"welcomeMsg":HTMLWelcomeMsg.replace("%data%","What do I do? ")
};

$("#header").append(bio.name).append(bio.role).append(" ").append(bio.contactGeneric).append(bio.welcomeMsg).append(bio.skills).append(bio.bioPic);



