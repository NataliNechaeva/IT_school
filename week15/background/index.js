function changebackground () {
    switch(document.getElementById("background").value) {
        case "black": document.body.style.backgroundColor = "#000000"; break;
        case "white": document.body.style.backgroundColor = "#f5f5dc"; break;
        case "blue": document.body.style.backgroundColor = "#0000ff"; break;
        case "red": document.body.style.backgroundColor = "#ff0000"; break;
}
}