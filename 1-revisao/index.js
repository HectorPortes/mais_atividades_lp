//-----------------------------------------------------------------------------------------------------------------------------------
// Funções

let numero1 = 18;
let numero2 = 3;

function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    let r = n1 - n2;
    return r;
}

console.log('A soma de 3 + 5 é: ', somar(numero1, numero2));
console.log('A subtração de 5 - 3 é: ', subtrair(numero1, numero2))

//-----------------------------------------------------------------------------------------------------------------------------------
// Tamplate String

// uso de template string para melhorar a formação da string
console.log(`A soma de ${numero1} e ${numero2} é: ${somar(numero1, numero2)}`);
console.log(`A subtração de ${numero1} e ${numero2} é: ${subtrair(numero1, numero2)}`);

//-----------------------------------------------------------------------------------------------------------------------------------
// Arrow function / Função Anônima

const multiplicar = (n1, n2) => {
    let r = n1 * n2;
    return r;
};

console.log(`A multiplicação de ${numero1} e ${numero2} é: ${multiplicar(numero1, numero2)}`);
console.log(typeof(multiplicar))

//-----------------------------------------------------------------------------------------------------------------------------------