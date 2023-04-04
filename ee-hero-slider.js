const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const images = document.querySelector('.slider-crossfade').children;
const totalImages = images.length;
let currentIndex = 0;

//Event listeners to previous and next buttons
previous.addEventListener('click', () => {
    previousImage();
})
next.addEventListener('click', () => {
    nextImage();
})

setInterval(() => {
    nextImage();
}, 6000);

//Function to go to next image
function nextImage() {
    images[currentIndex].classList.remove('main');
    if (currentIndex == totalImages - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    images[currentIndex].classList.add('main');
}

//Function to go to previous image
function previousImage() {
    images[currentIndex].classList.remove('main');
    if (currentIndex == 0) {
        currentIndex = totalImages - 1;
    }
    else {
        currentIndex--;
    }
    images[currentIndex].classList.add('main');
}