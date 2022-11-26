var notify = new Audio("medias/notification.mp3");
var ul = document.getElementById("list");
var li = document.createElement("li");
var br = document.createElement("br");
li.classList.add('notification');
li.appendChild(document.createTextNode("Welcome To Kasius Next!"));
ul.appendChild(li);
ul.appendChild(br);

function notifications(msg) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var br = document.createElement("br");
    li.classList.add('notification');
    li.innerHTML = msg;
    li.appendChild(br);
    ul.appendChild(br);
    ul.appendChild(br);
    ul.appendChild(li);
    notify.play();
    document.getElementById("Sidebar2").style.display = "block";
}
function notifybeta() {
    notificationvar = document.getElementById('notifybeta').value;
    notifications(notificationvar);
}