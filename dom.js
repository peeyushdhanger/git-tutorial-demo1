//EXAMINE THE DOCUEMENT OBJECT//
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'hello';
headerTitle.innerText = 'goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px black';

const add = document.all[14]
add.innerText = 'ADDITEMS'
add.style.color='green';



// var items = document.getElementsByClassName('list-group-item');
// console.log(items);