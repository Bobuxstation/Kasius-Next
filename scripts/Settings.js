var shutdown = new Audio('medias/shutdown.mp3'); 
var errorsound = new Audio("medias/error.mp3");

//errormessage
function error(errormsg) {
  document.getElementById('errorbox').style.display = "flex";
  document.getElementById('errormessagetext').innerHTML = errormsg;
}
function hideerror() {
  document.getElementById('errorbox').style.display = "none";
}
//background
function bg1() {
   document.getElementById("body").style.backgroundImage = "url(bg.jpg)";
}
function bg2() {
   document.getElementById("body").style.backgroundImage = "url(background/citywater.png)";
}
function bg3() {
   document.getElementById("body").style.backgroundImage = "url(background/Flowers.png)";
}
function bg4() {
   document.getElementById("body").style.backgroundImage = "url(background/Boardwalk.png)";
}
function bg5() {
   document.getElementById("body").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?landscape')";
}
function custom_bg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById("body").style.backgroundImage = `url(${reader.result})`;
    document.getElementById("body").style.backgroundSize = 'cover';
  }
  reader.readAsDataURL(event.target.files[0]);
}

//Color scheme

function color1() {
  document.getElementById("header").style.backgroundColor = "#75cbed";
}
function getcolor() {
  a = document.getElementById("color").value;
  document.getElementById("header").style.backgroundColor = a;
}
function cssimport() {
  b = document.getElementById("cssimport").value;
  document.getElementById("style").href = b;
  if (document.getElementById("cssimport").value == "") {
    document.getElementById("style").href = 'style.css';
    document.getElementById("style").href = 'style.css';
    errorsound.play();
    error('Error: Unable to apply theme!');
  };
}

//themes

function theme1() {
  document.getElementById("style").href = "style.css";
}

//footer
function hidequicklaunch() {
  if (document.getElementById('hidequicklaunch').checked == 1){
    document.getElementById('quicklaunch').style.display = 'none';
    document.getElementById('quicklaunch1').style.display = 'none';
    document.getElementById('quicklaunch2').style.display = 'none';
  } else {
    document.getElementById('quicklaunch').style.display = 'block';
    document.getElementById('quicklaunch1').style.display = 'block';
    document.getElementById('quicklaunch2').style.display = 'block';
  }
}
function changelogo() {
  c = document.getElementById("changelogo").value;
  document.getElementById("menutogglebuttonimg").src = c;
  document.getElementById("menutogglebuttonimg").onerror = function(){
    document.getElementById("menutogglebuttonimg").src = 'https://zeankundev.github.io/KaOS-13/logo.svg';
    errorsound.play();
    error('Error: Image does not exist!');
  };
}
function iconstyle1() {
  document.getElementById("footer").style.textAlign = "left";
}
function iconstyle2() {
  document.getElementById("footer").style.textAlign = "center";
}