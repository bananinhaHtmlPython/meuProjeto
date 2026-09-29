const notas = [
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
]

notas.forEach((nota) => {
    if(nota < 5){
        console.log("Nota:", nota,"Reprovado");
    }else{
        console.log("Nota:", nota,"Aprovado");
    }
});

console.log('')
console.log('ou')
console.log('')

for(const nota of notas){
    if(nota < 5){
        console.log("Nota:", nota,"Reprovado");
    }else{
        console.log("Nota:", nota,"Aprovado");
    }
}