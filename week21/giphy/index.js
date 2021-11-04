function onSearch() {
    let giphysearch = document.getElementById("giphysearch").value;
    console.log(giphysearch)

    fetch ("http://api.giphy.com/v1/gifs/search?q="+giphysearch+"&api_key=SOOWzlsjoD4w4raN7YWaCDZNCr67IHAK&limit=5")
.then(response => response.json())
.then(giphy => {
    document.getElementById("image1").src = giphy.data[0].images.original.url
    document.getElementById("image2").src = giphy.data[1].images.original.url
    document.getElementById("image3").src = giphy.data[2].images.original.url
    document.getElementById("image4").src = giphy.data[3].images.original.url
    document.getElementById("image5").src = giphy.data[4].images.original.url})
.catch(error => console.log(error));
giphysearch=""
}