const salarioMinimo = 1293.20;
function calcularSalariosMinimos(salarioUsuario) {
    let quantidadeSalariosMinimos = salarioUsuario / salarioMinimo;
    console.log("O usuário ganha aproximadamente", quantidadeSalariosMinimos.toFixed(2), "salários mínimos.");
}
let salarioUsuario = 2354.55
calcularSalariosMinimos(salarioUsuario);