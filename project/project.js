const body = document.getElementById('body')
const buttons = document.querySelectorAll('li')

// const redColor = document.querySelector('ul').addEventListener('click', function(){
//     if()
// })



buttons.forEach(function(value){
value.addEventListener('mouseenter', function(){
    let className = this.classList[0]
    let color = "";
    if(className === 'red'){
        color = '#962d21ff'
    }
    if(className === 'green'){
        color = '#267246ff'
    }
    if(className === 'blue'){
        color = '#30336b'
    }
    if(className === 'yellow'){
        color = '#e1b12c'
    }
    if(className === 'purple'){
        color = '#6F1E51'
    }



    body.style.backgroundColor = color;
    
})
})














































































