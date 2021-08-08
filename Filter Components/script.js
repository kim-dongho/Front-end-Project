var visible_button = document.getElementById("visible_button");
var check = true;

function onoff() {
    if (check == true) {
        document.getElementById("visible_div").style.visibility = "hidden";
        check = false;
    } else {
        document.getElementById("visible_div").style.visibility = "visible";
        check = true;
    }
}
