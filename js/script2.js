let idade = prompt("Idade? ", 18);

let mensagem = (idade<3) ? 'Oi, bebê!':
(idade <10) ? 'Oi!':
(idade <100) ? 'Olá!':
'Voce ainda está por aqui?';

alert( mensagem );

