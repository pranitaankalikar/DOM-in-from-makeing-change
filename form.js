/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links); */

//// getelementId
var headerTitle= document.getElementById("header title");
var mainheader= document.getElementById("main header");
//console.log(headerTitle);
headerTitle.textContent="hello";
//headerTitle.innerHTML="good bye"
mainheader.style.borderBottom='solid 3px #000';
var additem=document.getElementById("additem")
additem.style.color="green";
