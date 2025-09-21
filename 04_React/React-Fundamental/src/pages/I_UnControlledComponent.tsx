import React, { useRef } from 'react'

function I_UnControlledComponent() {
    const inputRef = useRef<HTMLInputElement>(null);
 
    function handleSubmit() {
        if(inputRef && inputRef.current){
            alert(`Name: ${inputRef.current.value}`);
        }
    }
 
    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    ref={inputRef}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default I_UnControlledComponent

/* 
Uncontrolled Components
Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
*/