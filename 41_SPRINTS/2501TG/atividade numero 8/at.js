function converterTemperatura() {
    const valor = parseFloat(document.getElementById('valor').value);
    const escala = document.getElementById('escala').value;
    let resultado = "";

    if (escala === "Celsius") {
        resultado = `Fahrenheit: ${(valor * 9/5) + 32}°F\nKelvin: ${valor + 273.15}K`;
    } else if (escala === "Fahrenheit") {
        resultado = `Celsius: ${(valor - 32) * 5/9}°C\nKelvin: ${((valor - 32) * 5/9) + 273.15}K`;
    } else if (escala === "Kelvin") {
        resultado = `Celsius: ${valor - 273.15}°C\nFahrenheit: ${(valor - 273.15) * 9/5 + 32}°F`;
    }

    document.getElementById('resultado').textContent = resultado;
}
