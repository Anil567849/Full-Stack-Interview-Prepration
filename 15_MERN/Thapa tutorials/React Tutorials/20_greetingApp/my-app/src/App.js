import React from 'react';




function App(){

  

const date = new Date();

const currTime = date.getHours();

let colorCss = {};


let greet = "";

if(currTime >= 12 && currTime <= 18){
  greet = "Good Afternoon";
  colorCss.color = "red";
}
else if(currTime > 18 && currTime <= 4){
  greet = "Good Night";
  colorCss.color = "blue";
}else{
  greet = "Good Morning";
  colorCss.color = "yellow";
}



const myCss = {
  backgroundColor : "aqua",
  height : "100vh",
  width : "100vw",
  display : "flex",
  justifyContent : "center",
  alignItems : "center"
}











  return(
    <div style={myCss}>
      <h1 style={colorCss}>Hello Sir,</h1>
      <h1 style={colorCss}>{greet}</h1>
    </div>);
}

export default App;








