// Exercícios de lógica de programação com valores de exemplo.

// Conversor de reais para dólares.
// Taxa fixa usada apenas para estudo; não consulta cotações em tempo real.
const taxaDolar = 5.47;
const valorEmReais = 20000;
const valorEmDolares = valorEmReais / taxaDolar;
console.log(`R$ ${valorEmReais.toFixed(2)} equivalem a US$ ${valorEmDolares.toFixed(2)} na taxa de exemplo.`);

// Conversão de Celsius para Fahrenheit.
const temperaturaCelsius = 40;
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
console.log(`${temperaturaCelsius} °C equivalem a ${temperaturaFahrenheit.toFixed(1)} °F.`);

// Cálculo de IMC: as unidades ficam nos comentários e na mensagem.
const pesoCorporal = 74; // quilogramas
const altura = 1.74; // metros
const imc = pesoCorporal / (altura * altura);
console.log(`IMC calculado para os valores de exemplo: ${imc.toFixed(2)}.`);
