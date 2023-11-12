document.addEventListener("DOMContentLoaded", function () {

    // set initial greeting
    appendMessage(`Hi, I'm your echobot. Say something, I'll echo it back :)`, 'Bot');

    // focus on load and send on enter key press
    document.getElementById("chat-input").focus();
    document.getElementById('chat-input').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

// all the validation code goes here
function validation(message) {
    if (message.length > 500) {
        return false;
    }
    return true;
}

// simple alert is used, sophisticated methods could be used instead
function provideFeedback(message) {
    alert(message);
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;
    if (message.trim() == '') {
        return;
    }

    if (!validation(message)) {
        return provideFeedback('Message must have less than 500 character!');
    }

    appendMessage(message, 'User');
    chatInput.value = '';
    chatInput.focus();


    // pass the data to server
    const url = 'http://localhost:3000/messages';
    const data = {
        message: message
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.message) {

                // append the response
                appendMessage(data.message, 'Bot');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            provideFeedback(error.message);
        });
}


// append message to the DOM
function appendMessage(message, user) {
    const chatDiv = document.getElementById('chat');
    const timestamp = new Date().toLocaleTimeString();
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-wrapper');

    messageWrapper.innerHTML = `
    <div class="message">
        <span>${message}</span>
    </div>
    <div class="message-meta">
        <div class="sender-avatar">${user}</div>
        <span class="timestamp">${timestamp}</span>
    </div>
`;
    chatDiv.appendChild(messageWrapper);
}