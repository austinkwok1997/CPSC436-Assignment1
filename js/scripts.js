var jsonString = '{"messages":["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Mauris venenatis mi nulla, eget dapibus nisl sodales vel.","Donec aliquam leo nec justo eleifend efficitur."]}'

var jsonObj = JSON.parse(jsonString);

var messageList = document.getElementById("messages");

for (i = 0; i < jsonObj.messages.length; i++) {
    var message = document.createElement("DIV");
    message.innerHTML = jsonObj.messages[i];
    message.classList.add("message")
    document.body.appendChild(message);
}


function addMessage() {
    var message = document.createElement("DIV");
    message.innerHTML = document.getElementById("newMessage").value;
    message.classList.add("message")
    document.body.appendChild(message);
}

function removeMessages() {
    [...document.getElementsByClassName("message")].map(n => n && n.remove());
}