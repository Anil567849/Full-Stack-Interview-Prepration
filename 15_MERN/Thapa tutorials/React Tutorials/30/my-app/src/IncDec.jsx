import React from "react";  

const IncDec = (props) => {

    return (
        <>
            <div>
                <div>
                    <div>
                        <h1>INC DEC GAME</h1>
                        <h1> {props.currVal} </h1>
                    </div>
                    <div style={{display : "flex", margin : "20px"}}>
                        <button onClick={props.onIncrem}> + </button>
                        <button onClick={props.onDecrem}> - </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default IncDec;