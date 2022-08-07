var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

//Form submit Event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);

//Filter Event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    //console.log(1);

//Get input value
var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li');
//Add class
li.className = 'list-group-item';
//console.log(li);
//Add text node with input value
li.appendChild(document.createTextNode(newItem));

//create delete button element
var deleteBtn = document.createElement('button');

//Add classess to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Apend text node
deleteBtn.appendChild(document.createTextNode('X'));

//Apend button to li
li.appendChild(deleteBtn);

//apend li to list
itemList.appendChild(li);

}
//Remove item
function removeItem(e){
   // console.log(1);
   if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li= e.target.parentElement;
        itemList.removeChild(li);
    }
   }
}
//Filter Items
function filterItems(e){
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    console.log(text);
}