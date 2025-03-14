function calcularPreco() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const servico = document.getElementById('servico').value;
    let preco = 0;

    if (servico === "UberX") {
        preco = distancia * 2.50;
    } else if (servico === "Uber Comfort") {
        preco = distancia * 3.50;
    } else if (servico === "Uber Black") {
        preco = distancia * 5.00;
    }

    document.getElementById('preco').textContent = `R$ ${preco.toFixed(2)}`;
}
