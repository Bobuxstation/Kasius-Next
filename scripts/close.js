function hide(whattohide) {
  document.getElementById(whattohide).style.display = "none";
}
function show(whattoshow) {
  document.getElementById(whattoshow).style.display = "block";
}

function Closetestwindow() {
  var x = document.getElementById("window");
  if (x.style.display === "none") {
    document.getElementById("minimizedfiles").style.display = "block";
    x.style.display = "block";
    var files = document.getElementById("file"); files.src = ("apps/files.html");
  } else {
    x.style.display = "none";
    document.getElementById("minimizedfiles").style.display = "none";
    var files = document.getElementById("file"); files.src = ("");
  }
}
function Closetestwindow2() {
  var x = document.getElementById("window2");
  if (x.style.display === "none") {
    document.getElementById("minimizedmeme").style.display = "block";
    x.style.display = "block";
    var mememaker = document.getElementById("mememaker"); mememaker.src = ("apps/mememaker.html");
  } else {
    x.style.display = "none";
    document.getElementById("minimizedmeme").style.display = "none";
    var mememaker = document.getElementById("mememaker"); mememaker.src = ("");
  }
}
function Closetestwindow3() {
  var x = document.getElementById("window3");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizednotes").style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("minimizednotes").style.display = "none";
  }
}
function Closetestwindow4() {
  var x = document.getElementById("window4");
  if (x.style.display === "none") {
    x.style.display = "block";
    var medias = document.getElementById("media"); media.src = ("apps/MEDIA.html");
    document.getElementById("minimizedmedia").style.display = "block";
  } else {
    x.style.display = "none";
    var medias = document.getElementById("media"); media.src = ("");
    document.getElementById("minimizedmedia").style.display = "none";
  }
}
function Closetestwindow5() {
  var x = document.getElementById("window5");
  if (x.style.display === "none") {
    x.style.display = "block";
    var store = document.getElementById("store"); store.src = ("https://bobuxstation.github.io/KaOS-Store/");
    document.getElementById("minimizedstore").style.display = "block";
  } else {
    x.style.display = "none";
    var store = document.getElementById("store"); store.src = ("");
    document.getElementById("minimizedstore").style.display = "none";
  }
}
function Closetestwindow6() {
  var x = document.getElementById("window6");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedsettings").style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("minimizedsettings").style.display = "none";
  }
}
function menu() {
  var x = document.getElementById("Sidebar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Closetestwindow7() {
  var x = document.getElementById("window7");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("minimizedabout").style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("minimizedabout").style.display = "none";
  }
}
function NotificationMenu() {
  var x = document.getElementById("Sidebar2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Closetestwindowterminal() {
  var x = document.getElementById("terminal");
  if (x.style.display === "none") {
    document.getElementById("terminalframe").src = ("apps/terminal.html");
    document.getElementById("minimizedterminal").style.display = "block";
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("terminalframe").src = ("");
    document.getElementById("minimizedterminal").style.display = "none";
  }
}
function Closetestwindowtype() {
  var x = document.getElementById("type");
  if (x.style.display === "none") {
    document.getElementById("typeframe").src = ("kasiustype/index.html");
    document.getElementById("minimizedtype").style.display = "block";
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("typeframe").src = ("");
    document.getElementById("minimizedtype").style.display = "none";
  }
}
function browser() {
  var x = document.getElementById("browser");
  if (x.style.display === "none") {
    document.getElementById("browserframe").src = ("apps/kasiusnet.html");
    document.getElementById("minimizedbrowser").style.display = "block";
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("browser").src = ("");
    document.getElementById("minimizedbrowser").style.display = "none";
  }
}