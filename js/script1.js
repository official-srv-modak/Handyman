let slideIndex = 0;

function moveSlide(step) {
    const slides = document.getElementsByClassName("card");
    if (!slides.length) return;

    slideIndex += step;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Translate the carousel
    const totalWidth = slides[0].clientWidth * slideIndex;
    for (let slide of slides) {
        slide.style.transform = `translateX(-${totalWidth}px)`;
    }
}

// Add event listeners to buttons
document.querySelector(".carousel-button.prev").addEventListener("click", function() {
    moveSlide(-1);
});

document.querySelector(".carousel-button.next").addEventListener("click", function() {
    moveSlide(1);
});


document.getElementById('testimonialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get the input values
    var name = document.getElementById('testimonialName').value;
    var message = document.getElementById('testimonialMessage').value;
    var imageFile = document.getElementById('testimonialImage').files[0];

    // Create the card and its inner elements
    var card = document.createElement('div');
    card.classList.add('card');

    var cardflex = document.createElement('div');
    cardflex.classList.add('cardflex');

    if (imageFile) {
        var img = document.createElement('img');
        img.src = URL.createObjectURL(imageFile);
        img.alt = "User's Testimonial";
        cardflex.appendChild(img);
    }

    var cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = name;
    cardflex.appendChild(cardTitle);

    card.appendChild(cardflex);

    var cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.textContent = message;
    card.appendChild(cardText);

    // Append the new card to the testimonials section
    document.querySelector('.testimonials').appendChild(card);

    // Clear the form
    document.getElementById('testimonialName').value = '';
    document.getElementById('testimonialMessage').value = '';
    document.getElementById('testimonialImage').value = '';
});
