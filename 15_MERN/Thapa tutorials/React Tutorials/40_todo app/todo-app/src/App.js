import logo from './logo.svg';
import './App.css';
import './index.css'
import { useState } from 'react';
import TodoList from './TodoList';
function App() {


  const [item, setItems] = useState("");
  const [currItems, setShowItems] = useState([]);




  const addItems = (event) => {

    // console.log(event.target.value);

    setItems(event.target.value);

  }


  const showItems = () => {
    
    setShowItems( (oldItems) => {
        return [...oldItems, item];
    });
    
    setItems("");
  };
  const removeItem = (id) => {

    console.log("deleted");

    setShowItems( (oldItems) => {

      return oldItems.filter( (arrElement, index) => {
        return index !== id;
      });
    })

  }
  return (  

    <>
      <div className="main-div">
        <div className="center-div">
            <div className="top-brand-name">
                <h1>TODO APP</h1>
            </div>
            <div className="input-output-div">
                <div className="input-div">
                    <input type="text"
                     placeholder="ADD ITEMS"
                      onChange={addItems}
                      value={item}
                     />
                    <button onClick={showItems}> + </button>
                </div>
                <div className="output-div">
                  <ol>
                    {
                      currItems.map( (val, index) => {
                        return <TodoList
                          key={index}
                          idx={index} 
                          itemVal={val}
                          onSelect={removeItem} 
                            />
                      })
                    }
                  </ol>
                </div>
            </div>
        </div>
    </div>
    </>

  );
}

export default App;
