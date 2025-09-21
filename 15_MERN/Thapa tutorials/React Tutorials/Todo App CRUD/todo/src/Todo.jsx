import React, { useState } from 'react'




const getDataFromLocalStorage = () =>{

    const data = localStorage.getItem("todoItems");

    if(data){
        return JSON.parse(data);
    }else{
        return [];
    }

}

export default function Todo() {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getDataFromLocalStorage());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if(inputData != "" && toggleSubmit){
            //add
            const data = {id : new Date().getTime(), name : inputData};
            setItems( (oldValue ) => {
                return [...oldValue, data];
            });
            
            setInputData("");
        }else if(inputData != "" && !toggleSubmit){
            ///update
            setItems( 
                items.map( (oldValue) => {
                    if(oldValue.id == isEditItem){
                        return {...oldValue, name : inputData};
                    }
                    return oldValue;
                })
            )

            setToggleSubmit(true);

            setIsEditItem(null);
    
            setInputData("");
        }

    }


    const deleteItem = (id) => {

        // console.log(id);

        const arr = items.filter( (val) => {
            return id != val.id;
        });

        setItems(arr);

    }

    const deleteAllItems = () => {
        setItems([]);
    }


    const updateItem = (id) =>{

        const curr = items.find( (oldVal) => {
            return oldVal.id == id;
        })

        // console.log(curr);

        setToggleSubmit(false);

        setIsEditItem(id);

        setInputData(curr.name);

    }



    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(items));
    }, [items])


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        {/* <img src="" alt="logo" /> */}
                        <h1> 📖📖 </h1>
                        <figcaption>Add Your List Here 💥</figcaption>
                    </figure>
                    <div className="addItems">                        
                        <input type="text" name="" id="" placeholder="Add Items..." onChange={(e)=> setInputData(e.target.value)} value={inputData} />

                        {
                            (toggleSubmit) ? <span onClick={addItem}>✔</span> : <span onClick={addItem}>✏️</span>
                        }
                        
                    </div>

                    <div className="showItems">

                    {
                        items.map( (currVal) => {
                            return (

                                <div className="eachItem" key={currVal.id}>
                                    <h3>{currVal.name} </h3>
                                    <span style={{fontSize : "15px"}} onClick={()=> updateItem(currVal.id)}>✏️</span>
                                    <span style={{fontSize : "15px"}} onClick={()=> deleteItem(currVal.id)}>🗑️</span>
                                </div>

                            );
                        })
                    }
                        
                    </div>

                    <div className="showItems" style={{marginTop : "10px"}}>
                        <button id="deleteAllBtn" onClick={deleteAllItems}>REMOVE ALL 🗑️</button>
                    </div>
                </div>
            </div>
        </>
    )
}
