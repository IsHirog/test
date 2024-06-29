function quadrado() {

    var num = parseInt(prompt("Altura do quadrado em metros:"));
    if (!isNaN(num)) {
        alert("A área do quadrado é = " + (num * num) + " m²");
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function triangulo() {

    var num1 = parseInt(prompt("Base do triângulo"));
    var num2 = parseInt(prompt("Altura do triângulo"));
    if (!isNaN(num1) && !isNaN(num2)) {
        alert("A área do triângulo é = " + (num1 * num2) / 2 + " m²");
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function circulo() {
    var num = parseInt(prompt("Raio do círculo em metros:"));
    if (!isNaN(num)) {
        alert("A área do círculo é = " + (num * num) * 3.14 + " m²");
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function trapezio() {

    var num1 = parseInt(prompt("Base maior do trapézio"));
    var num2 = parseInt(prompt("Base menor do trapézio"));
    var num3 = parseInt(prompt("Altura do trapézio"));
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        alert("A área do trapézio é = " + ((num1 + num2) * num3) / 2 + " m²");
    } else {
        alert("Por favor, insira um número válido.");
    }
}