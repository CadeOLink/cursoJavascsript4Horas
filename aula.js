//console.log("Olá mundo!!!")

// let idade = 12;
// console.log(idade);
// camelCase = idadeDeRoberto ou numeroDeRoberto

// let idade = 12;
// let cor = "black";
// let nome = "Roberto";
// console.log(idade,cor,nome);

// const valorIgressoAdulto = 20;
// "O valor de valorIgressoAdulto não é alterado por conta do const"
// console.log(valorIgressoAdulto);

// let nome = "Rafale" // srting literal
// let idade = 12; // number literal
// let estaAprovado = true; // boolean
// let sobrenome = undefined; // undefined
// let corSelecionada = null // vazio ou redefinir valor

// let pessoa = {
//    nome: "Roberto",
//    idade: 12,
//    sobreNome: "Caldeira"
// };
// console.log(pessoa);
// console.log(pessoa.nome,pessoa.sobreNome,pessoa.idade);

// let familia = ["Roberto", "Valquiria", "Everton", "Edison"];
// console.log(familia);
// console.log(familia[0]);
// "Um Array tbm é um objeto e tem funções de objetos"
// console.log(familia.length);

// "Métodos para nomear função = Verbo + Substantivo"
// let  corSite = "white";
// function resetaCor(){
//    corSite = null;
// };
// console.log(corSite);
// resetaCor();
// console.log(corSite);
// ========================================================
// let  corSite = "white";
// function resetaCor(cor){
//    corSite = cor;
// };
// console.log(corSite);
// resetaCor("Red");
// console.log(corSite);
// ========================================================
// let  corSite = "white";
// function resetaCor(cor, tonalidade){
//    corSite = cor + '' + tonalidade;
// };
// console.log(corSite);
// resetaCor("Red", "Escuro");
// console.log(corSite);

// "Função que somente realiza tarefa e não devolve nada"
// function dizerNome(){
//    console.log("Roberto");
// }
// dizerNome();
// "Função que realiza tarefas e devolve resultados"
// function multiplicarPorDois(valor){
//    return valor*2;
// }
// let resultado = multiplicarPorDois(6);
// console.log(resultado)

// "Operadores Aritiméticos(Matemáricos)"
// "Operadores de Atribuição"
// "Operadores de Igualidade"
// "Operadores Ternário"
// "Operadores de Comparação"
// "Operadores Lógicos"
// "Operadores Bitwise"

// "Operadores Aritiméticos(Matemáricos)"
// let salario = 1400;
// +, -, *, /, **
// console.log(salario + 200);
// console.log(salario - 200);
// console.log(salario / 200);
// console.log(salario * 200);
// console.log(salario ** 2);

// let idade =  12;
// console.log(++idade);
// console.log(--idade);
// console.log(--idade);

// "Operadores de Atribuição"
// let salario = 1400;
// console.log(salario);
// salario += salario;
// console.log(salario);
// salario -= salario;
// console.log(salario);

// "Operadores de Igualidade"
// Igualdade estrita, compara tipo 
// console.log( 1 === 1);
// console.log( "1" === 1);
// Igualdade solta, compara valores
// console.log( 1 == 1);
// console.log( "1" == 1);

// "Operadores Ternário"
// "Imaginamos um cliente, se ele tiver mais de 100 pontos é ouro, caso contrário é comum"
// let pontos = 100;
// let tipo = pontos > 100 ? "ouro" : "comum";
// console.log(tipo);

// "Operadores Lógicos"
// E, Ou, Não
// "E(&&) retorna TRUE se ambos os casos for verdade"
// console.log(true && true);
// console.log(false && true);
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);
// "Ou(||) retorna TRUE se algum dos casos for verdade"
// console.log(true || true);
// console.log(false || true);
// console.log(false || false);
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar);
// "Não(!) nega o caso ou inverte 
// console.log(!false);
// console.log(!true);

// Comparando não boleanos 
// Falsy são valores que geralmente são: undefined, null, 0, false, "", NaN
// Truthy são valores que geralmente são os restantes
// let corPersonalizada = "White";
// let corPadrao = "Red"
// let corSecundaria = null;
// let corPerfil = corPersonalizada || corPadrao;
// let corPerfil2 = corSecundaria || corPadrao;
// console.log(corPerfil);
// console.log(corPerfil2);

// Trocar os valores 
// let a = "Red";
// let b = "White";
// let c = a;
// a = b;
// b = c;
// console.log("A variavel a: "+a);
// console.log("A variavel b: "+b);

// If..Else
// Switch..Case

// If..Else
// 06h Até as 12h, Bom dia!
// 12h até as 18h, Boa tarde!
// Caso o contrário, Boa noite!
// let horas = 12;
// if( horas >= 6 && horas < 12 ){
//    console.log("Bom dia!");
// }else if( horas >= 12 && horas < 18 ){
//    console.log("Bom tarde!");
// }else{
//    console.log("Bom noite!");
// }

// Switch..Case
// let permissao = "comum";
// switch (permissao){
//    case "comum": 
//    console.log("Usuário Comum");
//    break;
//    case "gerente":
//    console.log("Usuário Gerente");
//    break;
//    case "diretor":
//    console.log("Usuário Diretor");
//    break;
//    default:
//    console.log("Usuário não reconhecido!");
// }

// Loop/ Laços 
// For
// While
// Do..while
// For..in
// For..of

// For
// for(let i = 0; i< 5; i++){
//    console.log("Estou aprendendo",i);
// }

// While loop
// let i = 5;
// while( i >= 1 ){
//    console.log("Estou apredendo", i);
//    i--;
// }

// Do..while
// let i = 0;
// do{
//    console.log("Estou apredendo", i);
//    i++;
// }while(i < 10);

// For in
// const pessoa = {
//    nome: "Roberto",
//    idade: 12
// };
// for(let indice in pessoa){
//    console.log(pessoa[indice])
// }

// For of
// const cores = ["red", "White", "Blue"];
// for(let indice of cores){
//    console.log(indice)
// }

// Escreva uma função que usa 2 números e retorna o maior entre eles
// function max(n1, n2){
//    if(n1 > n2){
//       console.log(n1)
//    }else if(n1 < n2){
//       console.log(n2)
//    }else{
//       console.log(n1, " e Iguais")
//    }
// }
// max(10,12);

// FizzBuzz
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5=> FizzBuzz
// Não divisivel por 3 ou 5 => Entrada 
// Não for número, não é número 
// function fizzBuzz(numero){
//    if( numero % 3 == 0 && numero % 5 == 0){
//       console.log("FizzBuzz");
//    }else if( numero % 3 == 0){
//       console.log("Fizz");
//    }else if( numero % 5 == 0){
//       console.log("Buzz");
//    }else if((numero % 3 != 0 && numero % 5 != 0) && typeof numero == typeof 1){
//       console.log("Entrada")
//    }else{
//       console.log("Não é um número")
//    }
// }
// fizzBuzz();

// VerificadorVelocidade
// VelocidadeMax até 70
// Cada 5km acima do limite, ganha um ponto na carteira
// Use o Math.Floor() para arrendondar os valores
// Caso pontos maior que 12 -> "Carteira suspensa"
// function verificadorVelocidade(Velocidade){
//    let pontos = Math.floor((Velocidade - 70)/5);
//    if( pontos <= 0){
//       console.log("Não há pontos na carteira")
//    }else if(pontos > 0 && pontos < 12){
//       console.log("Há"+" "+ pontos+" "+"pontos na carteira")
//    }else{
//       console.log("Carteira suspensa");
//    }
// }
// verificadorVelocidade(120);

// Impar ou par
// Indica quantos número vão ser lidos de 0 a x 
// função exibe o valor e se é par ou impar
// function imparOuPar(valor){
//    for(let i = 0; i <= valor; i++){
//       if( i % 2 == 0){
//          console.log(i+" "+"Par")
//       }else{
//          console.log(i+" "+"Impar")
//       }
//    }
// }
// imparOuPar(10);

// Criar um metódo para ler propriedades de um objeto e exibir soemente as propriedades do mtipo string que estão no objeto
// const film = {
//    titulo: "Vingadores",
//    ano: 2018,
//    diretor: "Roberto",
//    personagem: "Thor"
// }
// function exibirPropridades(obj){
//    for(let i in obj){
//       if(typeof obj[i] == typeof "String"){
//          console.log(obj[i]);
//       }
//    }
// }
// exibirPropridades(film);

// Criar uma função que some uma sequencia de numeros apenas multiplos de 3 e 5
// function somar(valor){
//    let cont = 0;
//    for(let i = 0; i <= valor; i++){
//       if( i % 3 == 0 || i % 5 == 0){
//          cont += i;
//       }
//    }
//    console.log(cont);
// }
// somar(10);

// Exercicio nota escolar
// Onter a media a partir de um array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// const array = [90,90,90];
// function media(Array){
//    let cont = 0;
//    for(let i in array){
//       cont += array[i];
//    }
//    let valorMedia = Math.floor(cont / Array.length);
//    if(valorMedia >= 0 && valorMedia <= 59){
//       console.log(valorMedia+ " F")
//    }else if(valorMedia > 59 && valorMedia <= 69){
//       console.log(valorMedia+ " D")
//    }else if(valorMedia > 69 && valorMedia <= 79){
//       console.log(valorMedia+ " C")
//    }else if(valorMedia > 79 && valorMedia <= 89){
//       console.log(valorMedia+ " B")
//    }else if(valorMedia > 89 && valorMedia <= 100){
//       console.log(valorMedia+ " A")
//    }else{
//       console.log("Erro")
//    }
// }
// media(array);

// Criar uma função que exibe a quantidade de * que aquela linha possui
// function exibirAsteriscos(linhas){
//    let asterisco = "*";
//    for(let i = 0; i <= linhas; i++){
//       console.log("");
//       for(let o = 0; o <= i; o++){
//          console.log(asterisco);
//       }
//    }
// }
// exibirAsteriscos(12);

// Função que exiba os números primos
// function primos(limite){
//    for(let i = 0; i <= limite; i++){
//       if( i == 2 || i == 3){
//          console.log(i)
//       }else if( i % 3 != 0 && i % 2 != 0){
//          console.log(i);
//       }
//    }
// }
// primos(12);

// Funcções de fábrica/Factory fuction
//  function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
//    return {
//       marcaCelular,
//       tamanhoTela,
//       capacidadeBateria,
//       ligar(){
//          console.log("Fazendo ligamento...")
//       }
//    }
//  }
//  const celular1 =  criarCelular("iphone", 6.5, 5000);
//  console.log(celular1)

// Função de construtor/Constructor functions
//  function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
//    this.marcaCelular = marcaCelular;
//    this.tamanhoTela = tamanhoTela;
//    this.capacidadeBateria = capacidadeBateria
//    this.ligar = function(){
//       console.log("Fazendo ligamento...")
//    }
// }
// const celular = new Celular("iphone", 5,5, 5000);
// console.log(celular)

// O Constructor functions e o Factory fuction fazem a mesma coisa, o que diferencia é o modo de fazer (Não há diferença na prática)

// Javascript dinâmico
// const mouse = {
//    cor: "black",
//    marca: "Razer"
// }
// mouse.velocidade = 5000;
// mouse.trocarDPI = function(){
//    console.log("Mudando DPI...")
// }
// delete mouse.velocidade;
// delete mouse.trocarDPI;
// console.log(mouse);

// Clonar objetos 
// Assign
// const celular = {
//    marcaCelular: "Iphone",
//    tamanhoTela:{
//       vertical: 155,
//       horizontal: 75
//    },
//    ligar : function(){
//       console.log("Fazendo o ligamento...")
//    }
// }
// const novoObjeto = Object.assign({/*Podemos adicionar mais métodos aqui*/ bateria: 5000}, celular);
// console.log(novoObjeto);
// {...}
// const objeto2 = {...celular};
// console.log(objeto2);

// Vendo mais sobre o método Math

// Tipos de String 
// Tipo primitivo
// const mensagem = "Minha primeira mensagem";
// Tipo objeto
// const outraMensagem = new String("Bom dia");
// Vendo algumas funções de string
// console.log(outraMensagem.length)
// console.log(outraMensagem[2])
// console.log(mensagem.includes("primeira"))
// console.log(mensagem.indexOf("primeira"))
// console.log(mensagem.replace("Minha", "sua"))
// console.log(mensagem.trim())
// console.log(mensagem.split(" "))

// Template literal
// const Mensagem = "Oi, essa é minha "primeira" mensagem";
// console.log(Mensagem);
// Objeto {}
// Boolean true,false
// String "",''
// Template ``
// const OutraMensagem = `Essa é outra mensagem de 
// "teste" e 'maior'

// Podem haver esse "Enter's" que não terá erro, como no "" ou ''`
// console.log(OutraMensagem)
// const amigo = "Rafael";
// const OutraMensagem2 = `Meu nome é Everton e sou amigo do ${amigo}`;
// console.log(OutraMensagem2)
// no ${} podemos colocar funções, variáveis e outros métodos

// Date / Datas
// const data1 = new Date();
// console.log(data1);
// const data2 = new Date("March 06 2019 09:30");
// console.log(data2);
// const  data3 = new Date(2019, 02, 06, 09, 30);
// console.log(data3)
// data3.setFullYear(2030);
// console.log(data3)

// Montador de Endereço
// Criar um onjeto endereço que contém:
// Rua, Cidade, Cep, Fuction exibir endereço
// const endereco = {
//    rua:'a',
//    cidade:'b',
//    cep: 'c'
//       }
// function ExibirEndereco(endereco){
//    for(let i in endereco){
//       console.log(i, endereco[i]);
//    }
// }
// ExibirEndereco(endereco);

// Igualdade de Objetos
// function endereco(rua, cidade, cep){
//    this.rua = rua,
//    this.cidade = cidade,
//    this.cep = cep
// }
// const endereco1 = new endereco('a',1,'c');
// const endereco2 = new endereco(3,2,'c');
// function SaoIguais(endereco1, endereco2){
//    for(let i in endereco1){
//       if( endereco1[i] == endereco2[i]){
//          console.log(endereco1[i]+"=="+endereco2[i])
//       }else if( endereco1[i] != endereco2[i]){
//          console.log(endereco1[i]+"!="+endereco2[i])
//       }
//       if( typeof endereco1[i] === typeof endereco2[i]){
//          console.log(endereco1[i]+"==="+endereco2[i]);
//       }else if( typeof endereco1[i] !== typeof endereco2[i]){
//          console.log(endereco1[i]+"!=="+endereco2[i]);
//       }
//    }
// }
// SaoIguais(endereco1, endereco2)

// Criar um objeto postagem
// titulo, mensagem, autor, vizualiações, array de comentários, estaaovivo
// function postagem(titulo,mensagem,autor,vizualiacoes,[autorComentario, resposta],estaaovivo){
//    this.autor = autor,
//    this.mensagem = mensagem,
//    this.titulo = titulo,
//    this.vizualiacoes = vizualiacoes
//    this.comentarios = [{autor:autorComentario, texto:resposta}],
//    this.estaaovivo = estaaovivo
// }
// let postagem1 = new postagem("a",'b','c',1,["everton", "verdade"],true);
// console.log(postagem1)

// Arrays
// Add novos elementos
// Encontrar elementos
// Remover elementos
// Dividir elementos
// Dividir arrays
// Combinar arrays

// adicionado elementos em arrays
// const numeros = [1,2,3];
// inicio
// numeros.unshift(0);
// console.log(numeros);
// meio
// numeros.splice(1,0,0.5);
// console.log(numeros);
// final
// numeros.push(4);
// console.log(numeros);

// encontrando elementos dentro de um array
// const numeros = [1,2,3,4,1];
// console.log(numeros.indexOf(2))
// console.log(numeros.indexOf(5))
// console.log(numeros.lastIndexOf(1))
// console.log(numeros.includes(2) != -1)
// console.log(numeros.includes(2))

// encontrando elementos dentro de um array mas tipo referencia
// const marcas = [
//    {id:1 , nome:'a'},
//    {id:2 , nome:'b'},
//    {id:3 , nome:'c'}
// ]
// console.log(marcas.find(function(marca){
//    return marca.nome == 'a'
// }))

// Arrow functions
//  const marcas = [
//     {id:1 , nome:'a'},
//     {id:2 , nome:'b'},
//     {id:3 , nome:'c'}
//  ]
//  console.log(marcas.find(marca => marca.nome == 'a'))

// Removendo elementos de arrays
// const numeros = [1,2,3,4,5,6];
// final
// console.log(numeros.pop())
// console.log(numeros)
// inicio
// console.log(numeros.shift())
// console.log(numeros)
// meio
// console.log(numeros.splice(2,1))
// console.log(numeros)

// Esvaziando arrays
// const numeros = [1,2,3,4,5,6];
// 1* caso
// numeros = []; // somente se o array for variavel ( Não sendo constante )
// 2* caso
// numeros.length = 0;
// console.log(numeros);
// 3* caso
// numeros.splice(0,numeros.length);
// console.log(numeros);
// 4* caso
// for(let i = 0; i = numeros.length; i++){
//    numeros.pop();
// }
// console.log(numeros);

// Combinando arrays ou dividi arrays
// const primeiro = [1,2,3];
// const segundo = [4,5,6];
// combinar
// console.log(primeiro.concat(segundo));
// dividir
// console.log(primeiro.slice(1));

// Operador Spread
// const primeiro = [1,2,3];
// const segundo = [4,5,6];
// console.log([...primeiro,"beterraba",...segundo]);
// const copia = [...primeiro,"Segundo",...segundo];
// console.log(copia);

// Foreach
// const numeros = [1,2,3,4,5,6]
// numeros.forEach((numero,i) => console.log(numero,i))
// é a mesma coisa que forOf

// Combinando array
// const numeros = [1,2,3,4,5,6];
// console.log(numeros.join("="));
// const frase = "Olá mundo!!!";
// console.log(frase.split(' '));
// console.log(frase.split(' ').join('-'));

// Recendo dados (input)
// let msg = prompt("Manda msg corno");
// if(msg != 0){
//    alert(msg+" Igual a paolaIsso")
// }

// Fazer um prompt e uma condicional retornando se a pessoa é menor ou maior de idade
// const Idade = Number(prompt("Qual a sua idade?"));
// if( Idade <= 17){
//    console.log(`Você tem ${Idade} anos, logo é menor de idade`)
// }else if( Idade > 17){
//    console.log(`Você tem ${Idade} anos, logo é maior de idade`)
// }

// Manipulação com DOM
// Desafio de segurança virtual
// let NomeDoConvidado, NomeDeQuemConvidou, Pesquisando;
// function FestaVip(){
//    NomeDoConvidado = document.getElementById("nome").value;
//    NomeDeQuemConvidou = document.getElementById("convidou").value;
//    Pesquisando = document.getElementById("esperando");
//    const convidados = ['Everton', 'Roberto', 'Amanda', 'Valquíria', 'Evelyn']
//    if(convidados.includes(NomeDoConvidado)){
//       Pesquisando.innerHTML = ("Pode entrar")
//    }else{
//       Pesquisando.innerHTML = ("Não pode entrar")
//    }
// }

// Termino do Curso, parabéns Everton

// Acrescimo, curso de ES6 
//Link:https://youtube.com/playlist?list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi&si=4sBarSz06efr3zE7

// prototipagem (Criar métodos para prototipos)
// function Animal(raca, som){
//    this.raca = raca;
//    this.som = som;
// }
// const Cachorro = new Animal("Pitbull", "Auau");
// const Gato = new Animal("Egpcio", "meaw");
// Animal.prototype.hello = function(){
//    console.log(`${this.som}, eu sou um ${this.raca}`)
// }
/* Feito com o Animal, o prototype, logo somente ele pode usar o metodo criado */

// Promises 
   // var defer = new Promise((resolve, reject) => {
   //    if(true){
   //       resolve(`Hello! it works!`)
   //    }else{
   //       reject(`Error!`)
   //    }
   //    })
   //    defer.then((data) => {
   //       console.log(data);
   //       return `foo`;
   //    }) .then((data) => console.log(data))
   //       .catch((err) => console.log(err))

   // Aplicação de múltiplas Promises   
   // const currency = new Promise((resolve, reject) => {
   //    setTimeout(() => {
   //       resolve({ currency: 'euro', value: 3.50})
   //    }, 2000);
   // })
   // const countries = new Promise((resolve, reject) => {
   //    resolve(['Irlamd', 'Engaland', 'Scotland']);
   // })
   // Promise
   //    .all([currency, countries])
   //    .then(x => console.log(x))
/* Este ocorrerá primeiro o race, pois, ele executará apenas o primeiro */ 
   // Promise 
   //    .race([currency, countries])
   //    .then(x => console.log(x))

   // Classes em Javascript
   // class Animal {
   // Tem que haver o método construtor 
   //    constructor(raca, som){
   //       this.raca = raca;
   //       this.som = som;
   //    }

   //    hello(){
   //       console.log(`${this.som}, eu sou um ${this.raca}`)
   //    }
   // Faz com que apenas a class possa usar esse método
   //    static info(){
   //       console.log(`This's a class to create animals`)
   //    }
   // é um método que funciona a partir de dados já inseridos 
   //    get name(){
   //       console.log(`${this.som}, sou um ${this.raca} e me chamo jake`)
   //    }
   // é um método que funciona a partir de dados que serão inseridos 
   //    set nickname(x){
   //       this.x = x;
   //    }
   // }
   // const dog = new Animal("Cachorro", "Auau");
   // const cat = new Animal("Gato", "Miauuuuu");

   // Extensão de classes (Ou subclasses)
   //    class Animal{
   //       constructor(name){
   //          this.name = name;
   //       }

   //       hello(){
   //          console.log(`I'm ${this.name}`);
   //       }
   //    }

   //Subclasse
   //    class Dog extends Animal{
   //       constructor(name,som){
   //          super(name); //Utiliza-se o super para trazer outras var de outras classes para subclasses
   //          this.som = som;
   //       }

   //       bark(){
   //          console.log(`${this.som}, i'm ${this.name}`);
   //       }
   //    }

   // const elefante = new Animal("Dumbo");
   // const Cachorro = new Dog("Jake", "Auau");

   // Symbol
   // let foo = Symbol("name");
   // let bar = Symbol("name");
   // console.log(foo === bar);
   // console.log(foo == bar);
   // const obj = {
   //    [Symbol('name')]: "Everton",
   //    [Symbol('idade')]: 21,
   //    cidade: "Imperatriz"
   // }
   // console.log(Object.keys(obj));
   // const symbols = Object.getOwnPropertySymbols(obj);
   // const data = symbols.map(sym => obj[sym])
   // console.log(data);

   // Generators // uma função normal, porém continua após o return( yield ) mas tem que ser chamado com .next
   // function* GenNames (){
   //    console.log("Primeiro Olá");
   //    yield 'Everton'; // Yield é um return, porém pode ser adicionado mais elementos nas próximas linhas e chamar que executará 
   //    console.log("Segundo Olá")
   //    yield 'Valquiria';
   //    console.log("Terceiro Olá");
   //    yield 'Evelyn';
   // }
   // const names = GenNames();
   // for(gen of names){
   //    console.log(names.next())
   // }
   // console.log(names.next())
   // console.log(names.next())
   // console.log(names.next())
   // console.log(names.next())

   // Proxy ( VEJA MAIS SOBRE PROXY, É MUITO IMPORTANTE )
   // let obj = {
   //    name: 'Everton',
   //    idade: 21
   // }
   // let proxy = new Proxy(obj, {
   //    get(target, name){
   //       console.log(`Alguém está pedindo o nome`);
   //       return target[name];
   //    },
   //    set(target, name, value){
   //       console.log(`Alguém está mudando o nome`);
   //       target[name] = value;
   //    }
   // })

   // Set
   // let MySet = new Set([`Everton`, `Sávio`, `Evelyn`])
   // MySet.add(`Valquiria`);
   // MySet.add(`Valquiria`); // Ele não adicona repetidos
   // MySet.delete(`Everton`);
   // console.log(MySet.has(`Everton`));
   // console.log(MySet.has(`Sávio`));
   // console.log(MySet[1]); // Não se usa índicies como array em Set
   // const  NewMySet = MySet.values();
   // for( names of NewMySet){
   //    console.log(names)
   // }

   // WeakSet
   // Muito similar ao Set, diferente do set, ele apenas pegar objetos e não conseguimos ver os valores, mudar os valores e se há algo dentro dos objetos
   // let obj1 = {
   //    name:"Everton",
   //    idade: 21
   // }
   // let obj2 = {
   //    name:"Evelyn",
   //    idade:17
   // }
   // let ws = new WeakSet([obj1,obj2])

   // Map 
   // Identico ao set
   // let m = new Map();
   // m.set(`Eveton`, 21);
   // m.set(`Evelyn`, 17)
   // m.set(`Sávio`, 20)

   // async/await
   //    async function getPosts(){
   //       try{
   //       const response = await fetch('https://api.github.com/users/CadeOLink')
   //       const post = await response.json();
   //       post.map(data => {console.log(post.title)});
   //    }
   //    catch(err){ //catch é o responsavel por detectar os erros
   //       console.log(err)
   //    }
   // }
   //    getPosts();

   // async function git(){
   //    const everton = fetch('https://api.github.com/users/CadeOLink').then(r => r.json());

   //    const promises = await Promise.all([everton]);
   //    console.log(promises)
   // }
   // git();

   // object.entries
   // const animals = {
   //    camelo: 2,
   //    cavalo: 1,
   //    macaco: 4
   // };
   // const animalsMap = new Map(Object.entries(animals));
   // console.log(animalsMap.size);
   // console.log(animalsMap.has('cavalo'));
   // console.log(animalsMap.get('camelo'));

   // obect.values
   // const animals = {
   //    camelo: 2,
   //    cavalo: 1,
   //    macaco: 4
   // };
   // console.log(Object.values(animals))

   // Fim do curso, parabéns Everton