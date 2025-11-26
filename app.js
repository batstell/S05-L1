const eventos = [
    {
        nome: "Palestra de Pesquisa",
        horario: "15:00",
        local: "Sala 15",
        descricao: "Discussão sobre iniciação científica e novos projetos."
    },
    {
        nome: "Workshop de IA",
        horario: "17:30",
        local: "Lab 8",
        descricao: "Introdução à inteligência artificial aplicada."
    },
    {
        nome: "Reunião do Centro Acadêmico",
        horario: "19:00",
        local: "Auditório 2",
        descricao: "Planejamento de eventos estudantis."
    }
];

let notificacoesAtivas = false;

document.getElementById("toggleNotificacoes").addEventListener("change", (e) => {
    notificacoesAtivas = e.target.checked;
    document.getElementById("statusTexto").innerText =
        notificacoesAtivas ? "Notificações ativadas" : "Notificações desativadas";

    if (notificacoesAtivas) {
        iniciarSistemaDeNotificacoes();
    }
});

// Listar eventos
const container = document.getElementById("eventosContainer");

eventos.forEach(ev => {
    const card = document.createElement("div");
    card.className = "evento-card";
    card.innerHTML = `
        <h3>${ev.nome}</h3>
        <p><b>Horário:</b> ${ev.horario}</p>
        <p><b>Local:</b> ${ev.local}</p>
        <button class="btn-participar" onclick="mostrarNotificacao('${ev.nome}', '${ev.descricao}')">
            Quero participar
        </button>
    `;

    container.appendChild(card);
});

// Simulação de notificações a cada 20 segundos
function iniciarSistemaDeNotificacoes() {
    setInterval(() => {
        if (notificacoesAtivas) {
            const eventoAleatorio = eventos[Math.floor(Math.random() * eventos.length)];
            mostrarNotificacao(eventoAleatorio.nome, eventoAleatorio.descricao);
        }
    }, 20000);
}

function mostrarNotificacao(titulo, texto) {
    document.getElementById("tituloNotif").innerText = titulo;
    document.getElementById("descNotif").innerText = texto;
    document.getElementById("notificacao").classList.remove("hidden");
}

function fecharNotificacao() {
    document.getElementById("notificacao").classList.add("hidden");
}
