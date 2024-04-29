document.addEventListener("DOMContentLoaded", function () {
  var entrarBtn = document.getElementById("entrar-btn");

  entrarBtn.addEventListener("click", function () {
    window.location.href = "../PósLogin/poslogin.html";
  });
});

// Adiciona um ouvinte de evento para o botão "Entrar"
document
  .getElementById("actionButtonEntrar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Verifica se todos os campos obrigatórios do formulário estão preenchidos antes de continuar
    if (document.getElementById("loginForm").checkValidity()) {
      var hrefValue = this.getAttribute("href");
      window.location.href = hrefValue;
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
