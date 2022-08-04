//console.log(document.all);
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = 'green';
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';
items[4].style.fontWeight='bold';

//GIVES ERROR
// items.syle.backgroundcolor = 'grey';

// for(var i=0; i<style.length; i++){
// items[1].style.backgroundColor = 'grey';
// }