// Adiciona um ouvinte de evento para o botão "Voltar à página inicial"
document
  .getElementById("actionButtonVoltaPagina")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });

// ------------------------------------------------
