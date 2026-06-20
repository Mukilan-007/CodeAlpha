function openImage(src) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-img").src = src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}