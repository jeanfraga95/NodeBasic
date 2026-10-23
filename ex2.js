let hora = new Date().getHours();
if (hora < 18) {
    saudacao = "tenha um otimo dia!";
} else {
    saudacao = "tenha uma boa noite!";
}
console.log(saudacao);