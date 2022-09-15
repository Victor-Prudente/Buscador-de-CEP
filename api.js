function consultarDados() {
    let cep = document.querySelector('#cep').value;

    if (cep.length !== 8) {
        alert('CEP inválido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrarDados)
    })
}

function mostrarDados(dados) {
    let resultado = document.querySelector('#resultado');

    if (dados.erro) {
        resultado.innerHTML = 'Não foi possível encontrar o Endereço!'
    } else {
        resultado.innerHTML = `<p><b>Logradouro:</b> ${dados.logradouro}</p>
                            <p><b>Complemento:</b> ${dados.complemento}</p>
                            <p><b>Bairro:</b> ${dados.bairro}</p>
                            <p><b>CEP:</b> ${dados.cep}</p>
                            <p><b>DDD:</b> ${dados.ddd}</p>
                            <p><b>gia:</b> ${dados.gia}</p>
                            <p><b>IBGE:</b> ${dados.ibge}</p>
                            <p><b>Localidade:</b> ${dados.localidade}</p>
                            <p><b>Siafi:</b> ${dados.siafi}</p>
                            <p><b>UF:</b> ${dados.uf}</p>`
    }
}
