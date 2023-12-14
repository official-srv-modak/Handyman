window.addEventListener('scroll', function() {
    let header = document.querySelector('.fixed-header');
    let nava = document.querySelectorAll('.navlink');
    let title = document.querySelector('#title1');
    
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      
   
      title.classList.remove('colorchange');
      title.classList.add('colorblue');
      for(i =0; i< nava.length; i++){
        nava[i].classList.remove('colorchange');
        nava[i].classList.add('colorblue');
      }
      
    } else {
      header.classList.remove('scrolled');
   
      title.classList.add('colorchange');
      title.classList.remove('colorblue');
      for(i =0; i< nava.length; i++){
        nava[i].classList.add('colorchange');
        nava[i].classList.remove('colorblue');
}
}
});


function validateForm() {
  // Reset error messages
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('messageError').innerText = '';

  var nameInput = document.getElementById('nameInput').value;
  var emailInput = document.getElementById('emailInput').value;
  var messageInput = document.getElementById('messageInput').value;

  // Basic validation
  if (nameInput.trim() === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      return false;
  }

  if (emailInput.trim() === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      return false;
  }

  if (messageInput.trim() === '') {
      document.getElementById('messageError').innerText = 'Message is required';
      return false;
  }

  // Additional validation for the email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput)) {
      document.getElementById('emailError').innerText = 'Enter a valid email address';
      return false;
  }

}


const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    // Function to show the next pair of testimonials with a fading effect
    function showNextTestimonialPair() {
        // Hide the current pair of testimonials
        for (let i = 0; i < 2; i++) {
            testimonials[currentTestimonialIndex + i].classList.add('hidden');
        }

        // Move to the next pair of testimonials
        currentTestimonialIndex = (currentTestimonialIndex + 2) % testimonials.length;

        // Show the next pair of testimonials with a fading effect
        for (let i = 0; i < 2; i++) {
            testimonials[currentTestimonialIndex + i].classList.remove('hidden');
            testimonials[currentTestimonialIndex + i].classList.add('fade-in');
        }

        // Schedule the next pair of testimonials to be shown after a delay
        setTimeout(showNextTestimonialPair, 3000); // Adjust the delay (in milliseconds) as needed
    }

    // Initial setup
    showNextTestimonialPair();

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    
    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      var fullName = document.getElementById('full-name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;
      
      // Form validation logic here
      
      // For demonstration, log the form data to the console
      console.log(fullName, email, phone, message);
      
      // You would typically send the form data to a server here
      
      // Optionally, clear the form or give feedback to the user
      alert('Thank you for your message, ' + fullName + '!');
      this.reset(); // This will clear the form
    });

    
    function bookService(serviceName) {
        // Placeholder for booking logic
        alert('You are booking: ' + serviceName);
        // Here you can open a modal, redirect to a booking page, or handle the logic directly
    }


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