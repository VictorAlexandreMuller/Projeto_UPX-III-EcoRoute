// Adiciona um ouvinte de evento para o botão de login/registrar
document
  .getElementById("actionNavButtonLoginRegister")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });

// Adiciona um ouvinte de evento para o botão "Sobre Nós"
document
  .getElementById("actionNavButtonSobreNos")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });

// Adiciona um ouvinte de evento para o botão "EcoRoute"
document
  .getElementById("actionNavButtonEcoRoute")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });
