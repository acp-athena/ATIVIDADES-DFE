function ordenarNumeros() {

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        alert("Por favor, insira números diferentes.");
        return;
    }

    const numerosOrdenados = [num1, num2, num3].sort((a, b) => a - b);

    document.write('<h2>'+ numerosOrdenados +'</h2>');
}