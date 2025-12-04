



// function square ( nume){
//     return nume * nume
// }

// /*
//  * name: memosqr()
//  * this function crat a clouser to implement memorization() 
//  * it initialized an empty ovjects cache to store previously calculated square.
//  * it returns an inner function optimizedsrq()
//  */

// function memosqr(){
//     let cache = {}
//     return function optimizedsrq(nume){
//         if (nume in cache){
//             return cache[nume]
//         }else{
//             const result = square(nume);
//             (cache[nume] = result);
//             return result;
//         }
//     }
// }


// const memosquare = memosqr();


// console.log(memosquare());




// function square(num){
//     return num * num ;
// }



// function memosqr(){
//     let cache = {}

//     return function optimizedsrq(num){
//         if(num in cache){
//             console.log('returning from cache');
//             return cache[num]
//         }else{
//             console.log('coumpiting square');
//             return (cache[num] = square(num))
//         }
//     }
// }

// const memosquare = memosqr();

// console.log(memosquare(12));
// console.log(memosquare(12));




function square(num){
    return num * num;
}



function memosqr (){
    let cache = {}

    return function memorization(num){
        if(num in cache){
            return cache[num]
        }else{
            return (cache[num] = square(num))
        }
    }
}



const store = memosqr()

console.log(store(20));
console.log(store(20));