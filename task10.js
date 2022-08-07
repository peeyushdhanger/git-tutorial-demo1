
//localStorage.setItem('Name', 'value')
// console.log(localStorage.getItem('${Name.value}'))
// localStorage.setItem('email', 'value')
// console.log(localStorage.getItem('email'))
//localStorage.setItem(`${Name.value}`,`${Mail.value}`)

//localStorage.removeItem('name')

//sessionStorage.setItem('name', 'pragya')
 //console.log(sessionStorage.getItem('pragya'))
 //sessionStorage.removeItem('name')

 //update value
 //sessionStorage.setItem('name', 'rajeev')

//  document.cookie = 'name=pragya; expires=' + new Date(9999, 0, 1).toUTCString()
//  document.cookie = 'lastName=pal; expires=' + new Date(9999, 0, 1).toUTCString()

//  console.log(document.cookie)

const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();

let a=JSON.stringify(
    {
    'name': nameInput.value,
    'email': emailInput.value
    
})
localStorage.setItem(nameInput.value, a)
//static that will override one object
//localStorage.setItem('name', a)
console.log(localStorage.getItem(nameInput.value))


    //localStorage.removeItem('name')

    //for console
    // console.log(nameInput.value);
    // console.log(emailInput.value);

    // for msg alert
    // if(nameInput.value ==="" || emailInput.value ===""){
    //     msg.classList.add('error');
    //     msg.innerHTML = 'please enter all fields';
    // }
    // else{
    // console.log('success')
    // }


}


