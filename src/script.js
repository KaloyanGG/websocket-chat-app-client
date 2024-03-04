
const ulMessages = $('#list-of-messages')[0];

scrollToBottomOfElement(ulMessages);

function scrollToBottomOfElement(element) {
    element.scrollTop = element.scrollHeight;
};

//create li with class me
function createLiWithClass(content, className) {
    const li = document.createElement('li');
    li.className = className;
    li.textContent = content;
    return li;
};

let ws = new WebSocket('ws://localhost:8081');
ws.onmessage = (messageEvent) => {

    const messages = JSON.parse(messageEvent.data);
    console.log(messages);

    
    messages.forEach(message => {
        
        const li = createLiWithClass(message.content, 'me');
        ulMessages.appendChild(li);
    });

}