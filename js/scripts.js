var jsonString = '{"messages":["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Mauris venenatis mi nulla, eget dapibus nisl sodales vel.","Donec aliquam leo nec justo eleifend efficitur."]}'

var jsonObj = JSON.parse(jsonString);

var messages = "";

for (i = 0; i < jsonObj.messages.length; i++) {
    messages += "<div><p>" + jsonObj.messages[i] + "</p><div>";
}

document.getElementById("messages").innerHTML = messages;