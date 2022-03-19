const { html2 } = require('../Aula1/texto');

//console.log(html2);

console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 "kkk $3 kkk" $4')); 
