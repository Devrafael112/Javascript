/*var nome = "Rafael Ferreira";
var idade = 17;
var idade2= 18;
var frase= "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos" );
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2 )
console.log(frase.replace("Japão", "Brasil"));
alert("O JOGO")

var lista= ["maça", "pêra", "laranja" ];
//lista.push("uva")
//lista.pop();
console.log(lista.length);
alert(lista[1])
*/

//var fruta ={nome:"maça", cor: "vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);

/*var idade= prompt("Qual sua idade?")
if (idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/
/*var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
}

var count;
for (count0; count <= 5; count++){
    alert(count);
}
*/

/*var d= new Date();
alert(d.getHours())
alert(d.getMinutes())
*/

/*function soma(n1, n2){
    return n1 + n2;
}

function validade(idade){
    var validar;
    if(idade >= 18){
        validar=true
    }else{
        validar = false
    }
    return validar;
}

var idade= prompt("Qual sua idade");
console.log(validade(idade));
*/

function botao(){
    document.getElementById("agradecimento").innerHTML= "<b>O JOGO</b>" ;

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=ISw99SZk6xU");
    //window.location.href= ("https://www.youtube.com/watch?v=ISw99SZk6xU")
}

function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}




