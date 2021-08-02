var bt = document.getElementsByClassName('bt');

for (var i = 0; i < bt.length; i++) {
    bt[i].addEventListener('click', function() {
        for (var j = 0; j < bt.length; j++) {
            bt[j].style.backgroundColor = "white";
            bt[j].style.color = "black";
        }
        this.style.backgroundColor = "#E0BECE";
        this.style.color = "white";
    })
}