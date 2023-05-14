const dark = document.getElementById("darkmode");

const body = document.querySelector("body");

const buttonChange = document.querySelector(".sun");

const header = document.querySelector("header")

const main = document.querySelector("main")

const pokeCard = document.querySelector(".poke-cartao")

darkmode.addEventListener("click", () => {

    const darkmodeActive = body.classList.contains("darkmode");

    if (darkmodeActive) {
        body.classList.remove("darkmode")
        header.classList.remove("darkmode")
        main.classList.remove("darkmode")
        buttonChange.setAttribute ("src", "./src/imagens/sun.png")

    } else {
        body.classList.add("darkmode");

        buttonChange.setAttribute("src", "./src/imagens/moon.png");

        header.classList.add("darkmode");

        main.classList.add("darkmode");
    };


  






});