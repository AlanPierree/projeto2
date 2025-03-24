document.getElementById("Confirmar").addEventListener("click", function () {
    // Obter o autor selecionado
    const autor = document.getElementById("autor").value;

    // Mensagens para cada autor
    const mensagens = {
        "agatha christie": "jlnld",
        "arthur doyle": "",
        "edgar poe": "",
        "shakespeare": "",
        "rick riordan": "",
        "rowling": "",
        "tolkien": "",
    }

    // Buscar a mensagem para o autor selecionado
    const mensagem = mensagens[autor] || "Não foi possível identificar o autor. Tente novamente.";

    // Exibir a mensagem na página
    document.getElementById("mensagemConfirmar").innerText = mensagem;
});
