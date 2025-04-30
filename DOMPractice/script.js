//this will override all elements inside main
// document.getElementById("main").innerHTML = "added to main  from js";

// this will only impact the inside-main
document.getElementById("inside-main").innerHTML =
  "added to inside-main p tag from js";

const elements = document.getElementsByClassName("same-classes");
for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "updated from js";
}

const ele = document.getElementsByTagName("h3");

ele[1].innerHTML = "edited from js";

let para = document.createElement("p");
let data = document.createTextNode("new element from js");
para.appendChild(data);
document.getElementById("demo").appendChild(para);
