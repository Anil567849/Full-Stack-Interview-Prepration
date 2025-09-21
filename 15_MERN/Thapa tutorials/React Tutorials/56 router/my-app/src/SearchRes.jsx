import React from "react";

const SearchRes = (props) => {
    let img = `https://source.unsplash.com/700x700?${props.query}`;
    return (
        <>
            <img src={img} alt="photo" />
        </>
    );
}

export default SearchRes;