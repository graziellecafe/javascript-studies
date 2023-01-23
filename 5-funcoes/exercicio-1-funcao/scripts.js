function imprimirNoConsole() {
    console.log("Hello World!"); 
}

imprimirNoConsole();

// ------------------------------ // 

function imprimirNumero(numero) {
    console.log(`O numero digitado foi ${numero}`); 
}

imprimirNumero(10); 

// ------------------------------ // 

const numeroAleatorio = function() {
    numero = Math.random(); 
    console.log(`O número aleatório foi ${numero}`); 
}

numeroAleatorio(); 

// ------------------------------ // 

const multiplicaNumeros = function(x,y) {
    multiplica = x*y; 
    console.log(`A multiplicação entre o número ${x} e ${y} é ${multiplica}!`);
}

multiplicaNumeros(2,3); 

// ------------------------------ // 

const podeDirigir = function(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir!"); 
    } else {
        console.log("Não pode dirigir!"); 
    }
}

const idade = 17; 
const cnh = true; 
podeDirigir(idade, cnh)