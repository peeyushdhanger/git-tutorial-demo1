//QUERYSELECTOR//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.hidden = 'true';

// QUERYSELECTORALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
//titles[1].textContent = 'Hey';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor= 'green';
}

// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<=even.length; i++){
//     even[i].style.backgroundColor= 'yellow';
// }

// var secondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
// console.log(secondIte);
// secondItem.style.color = 'blue';

var secondItem = document.querySelectorAll('li');
//console.log(secondItem);
secondItem[1].style.color = 'green';

// diffrence between querySelector and querySelectorAll
// querySelector() methodcan only be used to access a single element while querySelectorAll() method can be used to access all elements which match with a specified CSS selector.



