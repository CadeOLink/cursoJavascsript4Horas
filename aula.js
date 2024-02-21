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