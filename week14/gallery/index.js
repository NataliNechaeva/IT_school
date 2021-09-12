function nextSlide() {
    let restimage = document.getElementById('restimage');
    restimage.src="images/image2.jpg";
    let restimage2 = document.getElementById('restimage2');
    restimage2.src="images/image3.jpg";
    let restimage3 = document.getElementById('restimage3');
    restimage3.src="images/image1.jpg";
}
function previousSlide() {
    let restimage = document.getElementById('restimage');
    restimage.src="images/image3.jpg";
    let restimage2 = document.getElementById('restimage2');
    restimage2.src="images/image1.jpg";
    let restimage3 = document.getElementById('restimage3');
    restimage3.src="images/image2.jpg";
}

