//Exemplo 01- Callback-básico
//Objetivo: entender que podemos entregar uma função para outra função

//está função sabe qual mensagem deve mostrar
function dizerOla() {
    console.log("Olá, turma!");
}

//O parâmetro "funcaoRecebida" receberá uma função.
//O nome do parâmetro é livre: não precisa se chamar "CallBack".
function executar(funcaoRecebida) {
    funcaoRecebida(); // Os parênteses fazem a função recebida EXECUTAR.
}

//Sem parênteses: entregamos a fnção dizerOla, sem executá-la aqui.
executar(dizerOla);
//Saída: Olá, turma
