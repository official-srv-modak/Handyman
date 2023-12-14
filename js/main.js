window.onload = function () {
    document.getElementById('submit1').onclick = forButton;
    
  };

  //following code is dynamically add fields in a form

function show(){
    let shape = document.querySelector('.shape');
    let circle = document.querySelector('.circle');
    let rect = document.querySelector('.rect');
    if((document.querySelector('#service_gar').checked === true )||(document.querySelector('#service_pool').checked === true)){
        shape.classList.add('active');
        if((document.querySelector('#option1').checked === true) ){
            circle.classList.remove('active');
            rect.classList.add('active');
        }
        else if((document.querySelector('#option2').checked === true) ){
            rect.classList.remove('active');
            circle.classList.add('active');
        }

    }
    else{
        shape.classList.remove('active');
        circle.classList.remove('active');
        rect.classList.remove('active');
    }    
}

//following code is to validate the entered values by user in free quoate form
function validationName(){
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone_number');
    let llen =document.querySelector('#llength');
    let lwid = document.querySelector('#lwidth');
    let len =document.querySelector('#length');
    let wid =document.querySelector('#width');
    let rad =document.querySelector('#radius');
   
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
        email.nextElementSibling.innerHTML = '!';
        email.classList.remove('bordernormal');
        email.classList.add('borderclass');
        }

    if(phone.value === ''){
        phone.nextElementSibling.innerHTML = '!';
        phone.classList.remove('bordernormal');
        phone.classList.add('borderclass');  
    }
    else if(!(phone.value.match(/^\d{10}$/g))){
        phone.nextElementSibling.innerHTML = '!';
        phone.classList.remove('bordernormal');
        phone.classList.add('borderclass');  
    }
    else {
        phone.nextElementSibling.innerHTML = '!';
        phone.classList.remove('bordernormal');
        phone.classList.add('borderclass');
        }
    
    if(llen.value === ''){
        llen.nextElementSibling.innerHTML = '!';
        llen.classList.remove('bordernormal');
        llen.classList.add('borderclass');  
    }
    else if(!(parseFloat(llen.value) > 0)){
        llen.nextElementSibling.innerHTML = '!';
        llen.classList.remove('bordernormal');
        llen.classList.add('borderclass');  
    }
    else {
        llen.nextElementSibling.innerHTML = '!';
        llen.classList.remove('bordernormal');
        llen.classList.add('borderclass');
        }
    
    if(lwid.value === ''){
        lwid.nextElementSibling.innerHTML = '!';
        lwid.classList.remove('bordernormal');
        lwid.classList.add('borderclass');  
    }
    else if(!(parseFloat(lwid.value) > 0)){
        lwid.nextElementSibling.innerHTML = '!';
        lwid.classList.remove('bordernormal');
        lwid.classList.add('borderclass');  
    }
    else {
        lwid.nextElementSibling.innerHTML = '!';
        lwid.classList.remove('bordernormal');
        lwid.classList.add('borderclass');
        }
    
    if(len.value === ''){
        len.nextElementSibling.innerHTML = '!';
        len.classList.remove('bordernormal');
        len.classList.add('borderclass');  
    }
    else if(!(parseFloat(len.value) > 0)){
        len.nextElementSibling.innerHTML = '!';
        len.classList.remove('bordernormal');
        len.classList.add('borderclass');  
    }
    else {
        len.nextElementSibling.innerHTML = '!';
        len.classList.remove('bordernormal');
        len.classList.add('borderclass');
        }
    
    if(wid.value === ''){
        wid.nextElementSibling.innerHTML = '!';
        wid.classList.remove('bordernormal');
        wid.classList.add('borderclass');  
    }
    else if(!(parseFloat(wid.value) > 0)){
        wid.nextElementSibling.innerHTML = '!';
        wid.classList.remove('bordernormal');
        wid.classList.add('borderclass');  
    }
    else {
        wid.nextElementSibling.innerHTML = '!';
        wid.classList.remove('bordernormal');
        wid.classList.add('borderclass');
        }
    
    if(rad.value === ''){
        rad.nextElementSibling.innerHTML = '!';
        rad.classList.remove('bordernormal');
        rad.classList.add('borderclass');  
    }
    else if(!(parseFloat(rad.value) > 0)){
        rad.nextElementSibling.innerHTML = '!';
        rad.classList.remove('bordernormal');
        rad.classList.add('borderclass');  
    }
    else {
        rad.nextElementSibling.innerHTML = '!';
        rad.classList.remove('bordernormal');
        rad.classList.add('borderclass');
        }
           
}

//following code is used to calculate the area and display the quote amount based on certain conditions
function areaQuote(){

    let p = document.querySelector('#finalquote');
    let llen =document.querySelector('#llength');
    let lwid = document.querySelector('#lwidth');
    let len =document.querySelector('#length');
    let wid =document.querySelector('#width');
    let rad =document.querySelector('#radius');
    
    let costPerSquareFeet = 18.50;
    let labourChargePerhour = 15.25;
    let hours;
    let labour;
    let quote = 0;
    let area;
    if(document.querySelector('#service_gar').checked === true ){
        if((document.querySelector('#option1').checked === true) ){
            area_lawn = parseFloat(llen.value) * parseFloat(lwid.value);
            area = parseFloat(len.value) * parseFloat(wid.value);
            if(area < area_lawn){
                if(area <= 500){
                    labour = 2;
                    hours = 15;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else if(area <= 1000){
                    labour = 5;
                    hours = 40;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else{
                    p.innerHTML = "Meet us"
                }
            }
            else
                p.innerHTML = "Re-enter Garden Dimensions";

        }
        else if((document.querySelector('#option2').checked === true) ){
            area_lawn = parseFloat(llen.value) * parseFloat(lwid.value);
            area = Math.PI * parseFloat(rad.value) * parseFloat(rad.value);
            if(area < area_lawn){
                if(area <= 500){
                    labour = 2;
                    hours = 15;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else if(area <= 1000){
                    labour = 5;
                    hours = 40;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else{
                    p.innerHTML = "Meet us"
                }
            }
            else
                p.innerHTML = "Re-enter Garden Dimensions";
        }
    }
    if(document.querySelector('#service_pool').checked === true){
        if((document.querySelector('#option1').checked === true) ){
            area_lawn = parseFloat(llen.value) * parseFloat(lwid.value);
            area = parseFloat(len.value) * parseFloat(wid.value);
            
            if(area < area_lawn){
                if(area <= 500){
                    labour = 3;
                    hours = 25;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else if(area <= 1000){
                    labour = 7;
                    hours = 72;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else{
                    p.innerHTML = "Meet us"
                }
            }
            else
                p.innerHTML = "Re-enter Pool Dimensions";

        }
        else if((document.querySelector('#option2').checked === true) ){
            area_lawn = parseFloat(llen.value) * parseFloat(lwid.value);
            area = Math.PI * parseFloat(rad.value) * parseFloat(rad.value);
            if(area < area_lawn){
                if(area <= 500){
                    labour = 3;
                    hours = 25;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else if(area <= 1000){
                    labour = 7;
                    hours = 72;
                    quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
                    
                }
                else{
                    p.innerHTML = "Meet us"
                }
            }
            else
                p.innerHTML = "Re-enter Pool Dimensions";
        } 
    }
    if(document.querySelector('#service_land').checked === true){
        area = parseFloat(llen.value) * parseFloat(lwid.value);
        if(area <= 500){
            labour = 4;
            hours = 25;
            quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
        }
        else if(area <= 1000){
            labour = 6;
            hours = 72;
            quote = quote + (area * costPerSquareFeet) + (hours * labourChargePerhour) * labour;
            
        }
        else{
            p.innerHTML = "Meet us"
        }
        
    }
    if (quote > 0)
            p.innerHTML = "Initial Quote is " + quote.toFixed(2) + "$"

}
function forButton(){
    validationName();
    areaQuote();
}

//following code is for FAQ toggle
const accordian = document.querySelectorAll('.content-con');
for(i =0; i< accordian.length; i++){
   
    accordian[i].addEventListener('click', function(){
        this.classList.toggle('active1');
        
    })
};

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


function toggleMenu() {
if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    menu.classList.remove("colorWhite");
} else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    menu.classList.add("colorWhite");

}
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
}
)

//following code is for Sticky header effect on scroll. 
window.addEventListener('scroll', function() {
    let header = document.querySelector('.fixed-header');
    let nava = document.querySelectorAll('.navlink');
    let title = document.querySelector('#title1');
    const hamburger= document.querySelector(".hamburger");

    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      hamburger.style.color="black";
      hamburger.classList.remove("colorWhite");
      title.classList.remove('colorchange');
      title.classList.add('colorblue');
      for(i =0; i< nava.length; i++){
        nava[i].classList.remove('colorchange');
        nava[i].classList.add('colorblue');
      }
      
    } else {
     // hamburger.classList.add("colorWhite");
      header.classList.remove('scrolled');
      title.classList.add('colorchange');
      hamburger.style.backgroundcolor="transparent";
      hamburger.style.color="white";
      title.classList.remove('colorblue');
      for(i =0; i< nava.length; i++){
        nava[i].classList.add('colorchange');
        nava[i].classList.remove('colorblue');
      }
    }
  });
  function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

  


