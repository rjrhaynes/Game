let startScreen = document.querySelector('.main');
console.log(startScreen);

let start = document.querySelector(".start");
console.log(start);

let questionOne = document.querySelector('.question-one');

let optionOne = document.querySelector(".option-one");
console.log(optionOne);

let optionOneScreen = document.querySelector('.option-one-screen');

let optionTwo = document.querySelector(".option-two");
console.log(optionTwo);

let optionTwoScreen = document.querySelector('.option-two-screen');
console.log(optionTwoScreen);



start.addEventListener('click', function() {
    startScreen.style.display = 'block';
    questionOne.style.display = 'none';
    console.log("started"); 
  });

questionOne.addEventListener('click', function() {
    startScreen.style.display = 'none';
    questionOne.style.display = 'block';
    console.log("question-one"); 
  });