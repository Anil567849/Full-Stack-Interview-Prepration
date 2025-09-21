import React, { useState } from "react";

// const MyAccordion = (props) => {
const MyAccordion = ({question, answer}) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="main-heading" style={{display : "flex", alignItems : "center"}}> 
                <p onClick={ () => {
                    setShow(!show);
                }} style={{marginRight : "2rem", fontSize : "2rem"}}> {(show) ? "➖" : "➕"}</p>
                <h3>{question}</h3>
            </div>
            { show && <p>{answer}</p> }
        </>
    );  
}

export default MyAccordion;