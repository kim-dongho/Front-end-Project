var bt = document.getElementsByClassName("list");
var prev_button = document.getElementById("prev");
var next_button = document.getElementById("next");
var location = 0;

for (var i = 0; i < bt.length; i++) {
    bt[i].addEventListener("click", function () {
        for (var j = 0; j < bt.length; j++) {
            bt[j].style.backgroundColor = "#f3f3fb";
            bt[j].style.color = "black";
        }
        this.style.backgroundColor = "#14142C";
        this.style.color = "white";
    });
}

for (var i = 0; i < bt.length; i++) {
    if (i < 6) bt[i].style.display = "block";
    else bt[i].style.display = "none";
}
