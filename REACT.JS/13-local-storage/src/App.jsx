import React from 'react'

const App = () => {





const array = {
  name:  'arif',
  age: 22
}

localStorage.setItem('user', JSON.stringify(array))

let  newf = JSON.parse(localStorage.getItem('user'))

console.log(newf.age);



  return (
    <div>Hello world</div>
  )
}

export default App