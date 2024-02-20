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

