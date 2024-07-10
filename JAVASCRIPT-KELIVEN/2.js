function calcular(A, B) {
    let C; 
    if (A === B) {
        C = A + B; 
    } else {
        C = A * B; 
    }
    console.log("O resultado é:", C);
}
let valorA = 4
let valorB = 6
calcular(valorA, valorB); 