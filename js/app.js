let listaSorteio = [];

function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo');
    let maiusculo = nomeDoAmigo.value.toUpperCase();
    if(maiusculo == ''){
        alert('Insira o nome do amigo!');
        return;
    } 
    if (listaSorteio.includes(maiusculo)) {
        alert('Esse nome ja está na lista!');
        return;
    }
        let listaDeAmigos = document.getElementById('lista-amigos');

        listaSorteio.push(maiusculo);
    
        if (listaDeAmigos.textContent == '') {
            listaDeAmigos.textContent = maiusculo;
        } else {
            listaDeAmigos.textContent += ', ' + maiusculo;
        }
        maiusculo = '';
    
    
}

function sortear() {
    if( listaSorteio.length < 4 ){
        alert('Adicione no minimo 4 amigos!');
        return;
    }
    embaralha(listaSorteio);
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

        
        [listaDeAmigos[indice - 1], listaDeAmigos[indiceAleatorio]] = 
            [listaDeAmigos[indiceAleatorio], listaDeAmigos[indice - 1]];
    }
}


function reiniciar() {
    listaSorteio = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';

}
