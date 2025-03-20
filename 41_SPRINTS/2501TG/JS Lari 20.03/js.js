let codigoCorreto = 1234; // Código correto
let tentativasRestantes = 3; // Número máximo de tentativas

// Função para validar o código
function validarCodigo() {
    let codigo = document.getElementById("codigo").value;
    let status = document.getElementById("status");
    let tentativas = document.getElementById("tentativas");

    // Verifica se o código é numérico e maior ou igual a 1000
    if (!codigo || isNaN(codigo) || parseInt(codigo) < 1000) {
        status.textContent = "Código inválido! Tente novamente.";
        tentativas.textContent = "Você ainda tem " + tentativasRestantes + " tentativas.";
        document.getElementById("codigo").value = ''; // Limpa o campo de código
        return;
    }

    // Converte para número inteiro
    codigo = parseInt(codigo);

    // Verifica se o código está correto
    if (codigo === codigoCorreto) {
        status.textContent = "Acesso autorizado!";
        tentativas.textContent = "";
        document.getElementById("codigo").value = ''; // Limpa o campo de código
    } else {
        tentativasRestantes--;
        if (tentativasRestantes > 0) {
            status.textContent = "Código incorreto. Tente novamente.";
            tentativas.textContent = "Você ainda tem " + tentativasRestantes + " tentativas.";
        } else {
            status.textContent = "Acesso bloqueado por segurança.";
            tentativas.textContent = "";
            document.getElementById("codigo").disabled = true; // Desabilita o campo de código
        }
    }
}


function reiniciarTentativas() {
    tentativasRestantes = 3; // Reinicia as tentativas
    status.textContent = "Digite o código de acesso:";
    tentativas.textContent = "Você ainda tem " + tentativasRestantes + " tentativas.";
    reiniciarBtn.style.display = "none"; // Esconde o botão de reiniciar tentativas
    codigoInput.disabled = false; // Habilita o campo de código novamente
    codigoInput.value = ''; // Limpa o campo de código
}
