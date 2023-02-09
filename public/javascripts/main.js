//The chat-content that is to fill the space
var chatResponse = document.getElementById('chat-form');
//Space where the chat messages is to be shown
var chatMessage = document.querySelector('.chat-messages');

var socket = io();

// Returns the url of the current page
var url = window.location.href.toString();
//Returns the room number
Room = url.replace('http://localhost:3000/chat/:','');


//Submitting the message
chatForm.addEventListener('submit', (e)=>{
    // when we submit a form, it automatically submits to a 
    //file, to prevent that from happening, we use prevent default
    e.preventDefault();

    // Get the message text
    var msg = e.target.elements.msg.value;

    // emit message to server
    socket.emit('chatMessage', msg);

    
});
