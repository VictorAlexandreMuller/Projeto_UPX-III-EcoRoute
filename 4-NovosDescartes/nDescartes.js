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
    document.getElementById("boxProduto").value == "" ||
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
      produto: document.getElementById("boxProduto").value,
      informacoesAdicionais: document.getElementById("informacoesAdicionais")
        .value,
    };

    localStorage.setItem("guardarCEP", document.getElementById("cep").value);

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

// ----------------------------------------------------------------------------------
// Seta o usuário do local storage ao usuário da pessoa automaticamente
let usuario = localStorage.getItem("userEmail");
document.querySelector("#seuUsuario").value = usuario;

// Função para buscar o CPF pelo email no MockAPI
function getCpfByEmail(email) {
  return fetch(`${urlServerUsers}`)
    .then((response) => response.json())
    .then((data) => {
      let user = data.find((user) => user.email === email);
      return user ? user.cpf : null;
    });
}

getCpfByEmail(usuario)
  .then((cpf) => {
    if (cpf) {
      document.querySelector("#cpf").value = cpf;
    } else {
      console.error("Usuário não encontrado");
    }
  })
  .catch((err) => {
    console.error(err);
  });

// ----------------------------------------------------------------------------------
// Validador de CEP
var cep = document.getElementById("cep");

cep.addEventListener("input", function (e) {
  var valor = e.target.value;

  // Remove caracteres não numéricos
  valor = valor.replace(/\D/g, "");

  // Adiciona o hífen
  if (valor.length > 5) {
    valor = valor.slice(0, 5) + "-" + valor.slice(5, 8);
  }

  // Atualiza o valor do input
  e.target.value = valor;
});

// ----------------------------------------------------------------------------------
