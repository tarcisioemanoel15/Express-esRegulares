/*
^ -> comessa com
$ -> Treminacom
[^] -> negação
m -> multiline checa inha por pinha
*/

// ^ O comessa com não vai ter nada antes dela não pode ter nem um espaso a mais
// $ O termina com não vai ter mais nada depois termuna ali -45

const cpf = '254.224.877-45';

const cpfregExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;
//console.log(cpf);
console.log(cpf.match(cpfregExp));