import React from "react";

const Note = (props) => {

    const card = {
        display : "flex",
        flexDirection : "row",
        width : "10rem",
        borderWidth : "5px",
        borderStyle : "solid",
        borderColor : "red",
        margin : "20px",
        padding : "10px",
        alignItems : "center"
    }


    const deleteNote = () => {
        console.log('clicked ' + props.id);
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note" style={card}> 
                <h1>{props.title}</h1>
                <p> {props.content} </p>
                <br />
                <button onClick={deleteNote}>➖➖➖➖</button>
            </div>
        </>
    )

}

export default Note;