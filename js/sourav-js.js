document.addEventListener("DOMContentLoaded", function () {
    // Storing all the image sources in an array
    var imageSources = [
        "../images/HY2-1.jpg",
        "../images/BY1.jpg",
        "../images/HY3.webp",
        "../images/HY4.jpg"
    ];


    function loadImages() { // this is to load the images
        var projects = document.querySelectorAll(".projects .projld");
        let count = 0;
        projects.forEach(function (projld, index) {
            var aTag = document.createElement("a"); // new a tag
            count++;
            switch(count)
            {
                case 1:
                    aTag.href = "handyman_home.html";
                    break;
                case 2:
                    aTag.href = "landscape_main.html";
                    break;
                
            }

            var imgTag = document.createElement("img"); // new img tag
            imgTag.src = imageSources[index];
            imgTag.alt = "Image " + (index + 1);

            aTag.appendChild(imgTag);

            projld.appendChild(aTag);

            var pTag = document.createElement("p"); // new p tag
            projld.appendChild(pTag);
        });
    }

    loadImages();
});