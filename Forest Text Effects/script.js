let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let slides = document.querySelectorAll('.slide')
let numberOfSlides = slides.length;

let slideNumber = 0;

nextBtn.onclick = () =>{
   slides.forEach((slide) =>{
    slide.classList.remove('active')
   })

    slideNumber++;

    if(slideNumber> (numberOfSlides - 1)){
        slideNumber = numberOfSlides - 1;
        
     nextBtn.style.opacity = "0.3"
     nextBtn.style.pointerEvents = "none"

    }

    slides[slideNumber].classList.add('active')
}

prevBtn.onclick = () =>{
   slides.forEach((slide) =>{
    slide.classList.remove('active')
   })

    slideNumber--;

    if(slideNumber< 0){
        slideNumber = 0;
    }
     nextBtn.style.opacity = '1'
     nextBtn.style.pointerEvents = "auto"

    slides[slideNumber].classList.add('active')
}