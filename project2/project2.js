let height = document.getElementById('height')
let width = document.getElementById('width')
let button = document.getElementById('button')

let score = document.getElementById('Score')
score.style.color = 'black'
let result = document.querySelector('.result')


button.addEventListener('click', function(){
    let newHeight =  parseFloat(height.value);
    let newWidth = parseFloat(width.value);
    newHeight = newHeight / 100;
    let squHeight = newHeight * newHeight;
    
    let BMI = newWidth / squHeight;
    score.textContent = BMI.toFixed(2)
    result.style.display = 'block';
})


let form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
})





















