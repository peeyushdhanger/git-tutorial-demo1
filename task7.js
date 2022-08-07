//TRAVERSING THE DOM
//Look up and down, parent, child, siblings
var itemList = document.querySelector('#items');
//PARENT NODE 
//also can use parentElement at place of parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//CHILD NODES
//it will show text node in line break
console.log(itemList.childNodes);

//CHILDREN NODES
//it will not show line break in text node
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//FIRST CHILD
//it also work like CHILD NODES
console.log(itemList.firstChild);
//FIRST ELEMENT CHILD
// it will work like children nodes
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

//LAST CHILD
//work same like firstchild
console.log(itemList.lastChild);
//LAST ELEMENT CHILD
//same work like first element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello';


//NEXT SIBLING
//just  like first child, firstElement, last child, lastElement, nextsiblings also have nextElementSiblings.
console.log(itemList.nextSibling);
//NEXT ELEMENT SIBLINGS
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.textContent = 'red';

//PREVIOUS  SIBLING
console.log(itemList.previousSibling);
//PREVIOUS  ELEMENT SIBLINGS
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'red';

//CREATE ELEMENT

//CREATE A DIV
var newDiv = document.createElement('div');

//Add class
newDiv.className = 'Hello';

//Add id
newDiv.id = 'Hello1';

//Add attr

newDiv.setAttribute('title', 'Hello Div');

//CREATE TEXT NODE
var newDivText = document.createTextNode('Hello World')

//ADD TEXT TO DIV
newDiv.appendChild(newDivText);

//Now go head and add HEllo word before Item Lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);




