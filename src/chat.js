
const ulMessages = document.querySelector('#list-of-messages');
const buttonSend = document.querySelector('#button-send');
const inputMessage = document.querySelector('#input-message');

// scrollToBottomOfElement(ulMessages);

let ws = new WebSocket('ws://localhost:8081');

configureTheWebSocket(ws);

const form = document.querySelector('#message-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#input-message');
    ws.send(JSON.stringify({ content: input.value, user: getUsernameFromLocalStorage() }));
    input.value = '';
});




