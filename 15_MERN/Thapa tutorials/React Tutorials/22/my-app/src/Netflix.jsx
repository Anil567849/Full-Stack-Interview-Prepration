import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Netflix = () => {
    return (
        <Card 
            key = {Sdata[0].id}
            imgSrc={Sdata[0].imgSrc}
            title={Sdata[0].title}
            serialName={Sdata[0].serialName}
            link={Sdata[0].link}
        />
    )
}

export default Netflix;