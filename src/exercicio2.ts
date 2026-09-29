const professores = [
    'Vinicius',
    'Josué',
]
console.log(professores);

professores[professores.length-1] = 'Ana';
console.log(professores);

professores.unshift('Douglas');
console.log(professores);

professores.unshift('Renato')
console.log(professores);

professores.push('Cardin');
console.log(professores);

professores[2-1] = 'Inaiara';
console.log(professores);

professores.shift()
console.log(professores);
