window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader")

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        jeader.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
