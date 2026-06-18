import Card from "./components/card"

const App = () => {
  return (
    <div className="parent">
    <Card user='arif' age={18} post='সমস্যা হলো React component এর নাম অবশ্যই Capital Letter দিয়ে শুরু হতে হবে।' img='https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg'   
    />


    <Card user='sharif' age={20} post='সমস্যা হলো React component এর নাম অবশ্যই Capital Letter দিয়ে শুরু হতে হবে।' img='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg'
    />



    <Card user='rayhan' age={22} post='কেন Capital Letter দরকার? React rule:
    Component = Capital Letter
    HTML tag = small letter' img='https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg'
    />
    

    <Card user='jui' age={22} post='সমস্যা হলো React component এর নাম অবশ্যই Capital Letter দিয়ে শুরু হতে হবে।' img='https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg'   
    />


    <Card user='orchita' age={25} post='সমস্যা হলো React component এর নাম অবশ্যই Capital Letter দিয়ে শুরু হতে হবে।' img='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg'
    />



    <Card user='akash das' age={25} post='কেন Capital Letter দরকার? React rule:
    Component = Capital Letter
    HTML tag = small letter' img='https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg'
    />
   
    </div>
  )
}

export default App