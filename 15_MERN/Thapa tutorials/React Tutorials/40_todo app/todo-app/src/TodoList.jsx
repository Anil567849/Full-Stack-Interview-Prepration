import React from "react";



const TodoList = (props) => {
    
    return (
        <>
            <div className="list-style" style={{display : "flex"}}>
                <button onClick={ () => {
                    props.onSelect(props.idx)
                }} style={{marginRight : '20px'}}>X</button>


                <li> {props.itemVal} </li>
            </div>
        </>
    );
}


export default TodoList;