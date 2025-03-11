function calcularGorjeta(porcentagem) {
    var valorConta = parseFloat(document.getElementById("valorConta").value);

    if (isNaN(valorConta)) {
        document.getElementById("resultado").textContent = "Insira um valor válido.";
        return;
    }

    var gorjeta = valorConta * (porcentagem / 100);
    var total = valorConta + gorjeta;

    document.getElementById("resultado").textContent = "Total a pagar: R$ " + total.toFixed(2);
}