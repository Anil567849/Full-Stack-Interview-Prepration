import React from "react";
import elon from "../src/Images/elon_musk.jpg";
import jeff from "../src/Images/jeff_bezos.jpg";
import bill from "../src/Images/bill_gates.jpg";
import mark from "../src/Images/Mark_Zuckerberg.jpg";
import pat from "../src/Images/patrick.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common
                name="Grow Your Business"
                imgsrc={elon}
                btnname="Get Started"
                visit="/about"
            />
        </>
    );
}

export default Home;