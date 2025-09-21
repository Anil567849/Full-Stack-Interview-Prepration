import React from "react";  
import Common from "./Common";
import elon from "../src/Images/elon_musk.jpg";
import jeff from "../src/Images/jeff_bezos.jpg";
import bill from "../src/Images/bill_gates.jpg";
import mark from "../src/Images/Mark_Zuckerberg.jpg";
import pat from "../src/Images/patrick.jpg";

const About = () => {
    return (
        <>
            <Common
                name="Welcome To About Page"
                imgsrc={mark}
                btnname="Contact Us"
                visit="/contact"
            />
        </>
    );
}

export default About;