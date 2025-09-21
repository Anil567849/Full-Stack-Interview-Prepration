// import "./index.css";
var React = require('react');
var ReactDOM = require('react-dom');




/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// 7 VIDEO 

// example
// ReactDOM.render(what to show, where to show, callback func )



  // what to show is called JSX and it is not a HTML, it is a JSX ELEMENT
  // JSX = javascript extension
  // JSX = javascript xml


// 1
ReactDOM.render(<h1>1 Welcome To React Anil</h1>, document.getElementById("root"));





  //2 BEHIND THE SCENE 
  ReactDOM.render( React.createElement("h2", null, "2 Welcome To React Anil"),
    document.getElementById("root")
  );








  //3 PURE JS
  var h1 = document.createElement('h1');
  h1.innerHTML = "3 Anil Welcome to react";
  document.getElementById("root").appendChild(h1);

*/








// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// 8 VIDEO 
// using multiple JSX element 
/*
// 1 method 
ReactDOM.render(
        <div>
          <h1>1 Web dev</h1>
          <p>html, css, js</p>
          <p>php, nodejs, python</p>
          <p>mongo, mysql</p>
        </div>,
        document.getElementById("root")
);
*/
/*
// 2 method array 
ReactDOM.render(
  [
    <h1>1 Web dev</h1>          ,
    <p>html, css, js</p>        ,
    <p>php, nodejs, python</p>  ,
    <p>mongo, mysql</p>
  ],
  document.getElementById("root")
);

*/




















/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// 9 VIDEO 
// use muliple jsx element using react.fragment
//Avoid creatiing multiple div use react.fragment rather than div div etc
//it won't create a div it just use to insert multiple jsx element in root div
ReactDOM.render(
  <React.Fragment>
    <h1>1 Web dev</h1>
    <p>html, css, js</p>
    <p>php, nodejs, python</p>
    <p>mongo, mysql</p>
  </React.Fragment>,
  document.getElementById("root")
);
*/








/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// 10 Video
// Challenge

ReactDOM.render(
  <React.Fragment>
    <h1>List Of Real Heroes</h1>
    <ul>
      <li>Elon</li>
      <li>Bill</li>
      <li>Mark</li>
      <li>Jeff</li>
      <li>Larry</li>
    </ul>
  </React.Fragment>,
    document.getElementById("root")
);
*/











/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 11 VIDEO 
// js expression 


// 1
// const myname = "Anil";
// ReactDOM.render(<h1>My Name is  {myname} </h1>, document.getElementById("root"));


// 2
// ReactDOM.render(<h1>My Name is  {3 + 9} </h1>, document.getElementById("root"));


// 3
// ReactDOM.render(<h1>My Name is  {Math.random()} </h1>, document.getElementById("root"));




// you can't use statement .
// wrong
// ReactDOM.render(<h1>My Name is  {if(10>2){ console.log("ok")} else {console.log("not")}} </h1>, document.getElementById("root"));
// ReactDOM.render(<h1>My Name is  {(10>2) ? console.log("ok") : console.log("not")} </h1>, document.getElementById("root"));

*/











/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 12 VIDEO 
// template literals 


// 1 naive approach 
// const fName = "Anil";
// const lName = "Kumar";
// ReactDOM.render(<h1>My name is {fName} {lName} </h1>, document.getElementById("root"));



// 2 navie approach 
// const fName = "Anil";
// const lName = "Kumar";
// ReactDOM.render(<h1>My name is {fName + " " + lName} </h1>, document.getElementById("root"));




// 3 tamplate literals 
// const fName = "Anil";
// const lName = "Kumar";
// ReactDOM.render(<h1> {`My name is ${fName} ${lName}`} </h1>, document.getElementById("root"));


*/







/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 13 Video
// challenge - Display Current Date and Time in JSX in React JS
// 1
var d = new Date();
var date = d.toLocaleDateString();
var time = d.toLocaleTimeString();

ReactDOM.render(
  <React.Fragment>
    <h1>HELLO, ANIL</h1>
    <p>Todays Date : {date}</p>
    <p>Current Time : {time}</p>
  </React.Fragment>,
  document.getElementById("root")
);


*/







/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 14 Video
// JSX Attribute


// 1
// ReactDOM.render(
//   <h1 contentEditable="true">Welcome Anil</h1>,
//   document.getElementById("root")
// );


// 2
// const url = "https://picsum.photos/200";
// ReactDOM.render(
//   <img src={url} alt="random Images"/>,
//   document.getElementById("root")
// );


// 3
// const url = "https://google.com";
// ReactDOM.render(
//   <a href={url}>Google</a>,
//   document.getElementById("root")
// );

*/










/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 15 Video
// include css || external css

ReactDOM.render(
  <React.Fragment>
    <h1 className="heading">HELLO, ANIL</h1>
    <p>1 para</p>
    <p>2 para</p>

    <div className="imgDiv">
      <img src="https://picsum.photos/200/300" />
    </div>

  </React.Fragment>,
  document.getElementById("root")
);
*/




/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 17 Video
// inline

ReactDOM.render(
  <React.Fragment>
    <h1 style={{backgroundColor: "red"}} >HELLO, ANIL</h1>
    <p style={{color: "red"}} >1 para</p>
    <p>2 para</p>

  </React.Fragment>,
  document.getElementById("root")
);
*/





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 17 Video
// internal css

const myStyle = {
  color : "white",
  backgroundColor : "black"
}

ReactDOM.render(
  <React.Fragment>
    <h1 style={myStyle} >HELLO, ANIL</h1>
    <p>1 para</p>
    <p>2 para</p>

  </React.Fragment>,
  document.getElementById("root")
);

















