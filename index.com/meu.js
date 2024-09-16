document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#meuFormulario");
    const nomeInput = document.querySelector("#nome");
    const dataNascimentoInput = document.querySelector("#dataNascimento");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Validação de Nome
      const nome = nomeInput.value;
      if (!validarNome(nome)) {
        nomeInput.setCustomValidity("Nome deve ter entre 3 e 120 letras e conter apenas letras.");
      } else {
        nomeInput.setCustomValidity("");
      }

      // Validação de Data de Nascimento
      const dataNascimento = dataNascimentoInput.value;
      if (!validarDataNascimento(dataNascimento)) {
        dataNascimentoInput.setCustomValidity("Data deve estar no formato DD/MM/AAAA e o mês deve ser válido.");
      } else {
        dataNascimentoInput.setCustomValidity("");
      }

      // Se o formulário for válido, exibe os valores no console
      if (form.checkValidity()) {
        console.log({
          nome: nome,
          dataNascimento: dataNascimento,
        });
        form.submit(); // Submete o formulário
      } else {
        form.reportValidity(); // Mostra os erros
      }
    });

    function validarNome(nome) {
      const regex = /^[A-Za-z\s]{3,120}$/;
      return regex.test(nome);
    }

    function validarDataNascimento(data) {
        // Expressão regular para verificar o formato dd/mm/aaaa
        const regex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    
        // Verifica se a string corresponde ao formato
        if (!regex.test(data)) {
            return false;
        }
    
        function validarDataNascimento(data) {
            const regex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            return regex.test(data)
    }
  );