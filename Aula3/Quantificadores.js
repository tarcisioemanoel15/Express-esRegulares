const { tx, arquivo } = require('../Aula1/texto');
// console.log(tx)
const regExp1 = /Jo+ão+ /gi;
// console.log(tx.match(regExp1));



//const regExp2 = /\.(jpg|jpeg)/ig;
//const regExp2 = /\.jpe?g/ig;
//const regExp2 = /\.jpe*g/ig; // Vai pegar este nome errado

// {n,m} minimo e maximo
const regExp2 = /\.jpe{0,1}g/ig;

for (const arquivos of arquivo) {
  const valido = arquivos.match(regExp2);

  if (!valido) continue;
  console.log(arquivos, valido);
}

