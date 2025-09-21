import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Amazon = () => {
    return (
        <Card 
            key = {Sdata[1].id}
            imgSrc = {Sdata[1].imgSrc}
            title = {Sdata[1].title}
            serialName = {Sdata[1].serialName}
            link = {Sdata[1].link}
        />
    )
}

export default Amazon;