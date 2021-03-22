var slideIndexDos = 1;
showSlidesDos(slideIndexDos);

function plusSlidesDos(m) {
    showSlidesDos(slideIndexDos += m);
}

function currentSlideDos(m) {
    showSlidesDos(slideIndexDos = m);
}

function showSlidesDos(m) {
    var i;
    var slidesDos = document.getElementsByClassName("mySlidesDos");
    var dotsDos = document.getElementsByClassName("dotDos");
    if (m > slidesDos.length) { slideIndexDos = 1 }
    if (m < 1) { slideIndexDos = slidesDos.length }
    for (i = 0; i < slidesDos.length; i++) {
        slidesDos[i].style.display = "none";
    }
    for (i = 0; i < dotsDos.length; i++) {
        dotsDos[i].className = dotsDos[i].className.replace(" active", "");
    }
    slidesDos[slideIndexDos - 1].style.display = "block";
    dotsDos[slideIndexDos - 1].className += " active";
}