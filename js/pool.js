//The following code is for slideof testimonials
new Glider(document.querySelector('.glider'),{
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
{

breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
itemWidth: 150,
duration: 0.25
}
}
]

    

});
//The following code is forimplemation of modal for images
const images = ["../images/pool_lnd2.jpg", "../images/pool_lnd3.jpg", "../images/pool_lnd4.jpg"];
const altimg = ["first", "second", "third"];
let openBtn = document.querySelectorAll('.open-btn');
let modalContainer = document.querySelector('.modal-container');
let modalimg = document.querySelector('#modal_img');
let closeBtn = document.getElementById('close');

for(i =0; i<openBtn.length; i++){
        openBtn[i].addEventListener('click', function(){
            for(let j=0; j<altimg.length; j++){
                if(this.alt === altimg[j]){
                    modalimg.src = images[j];
                    modalContainer.style.display = 'block';
                }
        }
        
        })
        
        closeBtn.addEventListener('click', function(){
            modalContainer.style.display = 'none';

        })

        window.addEventListener('click',function(e){

            if(e.target === modalContainer){
                modalContainer.style.display = 'none';
            }
        });
    }
