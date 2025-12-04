


function aru(){
const H1 = document.querySelector("h1");
H1.style.color = 'red';
H1.style.fontSize = '60px'
H1.style.fontWeight = 'normal'
H1.style.textTransform = 'uppercase'
}
aru()

//-----------------------------------
const Head_line = document.getElementById('head_line')
Head_line.innerText = 'welcome 1434'

//------------------------------------

const light = document.getElementsByClassName('light')
for(let i = 0;   i< light.length;  i++){
light[i].style.backgroundColor = '#ecf0f1'
light[i].style.margin = '20px'
light[i].style.padding = '20px'

}

//-------------------------------------

const pp = document.getElementsByTagName('p')
for(let i = 0;  i < pp.length; i++ ){
pp[i].style.color = 'red'
}


//-------------------------------------

const ppp = document.querySelectorAll('p');
ppp.forEach(function(pera){
pera.style.backgroundColor = '#bdc3c7'
})

//-------------------------------------

document.getElementById('h31').textContent = 'hi';


document.getElementById('h32').textContent = 'kemon  ahcor';


document.getElementById('div33').innerHTML = 'valo <span>my name is arif aiyan</span> achi';

//-------------------------------------


const form = document.forms['myForm']
form.ondblclick = function(){
    alert('poron kora hoyeche')
}
//-------------------------------------

const children = document.children;
console.log(children);
  

const body = document.body;
body.style.backgroundColor = '#006266'

//------------------------------------


const img = document.getElementById('myImage');
img.setAttribute('src', 'download.jpeg');
img.setAttribute("alt", "new image");
//-----------------------------------

function getLink(){
const link = document.getElementById('myLink');
const url = link.getAttribute('href')
alert('link url:' + url)
}

//-----------------------------------
const div = document.getElementsByClassName('myDiv');
div[0].classList.add("newStyle")

const newpera = document.getElementById('myperagraph')
newpera.classList.add('newpera')


const h5 = document.getElementById('h5id')
h5.classList.remove('h5class')
//-----------------------------------


const parent = document.getElementById('parent');
const newdiv = document.createElement('p')
newdiv.textContent = 'i am new div'
parent.appendChild(newdiv)






























































































































































































































































































































































































