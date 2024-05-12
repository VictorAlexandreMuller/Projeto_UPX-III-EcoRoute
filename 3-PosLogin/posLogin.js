// Adiciona um ouvinte de evento para o botão "EcoCoins"
document
  .getElementById("actionButtonEcoCoins")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });

// Adiciona um ouvinte de evento para o botão "Reciclar"
document
  .getElementById("actionButtonReciclar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });

// Adiciona um ouvinte de evento para o botão "Mapa"
document
  .getElementById("actionButtonMapa")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });
