// Função para calcular a soma de dois números
function calcularSoma() {
    // Obter os valores dos campos de entrada
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    // Converter os valores para números
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    // Verificar se os números são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').innerText = "Por favor, insira números válidos!";
        return;
    }

    // Calcular a soma
    const soma = numero1 + numero2;

    // Exibir o resultado
    document.getElementById('resultado').innerText = soma;
}
