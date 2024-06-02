function listaMinhasEcoCoins() {
  let listaMinhasEcoCoins = document.querySelector("#listaMinhasEcoCoins");
  listaMinhasEcoCoins.innerHTML = "";

  fetch(urlServerColetas)
    .then((response) => response.json())
    .then((data) => {
      let contador = 1;
      var userEmail = localStorage.getItem("userEmail");
      let cpfEncontrado = "";

      data.forEach((Descartes) => {
        let li = document.createElement("li");

        if (Descartes.seuUsuario === userEmail) {
          li.innerHTML = `${contador}- Produto: ${Descartes.produto} - ${Descartes.informacoesAdicionais}`;
          listaMinhasEcoCoins.appendChild(li);
          cpfEncontrado = Descartes.cpf;
          contador++;
        }
      });
      document.getElementById("captarUser").textContent = userEmail;
      document.getElementById("captarCPF").textContent = cpfEncontrado;
    });
}

listaMinhasEcoCoins();
