import React from "react";

const Card = (props) => {
    return (
        <>
                        
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img style={{height : "250px", width : "100%"}} src={props.imgsrc} class="card-img-top" alt="pic" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.title}</p>
                        <a href="#" class="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;