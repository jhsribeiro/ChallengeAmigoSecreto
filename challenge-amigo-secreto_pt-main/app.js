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
    atualizarLista(); // atualiza a lista
    input.value = ""; // limpa o campo de entrada
}

// Função para atualizar a lista de amigos
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

// Função para remover um amigo
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
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

    // Mostrar botão de novo sorteio
    document.getElementById("novoSorteioBtn").style.display = "block";
}

// função do botão de novo sorteio
function novoSorteio() {
    // Limpa o array de amigos
    amigos = [];

    // Limpa a lista exibida na tela
    atualizarLista();

    // Limpa o resultado do sorteio
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Esconde o botão de novo sorteio
    document.getElementById("novoSorteioBtn").style.display = "none";
}


// Permitir adicionar com tecla Enter
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita quebra de linha
        adicionarAmigo(); // chama a função
    }
});
