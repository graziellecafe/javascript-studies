# Overview 
Repositório criado para estudar Javascript do básico ao avançado

## Mapa Mental do Curso 
1. Introdução do curso
2. Tipos de dados e operadores 
3. Exercícios sobre tipos de dados 
4. Estruturas de programação 
5. Exercícios sobre estruturas
6. Funções 
7. Exercícios sobre funções 
8. Objetos e Arrays
9. Exercícios sobre objetos e arrays 
10. Conceitos de orientação a objetos 
11. Exercícios sobre OO 
12. Debugs e erros no JS 
13. Expressões regulares 
14. Exercícios 
15. Programação assíncrona
16. Javascript no navegador 
17. Eventos com Javascript
18. Projeto com Javascript
19. Node JS
20. Projeto em Node 

# Section 1: Introdução 
## O que é Javascript? 
* É uma linguagem de programação de alto nível, 
* Javascript = JS = Vanilla Javascript = ECMAScript
* Criada para deixar as páginas web vivas
* Just-in-time compiled: é executada em real time
* É uma linguagem orientada a objetos 

## Onde o Javascript é utilizado? 
* Interagir com HTML e CSS (DOM: Document Object Model). Fazer ações como tirar elementos, exibir elementos, etc. 
* Calcular, manipular e validar dados: largura e tamanho da tela por exemplo e manipular 
* Pode ser utilizada como linguagem serve-side (Node.js)
* Linguagem base de grandes framewors (React, Angular, Vue).

# Section 2: Tipos de dados e operadores 
Conhecer os tipos de dados em JS e também os operadores da linguagem 

## O que são os tipos de dados? 
É a classificação / categoria de um dado 

Tipos de dados: 
* Number (Aritmético, Special Numbers), 
* String, 
* Boolean (Comparações e operadores lógicos), 
* Empty values ( null, undefined ). 

# Section 4: Estruturas de Programação 
Seção sobre tópicos como: estrutura de controle, repetição, funções e etc. 

## O que é um software? 
* É um conjunto de declarações (statements): comparações, operadores lógicos, condicionais
* Statements são conjuntos de expressões (expressions)
* Expression é todo fragmento de código que produz um valor 
* Expression (if) -> Statement (Várias expressões) -> Software

O software possui um objetivo e os statements "guiam" o software para o seu objetivo (ex: if). As Expressions são os valores que os statments esperam para guiar o software. 

## O que são variáveis 
* Modo como salvar valores na memória 
* Salvamos os valores em variáveis (isso é um statement)
* ``` let laranjas = 5 ```
* Depois podemos criar expressões com os valores salvos 
* ```console.log(`Tem ${laranjas} na cesta`)```

## Como funciona o ambiente 
* Quando qualquer programa é iniciado, um ambiente é criado 
* Este ambiente não se inicia vazio 
* Ele contém **funções** nativas da linguagem 
* **Funções** são blocos de código, que nos retonram um valor ou ação 
* O ambiente de Javascript, neste curso podemos entender como o navegador 

## Funções 
* Funções são chamadas durante o programa 
* Você pode ouvir: executar, chamar, invocar uma função 
* Nós chamamos uma função utilizando o nome dela + abrindo e fechando parênteses ```nomeDaFuncao()```
* Também podemos inserir parâmetros, em algumas funções são obrigatórios 
* Basicamente são valores que podem mudar o resultado da função 
* ```nomeDaFuncao(parametro1, parametro2)```

### Função built-in: prompt()
*  Recebe um input do usuário do sistema e pode guardar esse valor 
* Ex: ```let idade = prompt('Qual sua idade')```

### Função built-in: alert()
* Exibe uma mensagem na tela do usuário 
* Ex: ```alert("Veja essa mensagem!")```

### Função built-in: Math()
* Função utilizada para expressões / cálculos matemáticos
* Ex: ```let maiorNumero = Math.max(1,3,6,2)```
* Math.max : maior número 
* Math.ceil : arredonda para cima 
* Math.round : arredonda para baixo 

## Estruturas de controle
* Um programa é executado de cima para baixo 
* Com as estruturas podemos modelar o fluxo do programa 
* Ou seja, dependendo dos valores de statements e expressions podemos seguir caminhos diferentes 

### Estrutura condicional: if 
* O programa vai executar um bloco de código, SE algo acontecer 
* Onde algo é a condição imposta por um statement 
* Quer resultar em um boolean (true or false)
```javascript 
let idade = 19; 

if(idade > 18) {
    console.log('Pode entrar); 
}
```
### Estrutura condicional: else 
* Podemos executar um outro bloco de código, caso a instrução do if não seja atendida 
* Ou seja, SE NÃO EXECUTAR o bloco if, EXECUTE o bloco else. 
```javascript 
let nome = "Pedro"; 

if (nome == "João"){
    console.log("Seu nome é João"); 
} else { 
    console.log("O seu nome não é João"); 
}
```

### Estrutura condicional: else if 
* Ainda podemos encadear mais condições com o else if
* Ou seja, antes de executar um else, ou até mesmo sem ele, podemos verificar mais condições 
```javascript
let a = 5; 
let b = 3; 

if (a + b == 3) {
    console.log("O resultado é 3 ");
} else if (a == 4) {
    console.log("O valor de a é igual a 4"); 
} else if (b == 3) { 
    console.log("O valor de b é 3"); 
} else {
    console.log("Nenhuma das condições acima."); 
}
````

## Estruturas de repetição 
* A ideia é repetir uma ação até atingir uma condição 
* Ao invés de repetirmos o mesmo código várias vezes, criamos um statement que fará uma checagem em cada loop 

### Estrutura de repetição: while 
* Fará uma ação, até que a condição seja atingida 
* Precisamos realmente 'definir um fim' para o loop, para não termos o problema do loop infinito 

```javascript 
lex x = 10; 

while (x > 0){
    console.log(x); 
    x = x - 1; 
}
```

### Estrutura de repetição: do while 
* Semelhante ao while, porém a estrutura muda um pouco
* Quase não é utilizado 

```javascript
let y = 0; 

do { 
    console.log(y); 
    y = y + 1; 
} while ( y < 5); 
```

### Estrutura de repetição: for 
* Semelhante ao while, porém amplamente utilizado 
* É a estrutura mais fácil de entender

```javascript
    for (let numero = 2; numero < 100; numero = numero * 2) {
        console.log(`O número é ${numero}); 
    }
```

### Estrutura condicional: switch 
* Quando há necessidade de vários ifs, podemos utilizar o switch/case
* Para sair de um case podemos usar um break 
* Podemos inserir uma expressão default, para caso nenhum valor for correspondido 

```javascript

```