"use strict";

const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {
    
    // TODO: peça ao usuário seu nome usando prompt()
    let nomeUsiario = prompt("Nome: ");
    // TODO: peça o ano de nascimento e armazene em anoNascimento
    let Datanascimento = prompt("Informe sua data de nascimento: ");
    // Use uma variável para o ano atual
    let ano = 2025;
    // TODO: converta o ano de nascimento para número (parseInt)
    let convertano = parseInt(Datanascimento);
    // TODO: exiba com alert() uma frase: "Olá, NOME! Você tem X anos."
    let idade = ano - convertano;
    let mensagem = ("Olá, " +nomeUsiario+ " você tem " +idade+ " anos.");
    alert(mensagem);
    // TODO: use confirm() para perguntar se a idade está correta
    let resposta = confirm("Sua idade está correta?");
    // Exiba no console a escolha do usuário (console.log ou console.warn)
    console.log ("Nome: "+ nome);
    console.log ("Idade: "+ idade);
    console.log ("Data de nascimento: "+ Datanascimento);

    // Melhore o programa adicionando outros recursos
});
