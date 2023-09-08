// For sliding the opinion section
const opinionsContainer = document.querySelector('.opinions');
const opinions = document.querySelectorAll('.opinion');
let currentIndex = 0;

function showSlide(index) {
    opinions.forEach((opinion, i) => {
        if (i === index) {
            opinion.classList.add('active-two')
        } else {
            opinion.classList.remove ('active-two');
        }
    });
}

function nextSlide() {
    console.log('hii');
    currentIndex = (currentIndex + 1) % opinions.length;
  
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 2000);

// for the imgae side of nutrition section
const imageSlider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
let curr = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    curr = (curr + 1) % images.length;
    showImage(curr);
}

function startSlider() {
    setInterval(nextImage, 2000); 
}
showImage(curr);
startSlider();


// to display the counting of achievements
function animateCounting(element, maxNumber) {
    let currentNumber = 1;
    const duration = 2000; 
    const interval = 10; 

    const step = (maxNumber - currentNumber) / (duration / interval);

    const timer = setInterval(() => {
        currentNumber += step;
        element.textContent = Math.round(currentNumber);

        if (currentNumber >= maxNumber) {
            element.textContent = maxNumber;
            clearInterval(timer);
        }
    }, interval);
}
const totalClientElement = document.getElementById('totalClient');
const newMemberElement = document.getElementById('newMember');
const awardsElement = document.getElementById('awards');
const maxTotalClient = 330;
const maxNewMember = 99;
const maxAwards = 206;
animateCounting(totalClientElement, maxTotalClient);
animateCounting(newMemberElement, maxNewMember);
animateCounting(awardsElement, maxAwards);

