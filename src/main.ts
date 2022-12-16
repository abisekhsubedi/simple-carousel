import './style.css'

let slidePos = 0;
const slides = Array.from(document.querySelectorAll(".carousel__item"));
console.log(slides)
const totalSlides = slides.length;

function updateSlide(){
    for(let slide of slides){
        slide.classList.remove("carousel__item--visible");
        slide.classList.add("carousel__item--hidden");
    }

    slides[slidePos].classList.add("carousel__item--visible");
}

function moveNextSlide(){
    if(slidePos === totalSlides - 1){
        slidePos = 0;
        updateSlide()
        return;
    }
    slidePos++;
    updateSlide();
}

function movePrevSlide(){
    if(slidePos === 0){
        slidePos = totalSlides - 1;
        updateSlide();
        return;
    }
    slidePos--;
    updateSlide()
}
document.querySelector(".carousel__button--prev")?.addEventListener('click', () => {
    moveNextSlide();
})

document.querySelector(".carousel__button--next")?.addEventListener('click', () => {
    movePrevSlide();
})
