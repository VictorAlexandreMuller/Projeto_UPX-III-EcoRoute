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
