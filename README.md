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
* Ex: ```let maiorNumero = Math.max(1,3,6,2)````
* Math.max : maior número 
* Math.ceil : arredonda para cima 
* Math.round : arredonda para baixo 
