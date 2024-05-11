// Obter parâmetros da URL
var urlParams = new URLSearchParams(window.location.search);

// Exibir resultados na página
document.getElementById("distancia").textContent = urlParams.get("distancia");
