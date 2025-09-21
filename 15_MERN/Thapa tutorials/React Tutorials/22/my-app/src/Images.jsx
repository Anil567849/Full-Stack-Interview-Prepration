import React from "react";

function Images(props){
    const imgSize = {
        width: "200px",
        height: "200px",
      };
    return <img style={imgSize} src={props.imgSrc} alt="myPic" className="card_img" />;
}

export default Images;