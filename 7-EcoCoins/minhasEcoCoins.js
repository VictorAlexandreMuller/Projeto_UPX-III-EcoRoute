function listaMinhasEcoCoins() {
  let listaMinhasEcoCoins = document.querySelector("#listaMinhasEcoCoins");
  listaMinhasEcoCoins.innerHTML = "";

  fetch(urlServerColetas)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((Descartes) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let button = document.createElement("button");

        // Refere-se ao Excluir
        // button.innerHTML = "Excluir";
        // button.classList.add("btn-excluir");
        // console.log(Descartes.id);
        // button.onclick = () => {
        //   fetch(`${urlServerColetas}/${Descartes.id}`, {
        //     method: "DELETE",
        //   }).then(() => listaAnimais());
        // };

        // Refere-se ao Editar (( - EcoCoins: ${Descartes.cep}))
        li.innerHTML = ` (${Descartes.seuUsuario}) ${Descartes.produto}`;
        li.href = `../0-Suports/itensParaDescartes.json?id=${Descartes.id}`;
        li.classList.add("linkAnimal");

        li.appendChild(button);
        li.appendChild(a);

        listaMinhasEcoCoins.appendChild(li);
      });
    });
}

listaMinhasEcoCoins();
