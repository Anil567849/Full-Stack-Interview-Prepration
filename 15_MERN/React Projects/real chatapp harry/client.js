const socket = io("http://localhost:8000");

const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
const audio = new Audio('ting.mp3');

const append = (msg, senderOrRecieiver) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = msg;
    messageElement.classList.add('message');
    messageElement.classList.add(senderOrRecieiver);
    messageContainer.append(messageElement);

    // other person
    if(senderOrRecieiver == 'left'){
        audio.play();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg = messageInput.value;

    console.log(msg);

    append(`You : ${msg}`, 'right');
    socket.emit("send", msg);
    messageInput.value = "";
})

const name = prompt("Enter name");
socket.emit("new-user-joined", name);

socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'left');
})
socket.on('receive', data =>{
    // console.log(data);
    append(`${data.name} : ${data.message}`, 'left');
})
socket.on('leave', data =>{
    // console.log(data);
    append(`user left : ${data.name}`, 'left');
})