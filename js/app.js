//getting all the required elements
const start__btn = document.querySelector('.start__btn button');
const info__box = document.querySelector('.info__box'); 
const exit__btn = document.querySelector('.buttons .quit');
const continue__btn = document.querySelector('.buttons .restart');
const quiz__box = document.querySelector('.quiz__box');


//If Start Quiz Button Is Clicked
start__btn.addEventListener('click', () => {
   info__box.classList.add('activeInfo');
});

//If Exit Button Is Clicked
exit__btn.addEventListener('click', () => {
   info__box.classList.remove('activeInfo');
});

//If Continue Button Is Clicked
continue__btn.addEventListener('click', () => {
    info__box.classList.remove('activeInfo');
    quiz__box.classList.add('activeQuiz');
});
