document.querySelector('.menu-btn').addEventListener('click', onMenu);

function onMenu() {
    const top = document.querySelector('.top');
    const mid = document.querySelector('.mid');
    const bottom = document.querySelector('.bottom');
    top.classList.toggle('top-cl');
    mid.classList.toggle('mid-cl');
    bottom.classList.toggle('bottom-cl');
    document.querySelector('.options').classList.toggle('nav-cl');
}

const carousel = document.querySelector('.carousel');
const carouselWidth= carousel.getBoundingClientRect().width;
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const imgs = Array.from(carousel.children);
console.log(carouselWidth);

//Set different image positions
for (let i = 0; i < imgs.length; i++) {
    const img = i * carouselWidth;
    imgs[i].style.left = img  + 'px';
}

//Add event listener on right button
right.addEventListener ('click' , 
    function moveToRight() {
    const currentImg = carousel.querySelector('.current');
    if(currentImg.nextElementSibling != null) {
        const nextImage = currentImg.nextElementSibling;
    console.log(nextImage);
    const motionDist = nextImage.style.left;
    carousel.style.transform =`translateX(-${motionDist})`;
    currentImg.classList.remove('current');
    nextImage.classList.add('current');
    } else {
        console.log('End of Carousel');
    }
    }
);


left.addEventListener ('click' , 
    function moveToLeft() {
        const currentImg = carousel.querySelector('.current');
        if(currentImg.previousElementSibling != null) {
    const prevImage = currentImg.previousElementSibling;
    console.log(prevImage);
    const motionDist = prevImage.style.left;
    carousel.style.transform =`translateX(-${motionDist})`;
    currentImg.classList.remove('current');
    prevImage.classList.add('current');
        } else {
            console.log('Beginning of Carousel')
        }
    

    
    }
);

// left.addEventListener ('click' , 
//     function moveToLeft() {
//     const currentImg = carousel.querySelector('.current');
//     const previousImage = currentImg.previousElementSibling;
//     console.log(previousImage);
//     const motionDist = previousImage.style.left;
//     carousel.style.transform =`translateX(-200px)`;
//     currentImg.classList.remove('current');
//     previousImage.classList.add('current');
//     previousImage = currentImg.previousElementSibling;
//     }
// );
