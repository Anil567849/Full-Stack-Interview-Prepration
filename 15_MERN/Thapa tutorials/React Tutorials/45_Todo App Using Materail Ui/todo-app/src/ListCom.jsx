import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ListCom = (props) => {

    const [line, setLine] = useState(false);

    const removeItem = () => {
        setLine(true);
    }

    return (
        <>
            <div style={{display : "flex", alignItems : "center"}}>
                <span>
                    <DeleteForeverIcon onClick={removeItem}/>
                </span>
                <li style={{textDecoration : line ? "line-through" : "none"}}>{props.text}</li>
            </div>
        </>
    );

}

export default ListCom;