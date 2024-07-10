function calcularMediaEStatus(nomeAluno, nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    let status;
    if (media >= 7.0) {
        status = "APROVADO";
    } else {
        status = "REPROVADO";
    }
    console.log("Aluno:", nomeAluno);
    console.log("Média das notas:", media.toFixed(2));
    console.log("Situação:", status);
}
let nomeAluno = "João";
let nota1 = 10;
let nota2 = 4;
let nota3 = 9;
let nota4 = 2;
calcularMediaEStatus(nomeAluno, nota1, nota2, nota3, nota4);