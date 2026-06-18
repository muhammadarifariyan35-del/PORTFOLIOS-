// function a(){
//     console.log('a');
// }
// console.log('end');
// a()






// const b = function(){
//     console.log('function working...');
//     let aTime = new Date().getTime();
//     while(aTime + 10 >= new Date().getTime())
//     console.log('complete');
// }
// console.log('first line');
// b()
// console.log('last line');






// console.log('hello');
// console.log('hello2');
// setTimeout(function(){
//     console.log('hello3');
// },5000)
// console.log('hello4');
// console.log('hello5');





// let coffe = new Promise((res, rej) =>{
//     let n = Math.floor(Math.random() * 10)
//     if(n <= 5 ){
//         console.log(n);
//         return res()
        
//     }else {
//         console.log(n);
//         return rej()
//     }
// })
// coffe
// .then(function(){
//     console.log('bellow');
// })
// .catch(function(){
//     console.log('avobe');
// })









// let step1 = new Promise((res, rej) =>{
//     setTimeout(function(){
//         res('step one is done')
//     },1000 )
// })


// let step2 = new Promise((res, rej) =>{
//     setTimeout(function(){
//         res('step tow is done')
//     },2000 )
// })




// step1.then(function(res){
//     console.log(res);
// })

// step2.then(function(res){
//     console.log(res);
// })


// Promise.all([step1,step2]).then(res => console.log(res))


// Promise.race([step1,step2]).then(res => console.log(res))










// let promise1 = new Promise((res, rej)=>{
//     return res('Promise one is done')
// })

// let promise2 = promise1.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res('promise two is done')
//     })
// })
// promise2.then(function(data){
//     console.log(data);
// })




// function randomUser(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(row){
//         return row.json()
//     })
//     .then(function(data){
//         console.log(data);
//     }).catch(function(){
//         console.log('no data found');
//     })
// }
// randomUser()




// function myfunck() {
//     return Promise.resolve('hello');
// }
// console.log(myfunck());



// async function namenew() {
//     return 'arif'
// }
// console.log(namenew());




// async function randomUser(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(row){
//         return row.json()
//     })
//     .then(function(data){
//         console.log(data);
//     }).catch(function(){
//         console.log('no data found');
//     })
// }
// randomUser()





async function randomUser(){
    let urlAPI = await fetch(`https://randomuser.me/api/`)
    let rawdata = await urlAPI.json();
    
    console.log(rawdata);

    
    document.getElementById('userImg').src = rawdata.results[0].picture.medium;
    
    console.log(`${rawdata.results[0].name.title}   ${rawdata.results[0].name.first}  ${rawdata.results[0].name.last}`);

    
    console.log(`${rawdata.results[0].gender}`);

    console.log(`${rawdata.results[0].location.country}`);
}
randomUser()


















































































































