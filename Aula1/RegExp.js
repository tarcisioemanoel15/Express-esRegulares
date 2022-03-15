const { tx } = require('./texto');

const regExp1 = /(amet|consectetur)( adipisicing)/i;
const regExp2 = regExp1.exec(tx);


if (regExp2) {
  console.log(regExp2[0]); // no indice 0 tudo que foi encontrado
  console.log(regExp2[1]); // no indice 1 mostra o primeiro
  console.log(regExp2[2]); // mostra o segundo
}
