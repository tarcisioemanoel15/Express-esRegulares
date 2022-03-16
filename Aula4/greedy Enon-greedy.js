const { tx, html } = require('../Aula1/texto');
/* selecionando as tages html abertura e fechamento e
o conteudo que estiver dentro */
console.log(html);

console.log();

// vai pegar tudo (greedy)
console.log(html.match(/<.+>.+<\/.+>/g));

console.log();
//  esse separa com virgulas os fechamentos (non-greedy)
console.log(html.match(/<.+?>.+?<\/.+?>/g)); 
