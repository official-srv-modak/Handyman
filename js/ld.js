//The following code is forimplemation of modal for images

const images = ["../images/FY1.jpg", "../images/BY1.jpg", "../images/FY2.jpg", "../images/BY2.jpg"];
const altimg = ["first", "second", "third", "fourth"];
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
