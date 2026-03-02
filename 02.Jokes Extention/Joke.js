const para = document.getElementById("joke");
const btn = document.getElementById("btn");
const img = document.getElementById("jokeImg");

btn.addEventListener("click", () => {

    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            para.textContent = data.value;
            img.src = data.icon_url;
        })
        .catch(error => {
            para.textContent = "Failed to fetch joke 😢";
            console.error(error);
        });

});