let listaSorteio = [];

function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo');
    let listaDeAmigos = document.getElementById('lista-amigos');

    listaSorteio.push(nomeDoAmigo.value);

    if (listaDeAmigos.textContent == '') {
        listaDeAmigos.textContent = nomeDoAmigo.value;
    } else {
        listaDeAmigos.textContent += ', ' + nomeDoAmigo.value;
    }
    nomeDoAmigo.value = '';
}

function sortear() {
    embaralha(listaSorteio)
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaSorteio.length; i++) {
        if (i == listaSorteio.length - 1){
            sorteio.innerHTML += listaSorteio[i] + ' --> ' + listaSorteio[0] + '<br/>';
        } else {
            sorteio.innerHTML += listaSorteio[i] + ' --> ' + listaSorteio[i + 1] + '<br/>';
        }       
        
    }
 
}

function embaralha(listaDeAmigos) {

    for (let indice = listaDeAmigos.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [listaDeAmigos[indice - 1], listaDeAmigos[indiceAleatorio]] = 
            [listaDeAmigos[indiceAleatorio], listaDeAmigos[indice - 1]];
    }
}


function reiniciar() {
    listaSorteio = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';

}