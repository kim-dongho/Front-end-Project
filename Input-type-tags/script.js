var tags_input = document.getElementsByClassName("tags-input").value;
var tmp = "";

function Enter_Chk() {
    if (event.keyCode == 13) {
        tmp = tags_input;
        alert(tmp);
    }
}