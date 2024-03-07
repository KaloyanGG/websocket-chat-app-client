
const ulMessages = document.querySelector('#list-of-messages');
const buttonSend = document.querySelector('#button-send');
const inputMessage = document.querySelector('#input-message');

// scrollToBottomOfElement(ulMessages);

// let ws = new WebSocket('ws://localhost:8081');
let ws = new WebSocket('ws://172.20.10.2:8081');

configureTheWebSocket(ws);

// setTimeout(()=>{
//     alert(ws.onmessage);
// },2000)

const form = document.querySelector('#message-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#input-message');
    ws.send(JSON.stringify({ content: input.value, user: getUsernameFromLocalStorage() }));
    input.value = '';
});




