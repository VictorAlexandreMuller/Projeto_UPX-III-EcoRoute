// Adiciona um ouvinte de evento para o botão "Voltar à página inicial"
document
  .getElementById("actionButtonVoltaPagina")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let hrefValue = this.getAttribute("href");
    window.location.href = hrefValue;
  });

// ------------------------------------------------

// ------------------------------------------------

// documentacao
// https://ekoopmans.github.io/html2pdf.js/

function gerarPDF() {
  const clicarBotaoPDF = document.getElementById("botao-pdf");
  const obterConteudoParaPDF = document.getElementById("conteudoPDF");

  const formatoPDF = {
    margin: 0,
    filename: "Relatorio-EcoCoin-EcoRoute.pdf",
    html2canvas: { scale: 2, backgroundColor: "#024059" },
    //ou rgb(198, 228, 238)
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  let alertaConfirmar = prompt(
    "Atenção: Esta ação não poderá ser desfeita!\n\n" +
      "Digite ''CONTINUAR'' para realizar a ação.\n\n"
  );

  if (alertaConfirmar === "CONTINUAR") {
    // add container mãe
    let pdfContent = document.createElement("div");
    pdfContent.style.minWidth = "210mm";
    pdfContent.style.minHeight = "296.8mm";
    pdfContent.style.background = "#024059";
    pdfContent.style.margin = "0";
    pdfContent.style.padding = "0";

    // add container sub mãe para organizar os elementos dentro do setup principal
    let divMain = document.createElement("div");
    divMain.style.display = "flex";
    divMain.style.alignItems = "center";
    divMain.style.justifyContent = "center";
    divMain.style.flexDirection = "column";
    // divMain.style.border = "5px solid black";
    pdfContent.appendChild(divMain);

    // add titulo
    let title = document.createElement("h1");
    title.style.padding = "80px 10px 0 10px";
    title.style.fontFamily = "var(--fonte-family-button--GillSans)";
    title.style.color = "#b1f0c1";
    title.style.textAlign = "center";
    title.innerText = "OBRIGADO POR RECICLAR COM O ECOROUTE!";
    divMain.appendChild(title);

    let divIcons = document.createElement("div");
    divIcons.style.margin = "50px";
    divIcons.style.display = "flex";
    divIcons.style.flexDirection = "row";
    divIcons.style.alignItems = "center";
    divIcons.style.gap = "30px";

    divMain.appendChild(divIcons);

    // add imagem 1x
    let image = document.createElement("img");
    image.src = "../7-EcoCoins/Imagens-EcoCoins/ecoCoinIcon.png";
    image.style.maxWidth = "30px";
    image.style.maxHeight = "30px";
    image.style.textAlign = "center";
    divIcons.appendChild(image);

    // add imagem 3x
    let image2 = document.createElement("img");
    image2.src = "../7-EcoCoins/Imagens-EcoCoins/ecoCoinIcon.png";
    image2.style.maxWidth = "60px";
    image.style.maxHeight = "60px";
    image2.style.textAlign = "center";
    divIcons.appendChild(image2);

    // add imagem 5x
    let image3 = document.createElement("img");
    image3.src = "../7-EcoCoins/Imagens-EcoCoins/ecoCoinIcon.png";
    image3.style.maxWidth = "90px";
    image.style.maxHeight = "90px";
    image3.style.textAlign = "center";
    divIcons.appendChild(image3);

    // add conteudo PDF
    let contentToCopy = document
      .getElementById("listaMinhasEcoCoins")
      .cloneNode(true);
    contentToCopy.style.fontSize = "1.5rem";
    contentToCopy.style.margin = "0 0 150px 0";
    contentToCopy.style.fontFamily = "var(--fonte-family-button--GillSans)";
    contentToCopy.style.color = "#b1f0c1";
    contentToCopy.style.textAlign = "center";
    divMain.appendChild(contentToCopy);

    // Adiciona o container ao body (para html2pdf funcionar corretamente)
    document.body.appendChild(pdfContent);

    html2pdf()
      .set(formatoPDF)
      .from(pdfContent)
      .save()
      .then(() => {
        // Remove o container do body após a geração do PDF
        document.body.removeChild(pdfContent);
      });
  } else {
    alert("Ação cancelada.");
  }
}
