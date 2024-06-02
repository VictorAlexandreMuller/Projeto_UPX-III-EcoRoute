function listaValoresEcoCoins() {
  let listaValoresEcoCoins = document.querySelector("#listaValoresEcoCoins");
  listaValoresEcoCoins.innerHTML = "";

  fetch("../0-Suports/itensParaDescartes.json")
    .then((response) => response.json())
    .then((data) => {
      data.Descartes.forEach((Descartes) => {
        let li = document.createElement("li");

        li.innerHTML = ` (${Descartes.codigo}) ${Descartes.descarte} - EcoCoins: ${Descartes.ecoCoins}`;

        listaValoresEcoCoins.appendChild(li);
      });
    });
}

listaValoresEcoCoins();
