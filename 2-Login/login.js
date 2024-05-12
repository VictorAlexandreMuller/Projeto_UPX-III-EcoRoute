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
  if (
    document.getElementById("nomeRegistrar").value == "" ||
    document.getElementById("emailRegistrar").value == "" ||
    document.getElementById("senhaRegistrar").value == ""
  ) {
    alert("Por favor, preencha todos os campos para realizar o seu cadastro.");
  } else {
    let user = {
      nome: document.getElementById("nomeRegistrar").value,
      email: document.getElementById("emailRegistrar").value,
      senha: document.getElementById("senhaRegistrar").value,
    };

    await fetchUsers(user);

    window.location.href = link;
  }
}

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
