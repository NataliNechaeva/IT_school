document.addEventListener("DOMContentLoaded",
function(event) {
let url = 'https://api.nasa.gov/planetary/apod?api_key=XAs6u8Pf5MGAqQNj154zrNiWKbEzVc25gpDy6Tqa';
fetch(url)
  .then(response => response.json())
  .then(user => {
    document.getElementById("header").innerText=user.title;
    document.getElementById("date").innerText=user.date;
    document.getElementById("discription").innerText=user.explanation;
    document.getElementById("nasa").src=user.hdurl;
  })
});