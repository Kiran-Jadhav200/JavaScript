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