window.onload = function() {
    const tbody = document.querySelector('#tabelaDados tbody');
    const dadosSalvos = JSON.parse(localStorage.getItem('dadosCadastro')) || [];

    dadosSalvos.forEach(dado => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${dado.nome}</td><td>${dado.dataNascimento}</td>`;
        tbody.appendChild(tr);
    });
};

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    // Valida o nome
    if (!/^[A-Za-zÀ-ÖØ-ÿ]+$/.test(nome) || nome.length < 3 || nome.length > 120) {
        alert('Nome deve ter entre 3 e 120 letras e conter apenas letras.');
        return;
    }

    // Valida a data de nascimento
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
        alert('Data de nascimento deve estar no formato DD/MM/AAAA.');
        return;
    }

    const [dia, mes, ano] = dataNascimento.split('/').map(Number);
    if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        alert('Data de nascimento inválida.');
        return;
    }

    // Adiciona os dados à tabela
    const tbody = document.querySelector('#tabelaDados tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${nome}</td><td>${dataNascimento}</td>`;
    tbody.appendChild(tr);

    // Salva os dados no localStorage
    const dadosSalvos = JSON.parse(localStorage.getItem('dadosCadastro')) || [];
    dadosSalvos.push({ nome, dataNascimento });
    localStorage.setItem('dadosCadastro', JSON.stringify(dadosSalvos));

    // Limpa o formulário
    document.getElementById('formCadastro').reset();
});