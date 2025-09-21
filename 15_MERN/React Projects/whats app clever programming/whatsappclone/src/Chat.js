import React, {useState} from 'react'
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios.js';

function Chat({messages}) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        console.log(input);
        await axios.post('/messages/new', {
            message : input,
            name : "Anil Demo",
            timestamp : new Date().toLocaleDateString(),
            received : true
        })
        setInput("");
        
    }





    // console.log(messages);
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/> 
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>


            

            <div className="chat__body">

                {
                    messages.map((message) =>(
                        <p className={`chat__message ${message.received && "chat__receiver"}`}>
                            <span className="chat__name">{message.name}</span>
                            
                            {message.message}
                            <br/>

                            <span className="chat__timestamp">{message.timestamp}</span>
                        </p>
                    ))
                }
                        
                </div>


                <div className="chat__footer">
                    <InsertEmoticonIcon/>
                    <form action="">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Type a message here..." />
                        <button onClick={sendMessage} type="submit">Send a message</button>
                    </form>
                    <MicIcon/>
                </div>

        </div>
    )
}

export default Chat;
