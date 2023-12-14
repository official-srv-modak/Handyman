const card = document.querySelectorAll('.projects_gr');
for(i =0; i< card.length; i++){
    
    
    card[i].addEventListener('click',function(){
        this.classList.toggle('flip');
    });
  };

  const contacts = [{
    callus: '+1 437-663-2524',
    loaction: '90 Wareen Rd, Tronto, Ontario, Canada',
    day: 'Mon-Fri 10:00 AM - 05:00 PM'
},{
    callus: '+1 437-663-2525',
    loaction: '70 Fork Rd, White Horse, Yukon, Canada',
    day: 'Mon-Fri 10:00 AM - 05:00 PM'
},{
    callus: '+1 437-663-2528',
    loaction: '11 Main Rd, Halifax, Ottowa, Canada',
    day: 'Mon-Fri 10:00 AM - 05:00 PM'
}]

const cap1 = document.querySelector('#para1');
const cap2 = document.querySelector('#para2');
const cap3 = document.querySelector('#para3');
function displayOne(){
  
    cap1.textContent = contacts[0].callus;
    cap1.classList.add('hofcontent'); 
    cap2.textContent = contacts[0].loaction;
    cap2.classList.add('hofcontent');
    cap3.textContent = contacts[0].day;
    cap3.classList.add('hofcontent'); 
    setTimeout(displayremove,3000);
}
function displayTwo(){
  
    cap1.textContent = contacts[1].callus;
    cap1.classList.add('hofcontent'); 
    cap2.textContent = contacts[1].loaction;
    cap2.classList.add('hofcontent'); 
    cap3.textContent = contacts[0].day;
    cap3.classList.add('hofcontent'); 
    setTimeout(displayremove,3000);
}
function displayThree(){
  
    cap1.textContent = contacts[2].callus;
    cap1.classList.add('hofcontent'); 
    cap2.textContent = contacts[2].loaction;
    cap2.classList.add('hofcontent'); 
    cap3.textContent = contacts[0].day;
    cap3.classList.add('hofcontent'); 
    setTimeout(displayremove,3000);
}
function display(){
    displayOne();
    setTimeout(displayTwo,4000);
    setTimeout(displayThree,8000);
}

setInterval(display,12000);

function displayremove(){
    cap1.classList.remove('hofcontent'); 
    cap2.classList.remove('hofcontent');
    cap3.classList.remove('hofcontent');
}
