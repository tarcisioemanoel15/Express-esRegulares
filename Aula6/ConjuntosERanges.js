const { alfabeto } = require('../Aula1/texto');

console.log(alfabeto);
console.log();
// ^ mostra tudo menos o que ta dentro do []
//[] encontra tudo o que ta dentro


//console.log(alfabeto.match(/[^ABC]/g));
//console.log(alfabeto.match(/[ABC123]+/g));

// se colocar o + vai pegar na sequencia
//console.log(alfabeto.match(/[a-z]+/g));

//console.log(alfabeto.match(/[^a-z-A-Z-5-9]/g));


// Localizar Palavra com acentos
//console.log(alfabeto.match(/[a-zçã@]+/g))


// \w é o mesmo que a (/[a-zA-Z0-9]/g);
// para fazer negando o w é maiusculo (/\W/g)

// para encontrar os numeros (/\d+/g); D para negar
console.log(alfabeto.match(/\w/g))
