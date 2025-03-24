document.getElementById("Confirmar").addEventListener("click", function () {
    // Obter o autor selecionado
    const autor = document.getElementById("autor").value;

    // Mensagens para cada autor
    const mensagens = {
        "agatha christie": "Assassinato no Expresso do Oriente; Morte no Nilo; E Não Sobrou Nenhum. ",
        "arthur doyle": "Sherlock Holmes (56 histórias); O Mundo Perdido.",
        "edgar poe": "O Corvo; O Gato Preto; Os Assassinatos da Rua Morgue.",
        "shakespeare": "Romeu e Julieta; Hamlet; Macbeth.",
        "rick riordan": "Percy Jackson e os Olimpianos; Os Heróis do Olimpo; Magnus Chase e os Deuses de Asgard.",
        "rowling": "Saga Harry Potter (7 livros); Animais Fantásticos.",
        "tolkien": "Senhor dos Anéis; O Hobbit.",
    }

    // Buscar a mensagem para o autor selecionado
    const mensagem = mensagens[autor] || "Não foi possível identificar o autor. Tente novamente.";

    // Exibir a mensagem na página
    document.getElementById("mensagemConfirmar").innerText = mensagem;
});
