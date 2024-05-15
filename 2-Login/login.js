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
  if (
    document.getElementById("cpfRegistrar").value.length < 14 ||
    document.getElementById("cpfRegistrar").value == "" ||
    document.getElementById("emailRegistrar").value == "" ||
    document.getElementById("senhaRegistrar").value == ""
  ) {
    alert(
      "Por favor, preencha todos os campos corretamente para realizar o seu cadastro."
    );
  } else {
    let user = {
      cpf: document.getElementById("cpfRegistrar").value,
      email: document.getElementById("emailRegistrar").value,
      senha: document.getElementById("senhaRegistrar").value,
    };

    await fetchUsers(user);

    window.location.href = link;
  }
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
// function mascara(i) {
//   var v = i.value;

//   if (isNaN(v[v.length - 1])) {
//     // impede entrar outro caractere que não seja número
//     i.value = v.substring(0, v.length - 1);
//     return;
//   }

//   i.setAttribute("maxlength", "14");
//   if (v.length == 3 || v.length == 7) i.value += ".";
//   if (v.length == 11) i.value += "-";
// }

function somenteNumeros(e) {
  let charCode = e.charCode ? e.charCode : e.keyCode;
  // charCode 8 é para backspace
  if (charCode == 8) {
    return true;
  }
  // charCode 48 até 57 são números de 0 a 9
  if (charCode < 48 || charCode > 57) {
    return false;
  }
  return true;
}

function formatar(mascara, documento) {
  let i = documento.value.length;
  let saida = "#";
  let texto = mascara.substring(i);

  while (texto.substring(0, 1) != saida && texto.length) {
    documento.value += texto.substring(0, 1);
    i++;
    texto = mascara.substring(i);
  }
  return true;
}
