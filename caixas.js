function nomear() {
    let resposta = confirm("Posso saber qual o seu nome?");
    if (resposta) {
        let nome = prompt("Qual o seu nome?");
        alert("Seja bem-vindo(a) " + nome);
    } else {
        alert("Você respondeu que não. Que pena! Bye bye!");
    }
}
