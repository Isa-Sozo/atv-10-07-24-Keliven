function ordenarDecrescente(a, b, c) {
    let valores = [a, b, c];
    valores.sort(function(x, y) {
        return y - x;
    });
    console.log("Valores em ordem decrescente:", valores[0], valores[1], valores[2]);
}
let valor1 = 22
let valor2 = 243
let valor3 = 2
ordenarDecrescente(valor1, valor2, valor3); 