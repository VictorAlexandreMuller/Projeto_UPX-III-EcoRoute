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

// --------------------------------------------------------

// Seta o usuário do LocalStorage
window.onload = function () {
  // Seleciona a div pelo id
  var div = document.getElementById("testeeeee");

  // Obtém o email do usuário do localStorage
  var userEmail = localStorage.getItem("userEmail");

  // Define o conteúdo da div para o email do usuário
  div.textContent = userEmail;
};

// --------------------------------------------------------
