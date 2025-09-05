// array para armazenar os nomes
let amigos = [];

// função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // adiciona ao array
    atualizarLista(); // atualiza a lista
    input.value = ""; // limpa o campo de entrada
}

// função para atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        // Botão remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("remove-btn");
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// função para remover um amigo
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong></li>`;

    // mostrar botão de novo sorteio
    document.getElementById("novoSorteioBtn").style.display = "block";
}

// função do botão de novo sorteio
function novoSorteio() {
    // limpa o array de amigos
    amigos = [];

    // limpa a lista exibida na tela
    atualizarLista();

    // limpa o resultado do sorteio
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // esconde o botão de novo sorteio
    document.getElementById("novoSorteioBtn").style.display = "none";
}


// permitir adicionar com tecla Enter
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita quebra de linha
        adicionarAmigo(); // chama a função
    }
});
