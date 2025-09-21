import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import React, {useEffect, useState} from 'react';
import ourAxios from './axios.js';




function App() {
  

  const [messages, setMessage] = useState([]);


  useEffect(()=>{
    ourAxios.get("/messages/sync").then((res)=>{
      setMessage(res.data);
    })
  }, [])  

  useEffect(() => {
    const pusher = new Pusher('e2ff8430b019f490ea46', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      // alert(JSON.stringify(newMessages));
      setMessage([...messages, newMessages])
    });


    // cleanup 
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

// console.log(messages);

  return (
    <div className="app">
      <div className="app__body">

      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
