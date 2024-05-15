function validacao(link) {
  const url = new URL("https://6638ec524253a866a24fb195.mockapi.io/UPX-Users");

  url.searchParams.append("email", document.getElementById("emailLogin").value);

  fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
      alert("Fora do ar.");
    })
    .then((users) => {
      // mockapi returns only tasks that match `hello` string
      if (users[0].senha == document.getElementById("senhaLogin").value) {
        acesso = users[0].email;
        console.log(acesso);
        window.location.href = link;
      } else {
        alert("Senha inválida.");
      }
    })
    .catch((error) => {
      // handle error
      alert("Usuário não encontrado.");
    });
}

// -------------------------------------------------------------------------------------------------

async function salvarUser(link) {
  if (document.getElementById("cpfRegistrar").value == "") {
    alert("Por favor, preencha o CPF corretamente para continuar.");
    return;
  }
  if (document.getElementById("cpfRegistrar").value.length < 14) {
    alert("Por favor, o CPF deve conter todos os caracteres necessários.");
    return;
  }

  if (document.getElementById("emailRegistrar").value == "") {
    alert("Por favor, preencha o E-mail corretamente para continuar.");
    return;
  }
  if (document.getElementById("senhaRegistrar").value == "") {
    alert("Por favor, preencha a senha para continuar.");
    return;
  }
  if (!validaCPF(document.getElementById("cpfRegistrar").value)) {
    alert("Por favor, preencha um CPF VÁLIDO para continuar.");
    return;
  }
  let user = {
    cpf: document.getElementById("cpfRegistrar").value,
    email: document.getElementById("emailRegistrar").value,
    senha: document.getElementById("senhaRegistrar").value,
  };

  await fetchUsers(user);

  window.location.href = link;
}

// -------------------------------------------------------------------------------------------------

async function fetchUsers(user) {
  let url = "https://6638ec524253a866a24fb195.mockapi.io/UPX-Users";

  await fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((resposta) => {
    if (resposta.status == 201) {
      window.alert("Salvo com sucesso.");
    }
  });
}

// -------------------------------------------------------------------------------------------------

// Mascara de CPF do campo registro
document.getElementById("cpfRegistrar").addEventListener("input", function (e) {
  var value = e.target.value;
  var cpfPattern = value
    .replace(/\D/g, "") // Remove qualquer coisa que não seja número
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o sexto dígito
    .replace(/(\d{3})(\d)/, "$1-$2") // Adiciona traço após o nono dígito
    .replace(/(-\d{2})\d+?$/, "$1"); // Impede entrada de mais de 11 dígitos
  e.target.value = cpfPattern;
});

// -------------------------------------------------------------------------------------------------

function validaCPF(cpf) {
  cpf = cpf.replace(/\D+/g, "");
  if (cpf.length !== 11) return false;

  let soma = 0;
  let resto;
  if (/^(\d)\1{10}$/.test(cpf)) return false; // Verifica sequências iguais

  for (let i = 1; i <= 9; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}
