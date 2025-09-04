//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // adiciona ao array
    atualizarLista(); // atualiza a lista na tela
    input.value = ""; // limpa o campo de entrada
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong></li>`;
}
