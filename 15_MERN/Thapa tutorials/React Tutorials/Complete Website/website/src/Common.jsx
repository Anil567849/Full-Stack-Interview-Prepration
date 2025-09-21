import React from "react";
import elon from "../src/Images/elon_musk.jpg";
import jeff from "../src/Images/jeff_bezos.jpg";
import bill from "../src/Images/bill_gates.jpg";
import mark from "../src/Images/Mark_Zuckerberg.jpg";
import pat from "../src/Images/patrick.jpg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" style={{height : "80vh", width : "100vw"}} className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">

                                <div className="col-md-6 order-2 order-lg-1 pt-5">
                                    <h1 className=""> {props.name} <strong className="brand-name">Open AI</strong></h1>
                                    <h2 className="my-3">we are most credible talented web developers</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-primary"> {props.btnname} </NavLink>
                                    </div>
                                </div>

                                <div className="order-lg-2 order-1 col-lg-6 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Home Page Img"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;