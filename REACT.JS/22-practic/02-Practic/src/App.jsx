import axios from "axios";
import React from "react";

const App = () => {
  const getData = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos")
    console.log(data.data);
  };
  
  return (
    <div>
      <button onClick={getData} className=" bg-amber-300  p-4 m-4 rounded-4xl">
        click here
      </button>
    </div>
  );
};

export default App;
