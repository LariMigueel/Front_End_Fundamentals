function sugerirIngresso() {
    // Obter o valor da idade inserida
    const idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");

    if (idade === "") {
        resultado.textContent = "Por favor, insira sua idade!";
        resultado.style.color = "red";
        return;
    }

    if (idade < 12) {
        resultado.innerHTML = "Categoria de ingresso: <span>Ingresso infantil (R$ 10,00)</span>";
    } else if (idade >= 12 && idade <= 17) {
        resultado.innerHTML = "Categoria de ingresso: <span>Ingresso juvenil (R$ 15,00)</span>";
    } else if (idade >= 18 && idade <= 59) {
        resultado.innerHTML = "Categoria de ingresso: <span>Ingresso adulto (R$ 30,00)</span>";
    } else if (idade >= 60) {
        resultado.innerHTML = "Categoria de ingresso: <span>Entrada gratuita para idosos</span>";
    } else {
        resultado.innerHTML = "Categoria de ingresso: <span>Entrada gratuita</span>";
    }
}