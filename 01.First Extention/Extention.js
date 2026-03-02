var para = document.querySelector('p');
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var img = document.querySelector("img");
var id = null;

function generateColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    para.style.color = `rgd(${red},${green},${blue})`;
}

btn1.addEventListener("click", () => {
    id = setInterval(generateColor,1000);
});

btn2.addEventListener("click", () => {
    clearInterval(id);
    para.style.color = "black";
});

btn3.addEventListener("click",() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
        para.textContent = data.value;
        img.setAttribute("src",data.icon.url)
    })
})