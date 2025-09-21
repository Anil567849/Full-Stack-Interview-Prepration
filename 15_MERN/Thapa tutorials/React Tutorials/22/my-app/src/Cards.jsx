import React from "react";
import Images from "./Images";
import Heading from "./Heading";

function Card(props) {
  // console.log(props);



  return (
    <>
      <div className="cards">
        <div className="card">
          {/* <img style={imgSize} src={props.imgSrc} alt="myPic" className="card_img" /> */}
          <Images imgSrc={props.imgSrc} />
          <div className="card_info">
            <span className="card_category"> {props.serialName} </span>
            {/* <h3 className="card_title"> {props.title} </h3> */}
            <Heading serialName={props.title} />
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
