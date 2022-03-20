const { loock } = require('../Aula1/texto');

console.log(loock);

// termina com active
// console.log(loock.match(/.+[^in]active$/gim));

// Positivo LOOKAHEAD (Frases que tem active)
// console.log(loock.match(/.+(?=[^in]active)/gim));

// Positivo LOOKAHEAD (Frases que tem inactive)
// console.log(loock.match(/.+(?=\s+inactive)/gim));

// Negativo LOOKAHEAD (Frases que não tem active)
// console.log(loock.match(/^(?!.+[^in]active).+$/gim));

// Positive lookbehind (frases que comessam com online)
// console.log(loock.match(/(?<=online\s+)\S+.*/gim));

// Negative lookbehind (frases que não comessam com online)
// console.log(loock.match(/^.+(?<!online.+)$/gim));