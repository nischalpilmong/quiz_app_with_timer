//getting all the required elements
const start__btn = document.querySelector('.start__btn button');
const info__box = document.querySelector('.info__box'); 
const exit__btn = document.querySelector('.buttons .quit');
const continue__btn = document.querySelector('.buttons .restart');
const quiz__box = document.querySelector('.quiz__box');
const next__btn = document.querySelector('.next__btn');
const option__list = document.querySelector('.option__list');
const timeCount = document.querySelector('.timer__sec');
const timeLine = document.querySelector('header .time__line');
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
    startTimer(15);
    startTimerLine(0);
});

let timeValue = 15;
let que__count = 0;
let num_ques = 1;
let counter;
let counterLine;
let widthValue = 0;
let userScore = 0;


const result__box = document.querySelector('.result__box');
const restart__quiz = result__box.querySelector('.buttons .restart');
const quit__quiz = result__box.querySelector('.buttons .quit');


//If Next button is clicked
next__btn.addEventListener('click', function(){
   if(que__count < questions.length - 1){
      que__count++;
      num_ques++;
      //console.log(que__count);
      showQuestion(que__count);
      questionCounter(num_ques);
      clearInterval(counter);
      startTimer(timeValue);
      clearInterval(counterLine);
      startTimerLine(widthValue);
   }else{
      console.log('questions completed');
      showResultBox();
   } 
   
   next__btn.style.display = 'none';
});

//getting questions and options from the array
function showQuestion(index){
   const que__text = document.querySelector('.que__text');
   const option__list = document.querySelector('.option__list');
   let que__tag = `<span>${questions[index].num}. ${questions[index].question}</span>`;
   let option__tag = `
                     <div class="option"><span>${questions[index].options[0]}</span></div> 
                     <div class="option"><span>${questions[index].options[1]}</span></div>
                     <div class="option"><span>${questions[index].options[2]}</span></div>
                     <div class="option"><span>${questions[index].options[3]}</span></div>
                    `;
   que__text.innerHTML = que__tag;
   option__list.innerHTML = option__tag;
   
   const option = option__list.querySelectorAll('.option');
   //console.log(option);
   for(let i = 0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
      //console.log(option[i]);
   }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
   clearInterval(counter);
   clearInterval(counterLine);
   let userAns = answer.textContent;
   let correctAns = questions[que__count].answer;
   
   if(userAns == correctAns){
       userScore += 1;
       console.log(userScore);
       answer.classList.add('correct');
       console.log('Answer is correct');
       answer.insertAdjacentHTML('beforeend', tickIcon);
   }else{
       answer.classList.add('incorrect');
       console.log('Answer is wrong');
       answer.insertAdjacentHTML('beforeend', crossIcon);

       //if answer is incorrect, then automatically select the correct answer
       for(let i = 0; i < option__list.children.length; i++){
         if(option__list.children[i].textContent == correctAns){
            option__list.children[i].setAttribute('class', 'option correct');
            option__list.children[i].insertAdjacentHTML('beforeend', tickIcon);
         }
      }
   }

   //once user select the option, all options should be disabled
   for(let i = 0; i < option__list.children.length; i++){
      option__list.children[i].classList.add('disabled');
   }

   next__btn.style.display = 'block';
}


function questionCounter(index){
   const bottom__question__counter = quiz__box.querySelector('.total__que');
   let totalQuesCountTag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions';
   bottom__question__counter.innerHTML = totalQuesCountTag;
}


function showResultBox(){
   info__box.classList.remove('activeInfo');
   quiz__box.classList.remove('activeQuiz');
   result__box.classList.add('activeResult');
   const score__text = document.querySelector('.score__text');
   if(userScore > 3){
      let scoreTag = '<span> and congrats!! You got <p>' + userScore + 
              '</p> out of <p>' +  questions.length + '</p></span>';
      score__text.innerHTML = scoreTag;        
   } else if(userScore > 1){
      let scoreTag = '<span> and nice!! You got only<p>' + userScore + 
              '</p> out of <p>' +  questions.length + '</p></span>';
      score__text.innerHTML = scoreTag; 
   } else{
      let scoreTag = '<span> and sorry!! You got only<p>' + userScore + 
              '</p> out of <p>' +  questions.length + '</p></span>';
      score__text.innerHTML = scoreTag; 
   }
}


function startTimer(time){
     counter = setInterval(timer, 1000);
     function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
           timeCount.textContent = '0' + timeCount.textContent;
        }
        if(time < 0){
           clearInterval(counter);
           timeCount.textContent = '00';
        }
     }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
       time += 1;
       timeLine.style.width = time + 'px';
       if(time > 549){
          clearInterval(counterLine);
       }
    }
}