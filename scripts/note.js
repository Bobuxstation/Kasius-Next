let saveTXT = (filename) => {
    const msg = document.getElementById('msg');
    let data = 
        '' + msg.value;
    
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = filename;

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
function clearTXT() {
    document.getElementById('msg').value = "";
}
function fontTXT(FONT) {
    document.getElementById('msg').style.fontFamily = FONT;
}
function showsave() {
    var x = document.getElementById("notessaveprompt");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function setTXT() {
    var x = document.getElementById("notessaveprompt1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }