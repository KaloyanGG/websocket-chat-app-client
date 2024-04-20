const ulMessages = document.querySelector('#list-of-messages');
const buttonSend = document.querySelector('#button-send');
const inputMessage = document.querySelector('#input-message');

const WEB_SOCKET_URL = 'ws://localhost:3000';
// const WEB_SOCKET_URL = 'ws://172.20.10.2:3000';
// const WEB_SOCKET_URL = 'wss://geodeya.com/koko'

let ws = new WebSocket(WEB_SOCKET_URL);

configureWebSocket(ws);

const form = document.querySelector('#message-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#input-message');
    ws.send(JSON.stringify({ content: input.value, user: getUsernameFromLocalStorage() }));
    input.value = '';
});

