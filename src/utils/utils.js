function scrollToBottomOfElement(element) {
    element.scrollTop = element.scrollHeight;
};

function createLiWithClass(content, className) {
    const li = document.createElement('li');
    li.className = className;
    li.textContent = content;
    return li;
};

function getUsernameFromLocalStorage() {
    return localStorage.getItem('username');
}

function configureTheWebSocket(ws) {

    ws.onopen = () => {
        ws.send(JSON.stringify({ initial: true }));
    };

    ws.onmessage = (messageEvent) => {

        const messages = JSON.parse(messageEvent.data);
        //refresh the list of messages
        const ulMessages = document.querySelector('#list-of-messages');
        ulMessages.innerHTML = '';
        messages.forEach(message => {
            const li = message.sender === getUsernameFromLocalStorage()
                ? createLiWithClass(message.content, 'me')
                : createLiWithClass(message.content, 'other');
            ulMessages.appendChild(li);
        });
        scrollToBottomOfElement(ulMessages);

    };

    ws.onerror = (error) => {
        console.log(error);
    };

    ws.onclose = () => {
        console.log('WebSocket closed');
    }
}

function logout(){
    localStorage.removeItem('username');
    location.reload();
}