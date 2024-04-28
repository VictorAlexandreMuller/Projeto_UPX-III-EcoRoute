// Utilizar para testes
function log() {
  console.log("lol");
}

// Adiciona um ouvinte de evento para o botão "Saiba Mais"
document
  .getElementById("actionButtonSaibaMais")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });
