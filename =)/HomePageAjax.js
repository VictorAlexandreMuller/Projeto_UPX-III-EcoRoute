// AJAX ------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Função para carregar o conteúdo do HTML específico
function carregarConteudo(url) {
  fetch(url)
    .then((resposta) => resposta.text())
    .then((dados) => {
      let pagina = document.querySelector(".conteudo");
      pagina.innerHTML = dados;
      // Busca todos os scripts dentro do HTML inserido
      let scripts = pagina.querySelectorAll("script[src]");
      // Carrega e executa cada script
      scripts.forEach((script) => {
        let novoScript = document.createElement("script");
        novoScript.src = script.src;
        document.body.appendChild(novoScript);
      });
      // Verifica se há scripts embutidos no HTML inserido e executa-os
      let scriptsEmbutidos = pagina.querySelectorAll("script:not([src])");
      scriptsEmbutidos.forEach((script) => {
        eval(script.innerHTML);
      });
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Carrega o conteúdo automaticamente na primeira visita
  carregarConteudo("Geral/geral.html");
});

// Adiciona manipuladores de eventos para os links
let links = document.querySelectorAll("button");
links.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let url = element.getAttribute("href");
    carregarConteudo(url);
  });
});

// -----------------------------------------------------------------------------
