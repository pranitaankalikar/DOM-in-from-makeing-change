
/////// Query selector /////////

//var header=document.querySelector('.main header');
//header.style.borderBottum='solid 4px #ccc';
var input=document.querySelector('input');
input.value='Name';

var item= document.querySelector('.list-group-item');
item.style.color='red';

//// making second element green
var itemsecond = document.querySelector('.list-group-item:nth-child(2)');
itemsecond.style.backgroundColor='green';

/// making third item invisible
var itemthird= document.querySelector('.list-group-item:nth-child(3)');
itemthird.style='display: none';





