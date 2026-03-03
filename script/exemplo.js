
const footer = document.getElementById("footer")
//footer.style.color = "yellow"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "batata"
// console.log(novoTitulo)
footer.appendChild(novoTitulo)

//getElementById = puxa um elemento do HTML

const header = document.getElementById("exemplo")
header.appendChild(novoTitulo)


header.addEventListener("click", () => {
    alert("RESENHA MASTER")
})