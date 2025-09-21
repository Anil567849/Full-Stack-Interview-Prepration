const socket = io();

let name;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message_area')
do{
    name = prompt("Please enter your name");
}while(!name);

textarea.addEventListener("keyup", (e)=> {
    if(e.key === 'Enter'){
        sendMessage(e.target.value);
        textarea.value = "";
        scrollToBottom()
    
    }
})


function sendMessage(message){
    let msg = {
        user : name,
        message : message.trim(),
    }

    // append message in document
    appendMessage(msg, 'outgoing');
    //send message to server
    socket.emit('message', msg);
}

function appendMessage(msg, type){
    let mainDiv = document.createElement('div');
    let className = type;
    mainDiv.classList.add(className, 'message');

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;

    mainDiv.innerHTML = markup;

    messageArea.appendChild(mainDiv);
}



//Receive message
socket.on('send_msg', (msg) => {
    // console.log('send_msg', msg);
    appendMessage(msg, 'incoming');
    scrollToBottom()
})


function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}