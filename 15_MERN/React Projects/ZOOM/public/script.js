const socket = io('http://localhost:3030');



const videoGrid = document.getElementById('video-grid');
// console.log(videoGrid)
const myVideo = document.createElement('video');
myVideo.muted = true;


const peer = new Peer(undefined, {
    path : '/peerjs',
    host : "/",
    port : "3030"
});




let myVideoStream;

// allow us to video and audio on chrome 
navigator.mediaDevices.getUserMedia({
    video : true, //or false
    audio : true, //
}).then(stream=>{
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

    peer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', (userVideoStream) => {
            addVideoStream(video, userVideoStream);
        })
    })

    socket.on('user-connected', (userId) => {
        connectToNewUser(userId, stream);
    })



}).catch(err=>{
    console.log(err);
});

peer.on('open', id => {
    // console.log(id);
    socket.emit('join-room', ROOM_ID, id);
})

        
const connectToNewUser = (userId, stream) => {
    console.log("new user", userId);
    const call = peer.call(userId, stream);
    const video = document.createElement('video');

    call.on('stream', (userVideoStream) => {
        addVideoStream(video, userVideoStream);
    })
}

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}