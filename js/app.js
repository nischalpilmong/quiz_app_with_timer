//getting all the required elements
const start__btn = document.querySelector('.start__btn button');
const info__box = document.querySelector('.info__box'); 
const exit__btn = document.querySelector('.buttons .quit');
const continue__btn = document.querySelector('.buttons .restart');
const quiz__box = document.querySelector('.quiz__box');
const next__btn = document.querySelector('.next__btn');

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
    //console.log(que__count);
    showQuestion(que__count);
    questionCounter(num_ques);
});

let que__count = 0;
let num_ques = 1;

next__btn.addEventListener('click', function(){
   if(que__count < questions.length - 1){
      que__count++;
      num_ques++;
      //console.log(que__count);
      showQuestion(que__count);
      questionCounter(num_ques);
   }else{
      console.log('questions completed');
   } 
   
});

//getting questions and options from the array
function showQuestion(index){
   const que__text = document.querySelector('.que__text');
   const option__list = document.querySelector('.option__list');
   let que__tag = `<span>${questions[index].num}. ${questions[index].question}</span>`;
   let option__tag = `
                     <div class="option">
                        <span>${questions[index].options[0]}</span>
                     </div> 
                     <div class="option">
                        <span>${questions[index].options[1]}</span>
                     </div> 
                     <div class="option">
                        <span>${questions[index].options[2]}</span>
                     </div> 
                     <div class="option">
                        <span>${questions[index].options[3]}</span>
                     </div> 
                    `;
   que__text.innerHTML = que__tag;
   option__list.innerHTML = option__tag;
}

function questionCounter(index){
   const bottom__question__counter = quiz__box.querySelector('.total__que');
   let totalQuesCountTag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions';
   bottom__question__counter.innerHTML = totalQuesCountTag;
}


