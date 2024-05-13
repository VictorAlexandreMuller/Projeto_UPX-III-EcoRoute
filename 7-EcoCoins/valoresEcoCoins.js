function listaValoresEcoCoins() {
  let listaValoresEcoCoins = document.querySelector("#listaValoresEcoCoins");
  listaValoresEcoCoins.innerHTML = "";

  fetch("../0-Suports/itensParaDescartes.json")
    .then((response) => response.json())
    .then((data) => {
      data.Descartes.forEach((Descartes) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let button = document.createElement("button");

        // Refere-se ao Excluir
        // button.innerHTML = "Excluir";
        // button.classList.add("btn-excluir");
        // console.log(Descartes.id);
        // button.onclick = () => {
        //   fetch(`${urlServer}/${Descartes.id}`, {
        //     method: "DELETE",
        //   }).then(() => listaAnimais());
        // };

        // Refere-se ao Editar
        li.innerHTML = ` (${Descartes.codigo}) ${Descartes.descarte} - EcoCoins: ${Descartes.ecoCoins}`;
        li.href = `../0-Suports/itensParaDescartes.json?id=${Descartes.id}`;
        li.classList.add("linkAnimal");

        li.appendChild(button);
        li.appendChild(a);

        listaValoresEcoCoins.appendChild(li);
      });
    });
}

listaValoresEcoCoins();
