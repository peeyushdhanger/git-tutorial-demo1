//GET ELEMENT BY TAG NAME
var li = document.getElementsByTagName('li');
console.log(li);
//console.log(li[4]);
li[4].textContent = 'item5';
//li[4].style.fontWeight = 'bold';
li[4].style.backgroundColor = 'yellow';
li[4].style.border = '2px solid grey';
li[4].style.padding = '10px';
li[4].style.margin = '2px';

// //GET ELEMENTBYCLASS NAME
var items =document.getElementsByClassName('task');
items[0].style.color ='green';
items[0].style.fontWeight='bold';



