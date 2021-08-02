var data = "";
var count = 0;

function push_data() {
    var tags_input = document.getElementById("tags1").value;
    const newDiv = document.createElement('div');
    const newButton = document.createElement('button');
    var getDiv = document.getElementById("tags2");
    var newText = document.createTextNode(tags_input);
    if (count < 4) {
        newDiv.appendChild(newText);
        setButton(newButton);
        newDiv.appendChild(newButton);
        setDiv(newDiv);
        getDiv.appendChild(newDiv);
        count++;
    }
}

function setDiv(newDiv) {
    newDiv.style.marginTop = "5px";
    newDiv.style.marginLeft = "5px";
    newDiv.style.backgroundColor = "#28284F";
    newDiv.style.width = "20%";
    newDiv.style.height = "40px";
    newDiv.style.borderRadius = "10px";
    newDiv.style.color = "white";
    newDiv.style.textAlign = "center";
    newDiv.style.fontSize = "1rem";
    newDiv.style.float = "left";
    newDiv.style.lineHeight = "40px";
}

function setButton(newButton) {
    var but_val = document.createTextNode("X");
    newButton.appendChild(but_val);
    newButton.style.backgroundColor = "#28284F"
    newButton.style.height = "20px";
    newButton.style.marginLeft = "5px";
    newButton.style.fontSize = "1rem";
    newButton.style.color = "white";
}