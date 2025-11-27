document.addEventListener("DOMContentLoaded", () => {
    fetch("../../data/vacinas.json")
        .then(response => response.json())
        .then(vacinas => carregarVacinas(vacinas))
        .catch(err => console.error("Erro ao carregar vacinas:", err));
});

const carregarVacinas = (vacinas) => {

    const tbody = document.getElementById("vacinas-body");

    console.log(vacinas);

    vacinas.forEach(vacina => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${vacina.nome}</td>
        <td>${vacina.ultimaDose}</td>
        <td>${vacina.proximaDose}</td>
        <td class="${vacina.status === "Em dia" ? "status-ok" : "status-atrasada"}">${vacina.status}</td>
    `;
        tbody.appendChild(tr);
    });

}