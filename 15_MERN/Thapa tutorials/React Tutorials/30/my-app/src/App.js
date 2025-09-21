import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import IncDec from './IncDec';










/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 30 Video HOOKS - increment and decrement
const App = () => {

/*
  //ARRAY DESTRUCTURING
  let name = ['vi', 'no', 'd'];
  let [name1, name2, name3] = n;
  console.log(name1, name2, name3);
*/
/*
  // count = at first time it will store the value of useState otherwise it will store a value which will come from setCount 
  const [count, setCount] = useState(0);

    const incNum = () => {
      setCount(count + 1);
    }
    const decNum = () => {
      if(count != 0){
        setCount(count - 1);
      }
    }


    return (
      <>
        <h1> {count} </h1>
        <button onClick={incNum}>Click ++</button>
        <button onClick={decNum}>Click --</button>
      </>
    );

};
*/

/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 31 Video HOOKS -- get time
const App = () => {


    let newTime = new Date().toLocaleTimeString();


  
    const [currTime, setTime] = useState(newTime);
  
      const getTime = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
      }
  
  
      return (
        <>
          <h1> {currTime} </h1>
          <button onClick={getTime}>Get Time</button>
        </>
      );
  
  };
*/

/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 32 Video HOOKS -- digital count
const App = () => {

    let newTime = new Date().toLocaleTimeString();

    const [currTime, setTime] = useState(newTime);


    setInterval(() => {
      newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);


    return (
      <h1> {currTime} </h1>

    );

}
*/

/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 33 Video HOOKS -- Events

const App = () => {
  let newColor = "red";
  let btnName = "Click Me";
  let newBtnCss = {backgroundColor : "blue", padding : "20px", fontSize : "20px", borderRadius : "50px"};
  
  const [currColor, setColor] = useState(newColor);
  const [firstName, setBtnName] = useState(btnName);
  const [currBtnCss, setBtnCss] = useState(newBtnCss);
  
  const changeBg = () => {
      newColor = (currColor === "red") ? "purple" : "red";
      setColor(newColor);

      btnName = (firstName === "Click Me") ? "Ouch!!" : "Click Me";
      setBtnName(btnName);
  }



  const changeBtn = () => {

      if(currBtnCss.backgroundColor === 'blue'){
        console.log("yellow");
        newBtnCss.backgroundColor = "yellow";
      }else{
        console.log("blue"); 
        newBtnCss.backgroundColor = "blue";
      }
      setBtnCss(newBtnCss);

  }



    return (
      <>
      <div style={{backgroundColor : currColor, height : "100vh", width : "100vw"}  }>
        <button onClick={changeBg} onDoubleClick={changeBtn} style={currBtnCss}>  {firstName} </button>
      </div>
      </>
    );

}

*/

/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
34 HOOK - form
const App = () => {

  // let str = "";

  const [firstName, setFirstName] = useState("");
  const [fName, setfName] = useState();
  
  const inputType = (event) =>  {
    // console.log(event.target.value);
    setFirstName(event.target.value);
  }
  
  const submitForm = (event) => {
    event.preventDefault();
      setfName(firstName);
      // console.log(str);
  }

  return (
    <>
    <form onClick={submitForm}>
      <div>
        <h1>Hello, {fName} </h1>
        <input type="text" onChange={inputType} value={firstName} placeholder="Enter your Name"/>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
}
*/

/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 35 HOOK - form multiple input
const App = () => {

  // let str = "";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  
  const inputType1 = (event) =>  {
    // console.log(event.target.value);
    setFirstName(event.target.value);
  }
   
  const inputType2 = (event) =>  {
    // console.log(event.target.value);
    setLastName(event.target.value);
  }
  
  const submitForm = (event) => {
      event.preventDefault();
      setFName(firstName);
      setLName(lastName)
      // console.log(str);
  }

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <div>            
              <h1>Hello, {fName} {lName} </h1>
              <input type="text" onChange={inputType1} value={firstName} placeholder="Enter your Name"/>
              <br/>
              <input type="text" onChange={inputType2} value={lastName} placeholder="Enter your Name"/>
              <br/>
              <button type="submit">Submit</button>
          </div>          
        </form>
      </div>
    </>
  );
}
*/







/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 36 HOOK - Handling Complex Multiple Input Form States
const App = () => {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const inputType = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(event.target.placeholder);

    const val = event.target.value;
    const name = event.target.name;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: val,
          lName: prevValue.lName,
        };
      } else if (name === "lName"){
        return {
          fName: prevValue.fName,
          lName: val,
        };
      }
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    // console.log(str);
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <h1>
              Hello, {fullName.fName} {fullName.lName}{" "}
            </h1>
            <input
              type="text"
              name="fName"
              onChange={inputType}
              value={fullName.fName}
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="text"
              name="lName"
              onChange={inputType}
              value={fullName.lName}
              placeholder="Enter your Name"
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
*/ 





/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 37 HOOK - LOGIN FORM
const App = () => {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  });


  const [fullData, setFullData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  })

  const inputType = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(event.target.placeholder);

    const val = event.target.value;
    const name = event.target.name;

    console.log(name + " = " + val);

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: val,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: prevValue.phone
        };
      } else if (name === "lName"){
        return {
          fName: prevValue.fName,
          lName: val,
          email: prevValue.email,
          phone: prevValue.phone
        };
      }else if (name === "email"){
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: val,
          phone: prevValue.phone
        };
      }else if (name === "phone"){
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: val,
        };
      }
    });

  };

  const submitForm = (event) => {
    event.preventDefault();

    setFullData((prevValue) => {
      return{
        fName : fullName.fName,
        lName : fullName.lName,
        email : fullName.email,
        phone : fullName.phone
      };
    })

    // console.log(str);
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <h1>
              Hello, {fullData.fName} {fullData.lName} {fullData.email} {fullData.phone}
            </h1>
            <input
              type="text"
              name="fName"
              onChange={inputType}
              value={fullName.fName}
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="text"
              name="lName"
              onChange={inputType}
              value={fullName.lName}
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="text"
              name="email"
              onChange={inputType}
              value={fullName.email}
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="text"
              name="phone"
              onChange={inputType}
              value={fullName.phone}
              placeholder="Enter your Name"
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
*/











/*

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 38 HOOK -  Spread Operator or Args or Rest == ...
const App = () => {



// 1
  // const fullName = ['Anil', 'Kumar'];
  // const favBooks = ['zero to one', 'elon', 'geeta'];

  // const info = [...fullName, ...favBooks];
  // console.log(info);


  



  // 2
  // SPREAD OPERATOR WITH ARRAY DESTRUCTURING
  // const [firstName, lastName, firstBook, ...other] = [...fullName, ...favBooks];

  // console.log(firstName)
  // console.log(lastName)
  // console.log(firstBook)
  // console.log(...other)





  // 3
  const fullName = {
    fName : "Anil",
    lName : "Kumar"
  };
  const bio = {
    id : 1, 
    ...fullName
  };

  console.log(bio)


  
};

*/















/*

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 39 HOOK -  USING SPREAD OPERATOR ...
const App = () => {

  
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  });


  const [fullData, setFullData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  })

  const inputType = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(event.target.placeholder);

    const val = event.target.value;
    const name = event.target.name;

    console.log(name + " = " + val);

    setFullName((prevValue) => {
      return {  
        // use [name] other it will considered as new one more property of this object  
        ...prevValue,
        [name] : val
      }

    });

  };

  const submitForm = (event) => {
    event.preventDefault();

    setFullData((prevValue) => {
      return{
        fName : fullName.fName,
        lName : fullName.lName,
        email : fullName.email,
        phone : fullName.phone
      };
    })

    // console.log(str);
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <h1>
              Hello, {fullData.fName} {fullData.lName} {fullData.email} {fullData.phone}
            </h1>
            <input
              type="text"
              name="fName"
              onChange={inputType}
              value={fullName.fName}
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="text"
              name="lName"
              onChange={inputType}
              value={fullName.lName}
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="text"
              name="email"
              onChange={inputType}
              value={fullName.email}
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="text"
              name="phone"
              onChange={inputType}
              value={fullName.phone}
              placeholder="Enter your Name"
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
  
};
*/















// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 41 HOOK -  INCREMENT AND DECREMENT









const App = () => {

  const [inputIncrem, setInputIncrem] = useState(0);
  
  const increm = () => {
    setInputIncrem(inputIncrem + 1);
    // console.log(inputIncrem);
    // console.log('increm');
  }
  
  const decrem = () => {
    if(inputIncrem != 0)
      setInputIncrem(inputIncrem - 1);
    else
      alert('zero limit reached');
    // console.log(inputIncrem);
    // console.log('decrem');
  }
  
    return (
      <>
        <IncDec onIncrem={increm} onDecrem={decrem} currVal={inputIncrem}/>
      </>
    );
  
};













export default App;
