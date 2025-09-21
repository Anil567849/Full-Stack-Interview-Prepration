import React, { useState } from "react";
import SearchRes from "./SearchRes";

const Search = () => {

    const [imgName, setImgName] = useState("");

    const typeImgName = (e) =>{
        setImgName(e.target.value);
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Search Here..." onChange={typeImgName} value={imgName}/>  
            </div>
            <SearchRes query={imgName} />
        </>
    );

}

export default Search;