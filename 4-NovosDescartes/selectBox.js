// Carrega o arquivo JSON
fetch("../0-Suports/itensParaDescartes.json")
  .then((response) => response.json())
  .then((data) => {
    function sortByDescarte(a, b) {
      if (a.descarte < b.descarte) {
        return -1;
      }
      if (a.descarte > b.descarte) {
        return 1;
      }
      return 0;
    }

    // Cria opções para um <select> dado um array de objetos
    function popularSelect(selectId, dataArray) {
      const select = document.getElementById(selectId);
      const option1 = document.createElement("option");

      option1.value = "";
      option1.textContent = "Selecione o descarte";
      option1.classList.add("comboTextAreaJS"); // Adiciona a classe ao textContent acima para estilizar no css
      select.appendChild(option1);

      // Ordena o array de objetos pelo campo 'descarte'
      dataArray.sort(sortByDescarte);

      dataArray.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.descarte;
        option.textContent = item.descarte + " - " + item.codigo;
        option.classList.add("comboTextAreaOptionsJS");
        select.appendChild(option);
      });
    }

    // Popula os <select> com os dados do JSON
    popularSelect("boxProduto", data.Descartes);
  });
