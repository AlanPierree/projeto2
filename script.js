document.getElementById("Confirmar").addEventListener("click", function () {
    // Obter o sintoma selecionado
    const sintoma = document.getElementById("sintoma").value;

    // Mensagens para cada sintoma
    const mensagens = {
        "dor de cabeça": "Possível enxaqueca ou estresse.",
        "dor de garganta": "Pode ser faringite ou amigdalite.",
        "dor de barriga": "Pode estar relacionado a problemas gástricos ou intestinais.",
        "dor nas costas": "Possível má postura ou sobrecarga muscular.",
        "dor no peito": "Atenção! Pode ser algo cardíaco ou muscular.",
        "dor no pé": "Possível entorse ou uso excessivo.",
        "dor no braço": "Pode indicar tensão muscular ou sobrecarga.",
        "dor no joelho": "Possível desgaste articular ou inflamação.",
        "dor no ombro": "Pode ser tendinite ou tensão muscular.",
        "dor no pescoço": "Pode ser má postura ou torcicolo.",
        "dor no pulso": "Possível tendinite ou uso repetitivo.",
        "dor no tornozelo": "Provavelmente uma entorse ou esforço excessivo.",
        "dor no quadril": "Pode estar relacionado a desgaste articular.",
        "dor no cotovelo": "Possível epicondilite ou sobrecarga.",
        "dor no dedo": "Talvez inflamação ou lesão menor.",
        "dor no calcanhar": "Pode ser fascite plantar ou uso excessivo.",
        "dor no estômago": "Possível gastrite ou má digestão.",
        "dor no fígado": "Pode ser uma inflamação ou outro problema hepático.",
        "dor no intestino": "Pode indicar prisão de ventre ou infecção.",
        "dor no rim": "Possível infecção ou cálculo renal.",
        "dor no olho": "Pode ser cansaço ou conjuntivite.",
        "dor no ouvido": "Possível infecção ou pressão interna.",
        "dor no pulmão": "Atenção! Pode ser um problema respiratório sério.",
    };

    // Buscar a mensagem para o sintoma selecionado
    const mensagem = mensagens[sintoma] || "Não foi possível identificar o problema para o sintoma selecionado.";

    // Exibir a mensagem na página
    document.getElementById("mensagemConfirmar").innerText = mensagem;
});
