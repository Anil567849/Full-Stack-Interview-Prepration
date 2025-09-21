import React, { useState } from "react";  

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title : "",
        content : ""
    });

    const inputEvent = (e) => {

        const {name, value} = e.target;

        setNote( (oldValue) => {
            return {
                ...oldValue,
                [name] : value
            }
        })
    }

    console.log(note);

    const submitForm = () => {
        props.passNote(note);
        setNote({
            title : "",
            content : ""
        });
    };

    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" value={note.title} name="title" onChange={inputEvent} placeholder="Title"
                    autoComplete="off" />
                    <br /><br />
                    <textarea rows="" cols="" value={note.content} name="content" onChange={inputEvent} placeholder="Write a note..."></textarea>
                </form>
                <br />
                <button onClick={submitForm}>
                    ➕➕➕➕
                </button>

            </div>
        </>
    );

}

export default CreateNote;