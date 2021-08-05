var bt = document.getElementsByClassName("bt");
var bt2 = document.getElementsByClassName("bt2");

for (var i = 0; i < bt.length; i++) {
    bt[i].addEventListener("click", function () {
        for (var j = 0; j < bt.length; j++) {
            bt[j].style.backgroundColor = "#272743";
        }
        this.style.backgroundColor = "#535472";
    });
}

for (var i = 0; i < bt2.length; i++) {
    bt2[i].addEventListener("click", function () {
        for (var j = 0; j < bt2.length; j++) {
            bt2[j].style.backgroundColor = "#535472";
            bt2[j].style.color = "white";
        }
        this.style.backgroundColor = "white";
        this.style.color = "black";
    });
}
