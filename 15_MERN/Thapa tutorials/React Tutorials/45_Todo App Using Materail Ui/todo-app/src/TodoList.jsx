import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from "./ListCom";
const TodoList = () => {

    const [item, setItem] = useState("");
    const [listItem, setListItem] = useState([]);

    const addItem = (e) => {
        if(e.target.value)
            setItem(e.target.value);
    }

    const showItems = () => {
        setListItem( (oldValue) => {
            return [...oldValue, item];
        });
        setItem("");
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>TODO LIST</h1>
                    <br />
                    <input type="text" placeholder="Add An Item" value={item} onChange={addItem}/>
                    <Button variant="contained" color="success" onClick={showItems} disabled={!item}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol style={{listStyle : "none"}}>
                        {
                            listItem.map((val, idx) => {
                                return <ListCom key={idx} text={val} />
                            })
                        }
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );

}

export default TodoList;