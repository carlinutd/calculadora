function verificarFigura() {
    
    const lados = parseInt(document.getElementById("lados").value);
    const resultadoElement = document.getElementById("resultado");

    
    if (isNaN(lados) || lados <= 2) {
        resultadoElement.textContent = "Por favor, insira um número válido maior que 2.";
        return;
    }

    let figura = '';

    switch (lados) {
        case 3:
            figura = 'Triângulo';
            break;
        case 4:
            figura = 'Quadrado ou Retângulo';
            break;
        case 5:
            figura = 'Pentágono';
            break;
        case 6:
            figura = 'Hexágono';
            break;
        case 7:
            figura = 'Heptágono';
            break;
        case 8:
            figura = 'Octágono';
            break;
        case 9:
            figura = 'Nonágono';
            break;
        case 10:
            figura = 'Decágono';
            break;
        default:
            figura = 'Figura desconhecida';
    }
    resultadoElement.textContent = `A figura geométrica com ${lados} lados é : ${figura}`;
}