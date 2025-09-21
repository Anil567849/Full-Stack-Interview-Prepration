import logo from './logo.svg';
import './App.css';
import ComA from './ComA';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


// three step to implement contextApi 
// 1 = createContext();
// 2 = provider 
// 3 = consumer

// without context api 
// APP ---> ComA ---- > ComB ---- > ComC 

// with context 
// App ---> ComC 


/*
const FirstName = createContext();
const LastName = createContext();

function App() {


  return (
    <>
      <FirstName.Provider value="Anil send direct to ComC">
        <LastName.Provider value="Kumar send direct to ComC">
          <ComA/>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}
export {FirstName, LastName};
*/





/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
// 53 VIDEO = use effects 

const App = () => {
  const [num, setNum] = useState(0);
  const [numAgain, setNumAgain] = useState(0);


  /*
  similar like html's onLoad function
  // it will call auto whenever page will render [refresh or num value change etc...]
  useEffect(() => {
    alert("call auto " + num);
  })
  */ 


  /*
  // call only when page refresh 
  useEffect(()=>{
    alert('call auto')
  }, [])

  */
/*
  
  // call only when click on num button
  useEffect(()=>{
    alert('call auto')
  }, [num])



 

  return (
    <>
      <button onClick={ () => {
        setNum(num + 1);
      }}>Click Me {num} </button>

      <br/><br/>
      <button onClick={ () => {
        setNumAgain(numAgain + 1);
      }}>Click Me {numAgain} </button>
    </>
  )

}
*/


/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
54 VIDEO CHANGE TITLE OF HTML DYNAMICALLY

const App = () => {


  

  const [count, setCount] = useState(0);


  const inc = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = "You Clicked Me " + count + " times";
  })


  return (
    <>
      <button onClick={inc}>Click Me {count}</button>
    </>
  );


}
*/




// @@@@@@@@@@@@@@@@@@@@@@@@@@@ 
// 55 POKEMON API 

const App = () => {

  const [num, setNum] = useState(0);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  const inputEvent = (e) =>{
  async function getPokemon(){
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    console.log(res.data.moves.length);
    setName(res.data.name);
    setMoves(res.data.moves.length);
  }
  setNum(e.target.value);
  getPokemon();
}

  return (
    <>  
      <h1>You Choose    {<span style={{color : "green"}}>{num} </span>} value</h1>
      <h1>My Name is    {<span style={{color : "green"}}>{name} </span>} </h1>
      <h1>I Have    {<span style={{color : "green"}}>{moves} </span>} Moves</h1>
      <select onChange={inputEvent} value={num}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  )
}




export default App;

