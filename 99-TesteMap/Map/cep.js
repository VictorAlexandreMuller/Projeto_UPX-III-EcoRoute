// ----------------------------------------------------------------------------
function consultar(event) {
  event.preventDefault();
  let cep = document.querySelector("#cep").value;
  if (cep == "") {
    window.alert("Digite o CEP.");
    return;
  }
  cep = cep.replace(".", "").replace("-", "");
  consultarCep(cep).then((dados) => {
    document.querySelector("#rua").value = dados.address;
    document.querySelector("#bairro").value = dados.district;
    document.querySelector("#estado").value = dados.state;

    document.querySelector("#idOrigem").value = dados.lat + ", " + dados.lng;
    // document.querySelector("#idDestino").value = dados.state;
  });
}
function consultarCep(cep) {
  // https://viacep.com.br/ws/18015066/json/
  // https://github.com/raniellyferreira/awesomeapi-cep
  let url = `https://cep.awesomeapi.com.br/json/${cep}`;
  return (resposta = fetch(url).then((resposta) => resposta.json()));
}
