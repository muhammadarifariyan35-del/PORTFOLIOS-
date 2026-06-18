// // java script events

// function subscribe(){
//     document.getElementById('text').innerHTML = 'subscribed';
//     document.getElementById('btn').innerHTML = 'subscribed';
//     document.getElementById('btn').style.backgroundColor = '#130f40';
// }


// function like(){

//     document.getElementById('like').innerHTML = ' <i class="fa-solid fa-thumbs-up"></i> LIKED'
//     document.getElementById('like').style.backgroundColor = '#95afc0'
// }
// function key(){
//     document.getElementById('text').innerHTML = 'wow!  you are so cute'
    
// }
// //function onLoad(){
// //    alert('testing java script onLoad')
//  //   document.getElementById('text').innerHTML = 'website loded properly'
    
// //}
// function windowResize(){
//     document.getElementById('textarea').style.height = '200px'
//     document.getElementById('form').style.fontFamily = " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif "
    
// }


// document.getElementById('button').onclick = function (){
//     document.getElementById('button').innerHTML = 'SUBMITED'
// }




// document.getElementById('ul').addEventListener('click', function(e){
//     console.log('ul clicked');
// },
// true
// );

// document.getElementById('li').addEventListener('click', function(e){
//     console.log('li clicked');
// },
// true
// );



document.getElementById('btn').onclick = function (){
    document.getElementById('text').innerHTML = 'subscribed'
    document.getElementById('btn').innerHTML = 'subscribed'
    document.getElementById('btn').style.backgroundColor = '#7f8fa6'

}

let count = 100;
function liked(){
    count++;
    document.getElementById('button').innerHTML = `<i class="fa-solid fa-thumbs-up"></i> ${count}`
    
}






























































































