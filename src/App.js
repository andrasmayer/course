//childs
import Child1 from './components/child';
import Child2 from './components/child2';
import {ArrayFunctions} from './components/arrayFunctions';
//Hooks
import React, { useState } from "react";




function App() {
  const [clickedValue,setClickedValue]  = useState(0);
  const [color,setColor]  = useState("black");
  const myObject = {name:"Béla",age:72,gender:"male"}

  const clickHandler = () =>{
    let tempValue = clickedValue + 1;
    let tempColor = "black;"
    if(tempValue %2 === 0){ color="red";}
    else{ tempColor = "black";  }
    setColor(tempColor)
    setClickedValue(tempValue);
  }

  return (
    <div>
      <h1>Hello Hacker</h1>
      <h4>This is react</h4>
      <Child1 props={myObject} ></Child1>
      <Child2></Child2>
      <ArrayFunctions data={[1,2,3,4,5,6,7]}></ArrayFunctions>
      <div>
        <div>State próba</div>
        <button onClick={clickHandler}>Push me</button>
        {
        clickedValue < 10 ?  
          <></>
          : 
          <div style={{color:color}}>{JSON.stringify(clickedValue)}</div>
        }
      </div>
    </div>
  );
}

export default App;
