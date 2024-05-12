// Adiciona um ouvinte de evento para o botão "Voltar à página inicial"
document
  .getElementById("actionButtonVoltaPagina")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });

// ----------------------------------------------------------------------------------------

async function salvarLixo(link) {
  if (
    document.getElementById("seuUsuario").value == "" ||
    document.getElementById("cpf").value == "" ||
    document.getElementById("cep").value == "" ||
    document.getElementById("produto").value == "" ||
    document.getElementById("informacoesAdicionais").value == ""
  ) {
    alert(
      "Por favor, preencha todos os campos corretamente para encaminhar o agendamento."
    );
  } else {
    let lixo = {
      seuUsuario: document.getElementById("seuUsuario").value,
      cpf: document.getElementById("cpf").value,
      cep: document.getElementById("cep").value,
      produto: document.getElementById("produto").value,
      informacoesAdicionais: document.getElementById("informacoesAdicionais")
        .value,
    };

    await fetchLixo(lixo);

    window.location.href = link;
  }
}

async function fetchLixo(lixo) {
  let url = "https://6638ec524253a866a24fb195.mockapi.io/UPX-Coletas";

  await fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lixo),
  }).then((resposta) => {
    if (resposta.status == 201) {
      window.alert("Salvo com sucesso.");
    }
  });
}
