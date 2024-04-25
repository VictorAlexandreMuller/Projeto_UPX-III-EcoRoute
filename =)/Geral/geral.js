function log() {
  console.log("lol");
}

// Adiciona manipuladores de eventos para os links
let links = document.querySelectorAll("button");

let pagina = document.links.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let url = element.getAttribute("href");
    carregarConteudo(url);
  });
});
