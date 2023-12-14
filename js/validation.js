window.onload = function () {
    document.getElementById('submit1').onclick = valid;
    
  };

  //following code validates the email and name of the person for contact forms
let valid = () =>{
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');

    console.log(name);
    if(name.value === ''){
        name.nextElementSibling.innerHTML = '!';
        name.classList.remove('bordernormal');
        name.classList.add('borderclass');
        
    }
    else if(!(name.value.match(/^[a-zA-Z ]+$/))){
        name.nextElementSibling.innerHTML = '!';
        name.classList.remove('bordernormal');
        name.classList.add('borderclass');
        
    }
    else {
            name.nextElementSibling.innerHTML = '*';
            name.classList.remove('borderclass');
            name.classList.add('bordernormal');
            
          }

    if(email.value === ''){
        email.nextElementSibling.innerHTML = '!';
        email.classList.remove('bordernormal');
        email.classList.add('borderclass');
        
    }
    else if(!(email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))){
        email.nextElementSibling.innerHTML = '!';
        email.classList.remove('bordernormal');
        email.classList.add('borderclass');
        
    }
    else {
        email.nextElementSibling.innerHTML = '*';
        email.classList.remove('borderclass');
        email.classList.add('bordernormal');
        }
}