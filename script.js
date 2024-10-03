var heading = document.createElement("h1");
var hMarksNode = document.createTextNode("Attendence Sheet:");
heading.appendChild(hMarksNode);

var nimraMarks = document.createElement("p");
var nMarksNode = document.createTextNode("Nimra : Present");
nimraMarks.appendChild(nMarksNode);

var anumMarks = document.createElement("p");
var aMarksNode = document.createTextNode("Anum : Absent");
anumMarks.appendChild(aMarksNode);

var nashraMarks = document.createElement("p");
var naMarksNode = document.createTextNode("Nashra : Leave");
nashraMarks.appendChild(naMarksNode);

var rabiyaMarks = document.createElement("p");
var rMarksNode = document.createTextNode("Rabiya : Absent");
rabiyaMarks.appendChild(rMarksNode);

var umaimaMarks = document.createElement("p");
var uMarksNode = document.createTextNode("Umaima : Present");
umaimaMarks.appendChild(uMarksNode);

var total = document.createElement("h4");
var totalNode = document.createTextNode("Total Students : 5");
total.appendChild(totalNode);

var present = document.createElement("h4");
var presentNode = document.createTextNode("Present : 2");
present.appendChild(presentNode);

var absent = document.createElement("h4");
var absentNode = document.createTextNode("Absent : 2");
absent.appendChild(absentNode);

var leave = document.createElement("h4");
var leaveNode = document.createTextNode("Leave : 1");
leave.appendChild(leaveNode);

var mainDiv = document.getElementById("report");

mainDiv.appendChild(heading);
mainDiv.appendChild(nimraMarks);
mainDiv.appendChild(anumMarks);
mainDiv.appendChild(nashraMarks);
mainDiv.appendChild(rabiyaMarks);
mainDiv.appendChild(umaimaMarks);
mainDiv.appendChild(total);
mainDiv.appendChild(present);
mainDiv.appendChild(absent);
mainDiv.appendChild(leave);