// (LOGIN) Verifica se o login existe no banco de dados. Se sim, entra.
function validacao(link) {
  const url = new URL("https://6638ec524253a866a24fb195.mockapi.io/UPX-Users");
  const emailLogin = document.getElementById("emailLogin").value;

  url.searchParams.append("email", emailLogin);

  fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
      // alert("Fora do ar.");
    })
    .then((users) => {
      // mockapi returns only tasks that match `hello` string
      if (users[0].senha == document.getElementById("senhaLogin").value) {
        acesso = users[0].email;

        // DOCUMENTO LOCAL STORAGE: https://warcontent.com/localstorage-javascript/
        localStorage.setItem("userEmail", emailLogin);

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

// (REGISTER) Verifica se os campos foram inseridos corretamente e salva o objeto criado com ajuda da function "fetchUsers"
async function salvarUser(link) {
  const cpfRegistrar = document.getElementById("cpfRegistrar").value;
  const emailRegistrar = document.getElementById("emailRegistrar").value;
  const senhaRegistrar = document.getElementById("senhaRegistrar").value;

  if (
    cpfRegistrar == "" ||
    cpfRegistrar.length < 14 ||
    !validaCPF(cpfRegistrar)
  ) {
    alert("Por favor, preencha corretamente o CPF para continuar.");
    return;
  }
  if (!validarEmail(emailRegistrar)) {
    return;
  }
  if (senhaRegistrar == "") {
    alert("Por favor, preencha a senha para continuar.");
    return;
  }
  if (!(await validarCadastramento())) {
    return;
  } else {
    console.log("else");
    let user = {
      cpf: cpfRegistrar,
      email: emailRegistrar,
      senha: senhaRegistrar,
    };

    await fetchUsers(user);

    window.location.href = link;
  }
}

// -------------------------------------------------------------------------------------------------

// (REGISTER) Entra em contato com o banco de dados MockAPI para salvar o "user"
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

// (REGISTER) Mascara de CPF do campo registro
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

// (REGISTER) Verifica se o CPF é um CPF existente ou não
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

// -------------------------------------------------------------------------------------------------

// (REGISTER) Valida se o email já está cadastrado
// (REGISTER) Valida se o CPF já está cadastrado
async function validarCadastramento() {
  const verificarEmailBd = document.getElementById("emailRegistrar").value;
  const verificarCpfBd = document.getElementById("cpfRegistrar").value;

  const response = await fetch(
    "https://6638ec524253a866a24fb195.mockapi.io/UPX-Users"
  );
  const data = await response.json();

  const emailExiste = data.some((user) => user.email === verificarEmailBd);
  const cpfExiste = data.some((user) => user.cpf === verificarCpfBd);
  if (emailExiste) {
    alert("Este email já está cadastrado!");
    return false;
  }

  if (cpfExiste) {
    alert("Este CPF já está cadastrado!");
    return false;
  }

  return true;

  // if (!emailExiste && !cpfExiste) {
  //   alert(
  //     "mensagem"
  //   );
  // }
}

// -------------------------------------------------------------------------------------------------

// (REGISTER) Retorna se é um email válido ou não para ser inserido no campo "E-mail" de cadastro
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  const regex2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]+\.[a-zA-Z]+$/;

  if (regex.test(email) || regex2.test(email)) {
    // alert("E-mail válido");
    return true;
  } else {
    alert("E-mail inválido");
    return false;
  }
}
