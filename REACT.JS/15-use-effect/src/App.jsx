  import { useEffect, useState } from 'react'

  const App = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  function aclick(){
    seta(a + 1)
    console.log('a এর ভ্যালুর পরিবরিাতত হচ্ছে।');
  }
  function bclick(){
    setb(b - 1)
    console.log('b এর ভ্যালুর পরিবরিাতত হচ্ছে।');
  }

  useEffect(function(){
    aclick

  },[a])
  useEffect(function(){
    bclick

  },[b])


  return (
    <div>
      <h1>A {a}</h1>
      <h1>B {b}</h1>
      <button onClick={
        aclick
      } >click A</button>
      <button onClick={
        bclick
      } >click B</button>
    </div>
  )
}

export default App