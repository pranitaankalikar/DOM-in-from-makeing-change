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
/*var headerTitle= document.getElementById("header title");
var mainheader= document.getElementById("main header");
//console.log(headerTitle);
headerTitle.textContent="hello";
//headerTitle.innerHTML="good bye"
mainheader.style.borderBottom='solid 3px #000';
var additem=document.getElementById("additem")
additem.style.color="green";        */
var items=document.getElementsByClassName("list-group-item");
console.log(items);
items[1].textContent="hello1";
items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';
for (var i = 0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}  
////// makinking bold font of items
for (var i = 0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
////
///// making 3rd element green background
items[2].style.backgroundColor='green';
