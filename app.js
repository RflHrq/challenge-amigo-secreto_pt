// Código criado por Rafael Santos

let nomes = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();
    if (nome === '') {
        alert('Digite um nome válido! (o nome não pode ser vazio)');
        return;
    }
    nomes.push(nome);
    document.getElementById('amigo').value = '';
    atualizarAmigo();
    document.getElementById('resultado').innerHTML = '';
    console.log(nomes);
}

function atualizarAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = nomes.map(nome => `<li>${nome}</li>`).join('');

}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Nenhum nome para sortear!');
        return;
    }
    let sorteado = Math.floor(Math.random() * nomes.length);
    document.getElementById('resultado').innerHTML = `Nome sorteado: ${nomes[sorteado]}`;
    nomes = [];
    atualizarAmigo();
}