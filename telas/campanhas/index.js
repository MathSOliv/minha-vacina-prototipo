const getCampanhas = async () => {
    const response = await fetch("../../data/campanhas.json");
    const campanhas = await response.json();
    return campanhas;
}

const renderizarCampanhas = (campanhas) => {
    const lista = document.getElementById("lista-campanhas");
    lista.innerHTML = '';

    campanhas.forEach(c => {
        const card = document.createElement("div");
        card.classList.add("campanha-card");
        card.innerHTML = `
            <h2>${c.icone} ${c.nome}</h2>
            <span><strong>Período:</strong> ${c.data}</span>
            <p>${c.descricao}</p>
        `;
        lista.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const campanhas = await getCampanhas();
        renderizarCampanhas(campanhas);
        console.log(campanhas);
    } catch (err) {
        console.error("Erro ao carregar campanhas:", err);
    }
});