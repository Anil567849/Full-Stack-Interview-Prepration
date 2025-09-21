import React, { useState } from "react";
import questions from './api';
import MyAccordion from "./MyAccordion";

const  Accordion = () =>{

    const [data, setData] = useState(questions);

    return (
        <>  
        <section className="main-div">
            <h1>REACT QUESTION</h1>
            {
                data.map( (val) => {
                    const {id, question, answer} = val;
                    return <MyAccordion key={id} {...val} />;
                })
            }
        </section>
        </>
        
    );

}

export default Accordion;