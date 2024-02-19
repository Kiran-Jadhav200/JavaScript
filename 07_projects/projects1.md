# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons =document.querySelectorAll('.button')
const body = document.querySelector("body");


buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click',(event)=>{
    console.log(event);
    console.log(event.target);
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    else if(event.target.id === 'yellow'){
        body.style.backgroundColor = event.target.id;
    }
    
    else if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
  }
  
  else if(event.target.id === 'blue'){
    body.style.backgroundColor = event.target.id;
}
else if(event.target.id === 'purple'){
  body.style.backgroundColor = event.target.id;
}
  })
})
````

## project 2

```javascript

const form = document.querySelector('form');
//this usecase will give empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(event)=>{
  event.preventDefault();
 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#results')
const weight_guide = document.querySelector('#weight-guide')

 if(height === '' || height < 0|| isNaN(height) ){
results.innerHTML = `Please give a valid height ${height}`
 }
 else if(weight === '' || weight < 0|| isNaN(weight) ){
  results.innerHTML = `Please give a valid weight ${weight}`;
   }
 else{
  const bmi = (weight / ((height*height)/10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`
  if(bmi<18.6){
    weight_guide.innerHTML = '<span>Under Weight</span>';
  }
  else if(bmi> 18.6 && bmi< 24.6){
    weight_guide.innerHTML = '<span>Normal range</span>';
  }
  else{
    weight_guide.innerHTML = '<span>overweight</span>';
  }
 }

 
})

///<p>Under Weight = Less than 18.6</p>
//<p>Normal Range = 18.6 and 24.9</p>
//<p>Overweight = Greater than 24.9</p>
```

## project 3

```javascript
const clock = document.getElementById('clock')

setInterval(()=> {
  let date = new Date();
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4
```javascript 

let randomNumber =parseInt(Math.random()*100 + 1)
console.log(randomNumber)
const   submit = document.querySelector('#subt');
const   UserInput = document.querySelector('#guessField');
const  guessSlot  = document.querySelector('.guesses');
const  remaining  = document.querySelector('.lastResult');
const  lowOrHi  = document.querySelector('.lowOrHi');
const  startOver  = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess = parseInt(UserInput.value)
    console.log(guess)
    validateGuess(guess);

  })
}

function validateGuess(guess){
  //
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }
  else if(guess<1){
    alert("Please enter a number greater than 1")

  }else if(guess>100){
    alert("Please enter a number less than 100")

  }
  else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`Your guessed it right`);
    endGame();

  }else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`);
  }
  else if(guess > randomNumber){
    displayMessage(`Number is TOOO High`);
  }
  
}

function displayGuess(guess){
UserInput.value =''
guessSlot.innerHTML += `${guess}, `
numGuess++;
remaining.innerHTML = `${11- numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  UserInput.value = ''
  UserInput.setAttribute('disabled','')
  p.classList.add('buttion');
  p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`
  startOver.appendChild(p)
  playGame =false;
  newGame();
}
function newGame(){
 const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',(e)=>{
 randomNumber =parseInt(Math.random()*100 + 1);
 prevGuess= []
 numGuess = 1
 guessSlot.innerHTML = ''
 remaining.innerHTML = `${11- numGuess}`
 UserInput.removeAttribute('disabled');
 startOver.removeChild(p);

  
  playGame = true;
})

}
```






## project 5
```javascript

```
## project 6
```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```