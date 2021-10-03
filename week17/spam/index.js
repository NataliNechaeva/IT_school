function checkspam () {
    let text = document.getElementById("answer").value;
    let text1 = text.replace(/(viagra)/ig, "***");
    let text2 = text1.replace(/(xxx)/ig, "***");
    document.getElementById("answerspam").innerHTML =text2;
}
