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

var cost = document.getElementById("cost");
var val1, val2;

function freq_val(click_id) {
    var freq_val1 = document.getElementById("1");
    var freq_val2 = document.getElementById("2");
    val1 = click_id;
    console.log(val1);
}
function cost_val(cost_id) {
    var cost_val1 = document.getElementById("10");
    var cost_val2 = document.getElementById("20");
    var cost_val3 = document.getElementById("30");
    var cost_val4 = document.getElementById("40");
    val2 = cost_id;
    console.log(val2);
}

function cal_cost() {
    var str = "";
    if (val1 == "1") {
        str = "Cost = $" + val2 + " / Monthly";
        cost.innerHTML = str;
    } else {
        str = "Cost = $" + val2;
        cost.innerHTML = str;
    }
}

cal_cost();
