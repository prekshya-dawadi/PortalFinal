
  //The chat-content that is to fill the space
  const chatForm = document.getElementById('chat-form');
  //Space where the chat messages is to be shown
  const chatMessages = document.querySelector('.chat-messages');

  const socket = io();

  // Returns the url of the current page. 
var url = window.location.href.toString();
//Returns the room number
Room = url.replace('http://localhost:3000/chat/:', ''); 
console.log(Room);


// Message submit
chatForm.addEventListener('submit', (e)=>{
    // when we submit a form, it automatically submits to a file
    // to prevent that from happening, we use prevent default
    e.preventDefault();

    // Get message text
    const msg = e.target.elements.msg.value;

    // Emit message to server
    socket.emit('chatMessage', msg);

    //Clear inputs
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Message from server
socket.on('message',message=>{
    outputMessage(message);
    console.log(message);
    //scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
 
});


// Output message to DOM
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}

//Rooms

socket.emit('joinRoom', Room);  
