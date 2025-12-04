// document.querySelector('h1').innerText = "not welcome"

// ! DOM ONE---------------

/*
const box = document.querySelector('.box')
box.style.backgroundColor = '#9b59b6';
box.style.height = '200px'




document.getElementById('box').style.backgroundColor = '#636e72'



const menuItem =  document.querySelectorAll('a')
// menuItem[1].style.color = 'red'

menuItem.forEach(function (i){
i.style.color = '#e67e22';
i.style.fontSize = '24px';
}

)

const soustomClass = document.getElementsByClassName('navlink')

const convertedClass = Array.from(soustomClass)
// for (let i = 0; i < soustomClass.length; i ++){
//     console.log(soustomClass[i]);
// }

convertedClass.forEach(function (i) {
    i.style.backgroundColor = '#174957ff' 
    i.style.margin = '10px'
    i.style.padding = '10px 20px'
    i.style.textTransform = 'uppercase'
    
})


document.querySelector('.box').getAttribute('id');
document.querySelector('#boxId').getAttribute('class');


document.querySelector('#box').setAttribute('class', 'text_with')


document.querySelector('.cta').setAttribute('id', 'gta')
*/



// !  DOM TWO---------------



/*
//* মূল লেখা ঠিক রেখে নতুন কিছু এড করা।
?   let headTitle = document.querySelector("h4")
headTitle.innerHTML = headTitle.innerText + " my name is sharif"

let boxes = document.querySelectorAll('.child_box')
boxes[0].innerText = "hello!"
boxes[1].innerText = "my"
boxes[2].innerText = "name"
boxes[3].innerText = "is arif"


let nog = 1;
for(let box of boxes){
    box.innerText = `box no ${nog}`;
    nog++;
}
*/






// *createElement
let learnBtn = document.createElement('button')
learnBtn.innerText = 'Learn More';

let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn);
// heroArea.prepend(learnBtn)
// heroArea.before(learnBtn)
// heroArea.after(learnBtn)







//*addElement
// function fruits(nameF){
//     const li = document.createElement('li');
//     li.innerHTML = `${nameF}`

//     document.querySelector('ul').appendChild(li);
// }
// fruits('jam')
// fruits('batabi lebo')



//*optimaze

function fruitsOp(nameF){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameF))

    document.querySelector('ul').appendChild(li);
}
fruitsOp('kola')
fruitsOp('kathal')
fruitsOp('sorbot')
fruitsOp('sorbot')



//*edit

const editFruits = document.querySelector('li:first-child')
const fruitsEdit = document.querySelector('li:last-child')
editFruits.textContent = 'bluebarryss'
fruitsEdit.innerText = 'bluebarry'





//*replace

const newFruits = document.createElement('li')
newFruits.textContent = "hello"
editFruits.replaceWith(newFruits)




//*Edit with tag
const EditTag = document.querySelector('li:last-child')
EditTag.outerHTML = '<p>lemon</p>'



