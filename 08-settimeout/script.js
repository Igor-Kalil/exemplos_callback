//EXEMPLO 08 - CallBack que só sera executado mais tarde.

function mostrarAviso() {
    console.log("Tempo encerrado!")
}

//Esta mensagem aparece imediatamente.
console.log("Iniciando contagem ...")

// seTimeout é uma função pronta do JavaScript.
//Recebe (1) o callback e (2) o tempo de milissegundos.
// 3000 milisseundos = aproximadamente 3 segundos.
setTimeout(mostrarAviso, 5000);

// Esta mensagem também aparece antes do callback, pois o código Não fica parado aguardando os três segundos.
console.log("O programa continua executando...");
