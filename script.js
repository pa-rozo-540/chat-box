document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const message = chatInput.value.trim();

    if (message !== '') {
        //create new message element
        const messageElement = document.createElement('div');
        messageElement.className = 'message user';
        messageElement.textContent = message;

        //append the message to chat box
        chatBox.appenChild(messageElement);

        //Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;

        //Clear the input field
        chatInput.value = '';
    }
}
