function Greeting () {
    let UserNameInput=document.getElementById("NameUser");
    console.log(UserNameInput.value);
    document.getElementById('result').innerHTML = `Привет, ${UserNameInput.value}!`;
}