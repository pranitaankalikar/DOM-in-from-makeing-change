/////////// Query select all////////////////

//var titles=document.querySelectorAll('.title');
//console.log(titles);  
var ele=document.querySelectorAll('.list-group-item');
console.log(ele);
ele[1].style.color='green';
for (var i=0;i<ele.length;i++){
    if(i%2==0){
        ele[i].style.backgroundColor='green';
    }
}   
