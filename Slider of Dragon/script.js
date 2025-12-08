let listInfo  = document.querySelector('.list-info')
let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let listImg = document.querySelector('.list-img')
let bgs = document.querySelectorAll('.bg')


let index = 0;

nextBtn.addEventListener('click',function(){
    index = (index < 3) ? index + 1 : 3;

    listInfo.style.transform = `translateY(${index * -25}%)`;
    listImg.style.transform = `translateY(${index * -100}%)`;

   bgs[index].classList.add('active');
})
prevBtn.addEventListener('click',function(){
    indexPrev = (index > 0) ? index:0
    index = (index > 0) ? index - 1 : 0;

    listInfo.style.transform = `translateY(${index * -25}%)`;
    listImg.style.transform = `translateY(${index * -100}%)`;
    bgs[indexPrev].classList.remove('active');
})