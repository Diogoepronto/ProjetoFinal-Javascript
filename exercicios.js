document.querySelectorAll("pre code").forEach((element) =>
  {
    let html = element.outerHTML
    let pattern = html.match(/\s*\n[\t\s]*/)

    element.outerHTML = html.replace(new RegExp(pattern, "g"),'\n')
  }
)

const code = document.querySelectorAll("pre code");
[...code].forEach(el => el.textContent = el.textContent.trim());

//-------------------------- FUNCTIONS --------------------------

//#region EXERCÍCIO 1 ~ 10

function exercicio1() {
    alert("É preciso fazer todos os exercícios para aprender");
}

function exercicio2() {
    var resposta = confirm("Deseja continuar a realizar os exercícios?");
    
    if (resposta) {
        alert("Bem escolhido");
    } else {
        alert("Já chega de JavaScript");
    }
}

function exercicio3() {
    var nomeFormando = prompt("Digite o nome do formando:");
    
    if (nomeFormando !== null && nomeFormando !== "") {
        var mensagem = "<mark>O Formando <strong>" + nomeFormando + "</strong> está aprovado</mark>";
        document.getElementById("mensagemExercicio3").innerHTML = mensagem;
        document.getElementById("mensagemExercicio3").classList.remove("hidden");
    }
}

function exercicio4() {
    var nomeFormando = document.getElementById("nomeEx4").value;
    var idadeFormando = document.getElementById("idadeEx4").value;
    
    var mensagem = "<mark>O Formando <strong>" + nomeFormando + "</strong> tem <strong>" + idadeFormando + "</strong> anos</mark>";
    document.getElementById("mensagemEx4").innerHTML = mensagem;
    document.getElementById("mensagemEx4").classList.remove("hidden");
}

function exercicio5(){
    var nomeFormando = prompt("Insira o seu nome:");
	var clubeFutebol = prompt("Insira o seu clube de futebol preferido:");

	console.log("Eu sou o " + nomeFormando + " e sou adepto do " + clubeFutebol);

    document.getElementById("mensagemEx5").classList.remove("hidden");
}

function exercicio6() {
    var nomeFormando = document.getElementById("nomeEx6").value;
    var estadoCivilFormando = document.getElementById("estadoCivilEx6").value;
    var idadeFormando = document.getElementById("idadeEx6").value;
    var alturaFormando = document.getElementById("alturaEx6").value;
    var socioFormando = document.getElementById("socioEx6").checked ? "Sim" : "Não";
    var emailFormando = document.getElementById("emailEx6").value;

    var mensagem =  "<ul>" +
                        "<li><strong>Nome:</strong> " + nomeFormando + "</li>" +
                        "<li><strong>Estado Civil:</strong> " + estadoCivilFormando + "</li>" +
                        "<li><strong>Idade:</strong> " + idadeFormando + "</li>" +
                        "<li><strong>Altura:</strong> " + alturaFormando + "</li>" +
                        "<li><strong>Sócio:</strong> " + socioFormando + "</li>" +
                        "<li><strong>Email:</strong> " + emailFormando + "</li>" +
                    "</ul>";
    
    document.getElementById("mensagemEx6").innerHTML = mensagem;
    document.getElementById("mensagemEx6").classList.remove("hidden");
}

function exercicio7() {
    var dataAtual = new Date();
	var dia = String(dataAtual.getDate()).padStart(2, "0");
	var mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
	var ano = dataAtual.getFullYear();

	var mensagem = "<strong>Data atual:</strong> " + dia + "/" + mes + "/" + ano;
	document.getElementById("dataAtualEx7").innerHTML = mensagem;
    document.getElementById("dataAtualEx7").classList.remove("hidden");
}

function exercicio8() {
    var dataAtual = new Date();
	var hora = dataAtual.getHours();

	var mensagem;

	if (hora >= 6 && hora < 12) {
	  mensagem = "<strong>Bom dia</strong>";
	} else if (hora >= 12 && hora < 18) {
	  mensagem = "<strong>Boa tarde</strong>";
	} else {
	  mensagem = "<strong>Boa noite</strong>";
	}

	document.getElementById("mensagemEx8").innerHTML = mensagem;
    document.getElementById("mensagemEx8").classList.remove("hidden");
}

function exercicio9() {
    window.print()
}

function exercicio10() {
    var enderecoURL = document.URL;
    document.getElementById("mensagemEx10").innerHTML = "<strong>" + enderecoURL + "</strong>";
    document.getElementById("mensagemEx10").classList.remove("hidden");
}

//#endregion

//#region EXERCÍCIO 11 ~ 20

function exercicio11(){
  var numero = parseInt(document.getElementById("numeroEx11").value);
	  
	if (numero > 0) {
	document.getElementById("mensagemEx11").innerHTML = "<strong>O número é positivo.</strong>";
	} else if (numero < 0) {
	document.getElementById("mensagemEx11").innerHTML = "<strong>O número é negativo.</strong>";
	} else {
	document.getElementById("mensagemEx11").innerHTML = "<strong>O número é zero.</strong>";
	}

  document.getElementById("mensagemEx11").classList.remove("hidden");
}

function exercicio12() {
  var numero1 = parseFloat(document.getElementById("num1Ex12").value);
  var numero2 = parseFloat(document.getElementById("num2Ex12").value);
  
  if (numero1 > numero2) {
    document.getElementById("mensagemEx12").innerHTML = "<strong>O primeiro número é maior.</strong>";
  } else if (numero2 > numero1) {
    document.getElementById("mensagemEx12").innerHTML = "<strong>O segundo número é maior.</strong>";
  } else {
    document.getElementById("mensagemEx12").innerHTML = "<strong>Os números são iguais.</strong>";
  }

  document.getElementById("mensagemEx12").classList.remove("hidden");
}

function exercicio13() {      
  var numeroAleatorio = Math.floor(Math.random() * 6) + 1;
  var totalPalpites = 0;
  
  while (true) {
    var palpite = parseInt(prompt("Digite o seu palpite (entre 1 e 6):"));
  
    if (isNaN(palpite) || palpite < 1 || palpite > 6) {
      alert("Palpite inválido! Por favor, digite um número entre 1 e 6.");
      continue;
    }
  
    totalPalpites++;

    var resultado = verificarPalpite(palpite, numeroAleatorio);
    if (resultado === "correto") {
      alert("Palpite correto!");
      document.getElementById("mensagemEx13").innerHTML = "<strong style='color:green;'>Você acertou!</strong> <br/>" +
                                                          "Total de palpites: " + totalPalpites;
      break;
    } else {
      var continuar = confirm("Palpite errado! \nDeseja fazer outro palpite?");
      if (continuar) {
        continue;
      }
      else{
        document.getElementById("mensagemEx13").innerHTML = "<strong style='color:red;'>Você perdeu!</strong> <br/>" +
                                                            "Total de palpites: " + totalPalpites;
        break;
      }
    }
  }    

  function verificarPalpite(palpite, numeroGerado) {
    if (palpite === numeroGerado) {
      return "correto";
    } else {
      return "errado";
    }
  }
}

function exercicio14() {
  var numero1 = verificarNumeroValido("primeiro");
  var numero2 = verificarNumeroValido("segundo");
  var numero3 = verificarNumeroValido("terceiro");
  
  var numerosOrdenados = [numero1, numero2, numero3];
  numerosOrdenados.sort(function(a, b) {
    return a - b;
  });
    
  var resultado = "<strong>Números em ordem crescente:</strong> " + numerosOrdenados.join(", ");
  
  document.getElementById("mensagemEx14").innerHTML = resultado;
  document.getElementById("mensagemEx14").classList.remove("hidden");

  function verificarNumeroValido(numero){
    var numero = parseFloat(prompt(`Digite o ${numero} número`));

    while (isNaN(numero)) {
      numero = parseFloat(prompt("Número inválido! \nDigite o número novamente"));
    }
    return numero;
  }
}

function exercicio15() {
  var numero1 = verificarNumeroValido("primeiro");
  var numero2 = verificarNumeroValido("segundo");
  var numero3 = verificarNumeroValido("terceiro");

  var distancia1 = Math.abs(100 - numero1);
  var distancia2 = Math.abs(100 - numero2);
  var distancia3 = Math.abs(100 - numero3);

  var resultado = "";

  if (distancia1 < distancia2 && distancia1 < distancia3) {
    resultado = "<strong>O número mais próximo de 100 é o primeiro número:</strong> " + numero1;
  } else if (distancia2 < distancia1 && distancia2 < distancia3) {
    resultado = "<strong>O número mais próximo de 100 é o segundo número:</strong> " + numero2;
  } else if (distancia3 < distancia1 && distancia3 < distancia2) {
    resultado = "<strong>O número mais próximo de 100 é o terceiro número:</strong> " + numero3;
  } else {
    resultado = "<strong>Os três números possuem a mesma distância de 100.</strong>";
  }

  document.getElementById("mensagemEx15").innerHTML = resultado;
  document.getElementById("mensagemEx15").classList.remove("hidden");

  function verificarNumeroValido(numero){
    var numero = parseFloat(prompt(`Digite o ${numero} número`));

    while (isNaN(numero)) {
      numero = parseFloat(prompt("Número inválido! \nDigite o número novamente"));
    }
    return numero;
  }
}

function exercicio16() {
  var nota = parseFloat(document.getElementById("notaEx16").value);
  var resultado = "";

  if (nota >= 0 && nota <= 5) {
  resultado = "Muito insuficiente";
  } else if (nota > 5 && nota <= 9.5) {
  resultado = "Insuficiente";
  } else if (nota > 9.5 && nota <= 14) {
  resultado = "Suficiente";
  } else if (nota > 14 && nota <= 16) {
  resultado = "Bom";
  } else if (nota > 16 && nota <= 20) {
  resultado = "Muito bom";
  } else {
  resultado = "Nota inválida. Digite um número entre 0 e 20.";
  }

  document.getElementById("mensagemEx16").innerHTML = "<strong>Nota qualitativa:</strong> " + resultado + "";
  document.getElementById("mensagemEx16").classList.remove("hidden");
}

function exercicio17() {
  var frase = document.getElementById("fraseEx17").value;
  var palavras = frase.split(" ");
  
  var novaFrase = palavras.filter(function(palavra) {
  return palavra.toLowerCase() !== "não";
  });
  
  var resultado = novaFrase.join(" ");
  
  document.getElementById("mensagemEx17").innerHTML = "<strong>" + resultado + "</strong>";
  document.getElementById("mensagemEx17").classList.remove("hidden");
}

function exercicio18() {
  var frase = document.getElementById("fraseEx18").value;
  var numeros = frase.match(/\d/g);
  var quantidade = numeros ? numeros.length : 0;
  
  var resultado = "Quantidade de caracteres numéricos: " + quantidade;
  
  document.getElementById("mensagemEx18").innerHTML = "<strong>" + resultado + "</strong>";
  document.getElementById("mensagemEx18").classList.remove("hidden");

}

function exercicio19() {
  var frase = document.getElementById("fraseEx19").value;
  var fraseInvertida = "";
  
  for (var i = frase.length - 1; i >= 0; i--) {
  fraseInvertida += frase[i];
  }
  
  document.getElementById("mensagemEx19").innerHTML = fraseInvertida;
  document.getElementById("mensagemEx19").classList.remove("hidden");
}

function exercicio20() {
  var taxaCambio = document.getElementById("cambioEx20").value;
  var valorEmEuros = document.getElementById("euroEx20").value;
  var valorEmDolares = (valorEmEuros * taxaCambio).toFixed(2);
  
  var resultado = "<strong>" + valorEmEuros + " EUR = " + valorEmDolares + " USD" + "</strong>";
  
  document.getElementById("mensagemEx20").innerHTML = resultado;
  document.getElementById("mensagemEx20").classList.remove("hidden");
}
//#endregion

//#region EXERCÍCIO 21 ~ 30
function exercicio21() {
	var numero = document.getElementById("numEx21").value;
	var numeroNegativo = -Math.abs(numero);

  var resultado = "<strong>" + "O número " + numero + " convertido em negativo é: " + numeroNegativo + "</strong>";
  
  document.getElementById("mensagemEx21").innerHTML = resultado;
  document.getElementById("mensagemEx21").classList.remove("hidden");
}

function exercicio22() {
  var valorTotal = document.getElementById("valorEx22").value;
  var porcentagemImposto = document.getElementById("impostoEx22").value;

  var valorImposto = (valorTotal * porcentagemImposto) / 100;
  var valorSemImposto = valorTotal - valorImposto;
  
  var resultado = "<strong>" +
                  "Valor sem o imposto: " + valorSemImposto.toFixed(2) + " €" + "<br/>" +
                  "Valor do imposto: " + valorImposto.toFixed(2) + " €" +
                  "</strong>";

  document.getElementById("mensagemEx22").innerHTML = resultado;
  document.getElementById("mensagemEx22").classList.remove("hidden");
}

function exercicio23() {
  var valorSemImposto = parseFloat(document.getElementById("valorEx23").value);
  var porcentagemImposto = parseFloat(document.getElementById("impostoEx23").value) / 100;

  var valorComImposto = (valorSemImposto + (valorSemImposto * porcentagemImposto));
  
  var resultado = "<strong>" +
                  "Valor com imposto: " + valorComImposto.toFixed(2) + " €" +
                  "</strong>";

  document.getElementById("mensagemEx23").innerHTML = resultado;
  document.getElementById("mensagemEx23").classList.remove("hidden");
}

function exercicio24() {
  var quantidadeCaracteres = document.getElementById("qtdCharEx24").value;
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var senha = '';
  
  for (var i = 0; i < quantidadeCaracteres; i++) {
    var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }
  
  document.getElementById("mensagemEx24").innerHTML = "<strong>Senha gerada: </strong>" + senha;
  document.getElementById("mensagemEx24").classList.remove("hidden");
}

function exercicio25() {
  var min = 1;
  var max = 1000;
  const range = max - min + 1;  
  
  var numeros = [];
  
  for (var i = 0; i < 100; i++) {
    const randomNumber = Math.floor(Math.random() * range) + min;
    numeros.push(randomNumber);
  }
  
  var maiorNumero = numeros[0];
  
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }

  var arrayAExibir = "<table class='table table-sm table-borderless'><tbody>";
  var contador = 0;

  for (var i = 0; i < numeros.length; i++){
    if (contador == 0){
      arrayAExibir += "<tr>"
    }
    
    arrayAExibir += "<td>" + numeros[i] + "</td>";
    
    contador++;

    if (contador == 10){
      arrayAExibir += "</tr>"
      contador = 0;
    }
  }

  arrayAExibir += "</tbody></table>";

  var resultado = arrayAExibir + 
                  "<strong>" +
                  "O maior número do array é: " + maiorNumero +
                  "</strong>";
  
  document.getElementById("mensagemEx25").innerHTML = resultado;
  document.getElementById("mensagemEx25").classList.remove("hidden");
}

function exercicio26() {
  var min = 1;
  var max = 1000;
  const range = max - min + 1;  
  
  var numeros = [];
  
  for (var i = 0; i < 100; i++) {
    const randomNumber = Math.floor(Math.random() * range) + min;
    numeros.push(randomNumber);
  }
  
  var menorNumero = numeros[0];
  
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }

  var arrayAExibir = "<table class='table table-sm table-borderless'><tbody>";
  var contador = 0;

  for (var i = 0; i < numeros.length; i++){
    if (contador == 0){
      arrayAExibir += "<tr>"
    }
    
    arrayAExibir += "<td>" + numeros[i] + "</td>";
    
    contador++;

    if (contador == 10){
      arrayAExibir += "</tr>"
      contador = 0;
    }
  }

  arrayAExibir += "</tbody></table>";

  var resultado = arrayAExibir + 
                  "<strong>" +
                  "O menor número do array é: " + menorNumero +
                  "</strong>";
  
  document.getElementById("mensagemEx26").innerHTML = resultado;
  document.getElementById("mensagemEx26").classList.remove("hidden");
}

function exercicio27() {
  var distanciaPercorrida = document.getElementById("distanciaEx27").value;
  var combustivelConsumido = document.getElementById("combustivelEx27").value;
  
  var consumoMedio = distanciaPercorrida / combustivelConsumido;

  var resultado = "<strong>" +
                  "O consumo médio de combustível é: " + consumoMedio.toFixed(2) + " km/l" +
                  "</strong>";

  document.getElementById("mensagemEx27").innerHTML = resultado;
  document.getElementById("mensagemEx27").classList.remove("hidden");
}

function exercicio28() {
  var num1 = document.getElementById("num1Ex28").value;
  var num2 = document.getElementById("num2Ex28").value;

  var maior = Math.max(num1, num2);
  var menor = Math.min(num1, num2);

  var diferenca = maior - menor;

  var resultado = "<strong>" +
                  "A diferença entre o maior e o menor valor é: " + diferenca +
                  "</strong>";

  document.getElementById("mensagemEx28").innerHTML = resultado;
  document.getElementById("mensagemEx28").classList.remove("hidden");
}

function exercicio29() {
  var frequenciaNumeros = [0, 0, 0, 0, 0, 0];
  var totalLancamentos = 35000;

  for (var i = 0; i < totalLancamentos; i++) {
    var numero = Math.floor(Math.random() * 6) + 1;

    frequenciaNumeros[numero - 1]++;
  }

  var resultado = "";

  for (var j = 0; j < frequenciaNumeros.length; j++) {
    resultado += "<strong>Número " + (j + 1) + ": </strong>" + frequenciaNumeros[j] + "<br/>";
  }

  document.getElementById("mensagemEx29").innerHTML = resultado;
  document.getElementById("mensagemEx29").classList.remove("hidden");
}

function exercicio30() {
  var input = prompt("Digite uma string:");

	if (!isNaN(input)) {
	  alert("É um número!");
	} else {
	  alert("Erro: não é um número!");
	}
}
//#endregion

//#region EXERCÍCIO 31 ~ 40
function exercicio31() {
  var senha = document.getElementById("senhaEx31").value;
	var confirmacaoSenha = document.getElementById("confirmaSenhaEx31").value;

  var resultado = "";

	if (senha === confirmacaoSenha) {
	  resultado = "<strong style='color: green;'>Senhas coincidem!</span>";
	} else {
	  resultado = "<strong style='color: red;'>Erro: as senhas não coincidem!</span>";
	}

  document.getElementById("mensagemEx31").innerHTML = resultado;
  document.getElementById("mensagemEx31").classList.remove("hidden");
}

function exercicio32() {
  var canvas = document.getElementById("myCanvasEx32");
	var context = canvas.getContext("2d");

	var x = 10;
	var y = 0;
	var width = 150;
	var height = 75;

	context.fillStyle = "blue";
	context.fillRect(x, y, width, height);

  document.getElementById("myCanvasEx32").style.display = "block";
}

function exercicio33() {
  var canvas = document.getElementById("myCanvasEx33");
	var context = canvas.getContext("2d");

	var x = 100;
	var y = 100;
	var radius = 50;

	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.fillStyle = "red";
	context.fill();
	context.closePath();

  document.getElementById("myCanvasEx33").style.display = "block";
}

function exercicio34() {
  var email = prompt("Digite o endereço de email:");

	var resultado = "<strong>Endereço de email com metade escondida:</strong> <br/>";

  const atIndex = email.indexOf("@");
  
  if (atIndex > 1) {
    const nomeUtilizador = email.substr(0, atIndex);
    const dominio = email.substr(atIndex);
    
    const nomeUtilizadorEscondido = nomeUtilizador.substr(0, nomeUtilizador.length / 2) + "......";
    resultado += nomeUtilizadorEscondido + dominio;
  }
  else{
    resultado = "<strong>Endereço de email inválido</strong>"
  }  

  document.getElementById("mensagemEx34").innerHTML = resultado;
  document.getElementById("mensagemEx34").classList.remove("hidden");
}

function exercicio35() {
  var nome = prompt("Digite o seu nome:");

  var resultado = "<strong>Nome completo:</strong> " + nome + "<br/>" +
                  "<strong>Última letra do nome:</strong> " + nome[nome.length - 1] + "<br/>" +
                  "<strong>Da primeira letra até a terceira:</strong> " + nome.substring(0, 3) + "<br/>" +
                  "<strong>Todas as letras menos a primeira:</strong> " + nome.substring(1) + "<br/>" +
                  "<strong>Duas últimas letras:</strong> " + nome.substring(nome.length - 2) + "<br/>" +
                  "<strong>Nomes separados por espaços:</strong> " + nome.split("").join(" ");

  document.getElementById("mensagemEx35").innerHTML = resultado;
  document.getElementById("mensagemEx35").classList.remove("hidden");
}

function exercicio36() {
  var numLinhas = prompt("Digite o número de linhas:");
	numLinhas = parseInt(numLinhas);

  var resultado = "";

	for (var i = 1; i <= numLinhas; i++) {
	  var linha = "";

	  for (var j = 1; j <= i; j++) {
		  linha += "* ";
	  }

    linha += "<br/>";

    resultado += linha;
	}

  document.getElementById("mensagemEx36").innerHTML = resultado;
  document.getElementById("mensagemEx36").classList.remove("hidden");
}

function exercicio37() {
  var numero = prompt("Digite um número:");
	numero = parseInt(numero);

	var soma = 0;

	for (var i = 1; i <= numero; i++) {
	  soma += i;
	}

  soma = soma.toLocaleString(undefined);

  var resultado = "<strong>A soma dos números de 1 até " + numero + " é: " + soma + "</strong>";

	document.getElementById("mensagemEx37").innerHTML = resultado;
  document.getElementById("mensagemEx37").classList.remove("hidden");
}

function exercicio38() {
  var resultado = "<strong>Todos os múltiplos de 3 entre 1 e 100:</strong> <br/>";

  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      resultado += i == 99 ? i : i + ", ";
    }
  }

  document.getElementById("mensagemEx38").innerHTML = resultado;
  document.getElementById("mensagemEx38").classList.remove("hidden");
}

function exercicio39() {
  var data = new Date(document.getElementById("dataEx39").value);
  
  document.getElementById("mensagemEx39").innerHTML = "Mês por extenso: <strong>" + data.toLocaleString('default', { month: 'long' }) + "</strong>";
  document.getElementById("mensagemEx39").classList.remove("hidden");
}

function exercicio40() {
  var horaEntrada = document.getElementById("horarioEntradaEx40").value;
  var horaSaida = document.getElementById("horarioSaidaEx40").value;

  var resultado = "";

  if (horaEntrada < horaSaida){
    resultado = "<strong>Hora de entrada:</strong> " + horaEntrada + "<br/>" +
                "<strong>Hora de saída:</strong> " + horaSaida;
  } else {
    resultado = "<strong style='color: red;'>Horário inválido!</strong>";
  }

  document.getElementById("mensagemEx40").innerHTML = resultado;
  document.getElementById("mensagemEx40").classList.remove("hidden");
}
//#endregion

//#region EXERCÍCIO 41 ~ 50
function exercicio41() {
  var data = new Date(document.getElementById("dataEx41").value);
  
  var resultado = "Dia da semana: <strong>" + data.toLocaleString('default', { weekday: 'long' }) + "</strong>";

  document.getElementById("mensagemEx41").innerHTML = resultado;
  document.getElementById("mensagemEx41").classList.remove("hidden");
}

function exercicio42() {
  var dataAtual = new Date();
  var dataNascimento = new Date(document.getElementById("dataNascimentoEx42").value);
  
  var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  
  var diaAtual = dataAtual.getDate();
  var diaNascimento = dataNascimento.getDate();
  var mesAtual = dataAtual.getMonth();
  var mesNascimento = dataNascimento.getMonth();
    
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
  }

  document.getElementById("mensagemEx42").innerHTML = "<strong>Idade:</strong> " + idade;
  document.getElementById("mensagemEx42").classList.remove("hidden");
}

function exercicio43(){
  var valorArtigo = Math.floor(Math.random() *  1000);
  var numConcorrentes = 3;
  var palpitesConcorrentes = [];
  var proximidadePalpites = [];

  for (var i = 0; i < numConcorrentes; i++){
    palpitesConcorrentes.push(prompt(`Jogador ${i+1} \nDê o seu palpite:`));
  }

  for (var i = 0; i < numConcorrentes; i++) {
    if (palpitesConcorrentes[i] <= valorArtigo) {
      proximidadePalpites[i] = Math.abs(valorArtigo - palpitesConcorrentes[i]);
    } else {
      proximidadePalpites[i] = null;
    }
  }

  var valorMaisProximo = Math.min(...proximidadePalpites);
  var ganhador = proximidadePalpites.indexOf(valorMaisProximo);

  var resultado = "";  

  if (ganhador === -1){
    resultado = "Não houve ganhadores";
  } else {
    resultado = "Valor do artigo: " + valorArtigo + "<br/>" +
                "Ganhador: Concorrente " + (ganhador + 1) + "<br/>" +
                "Palpite: " + palpitesConcorrentes[ganhador] + "<br/>" +
                "Distância para o valor do artigo: " + proximidadePalpites[ganhador];
  }

  document.getElementById("mensagemEx43").innerHTML = resultado;
  document.getElementById("mensagemEx43").classList.remove("hidden");
}


function exercicio44() {
  var candidatos = [
    {
      nome: 'Candidato 1',
      votos: 0
    },
    {
      nome: 'Candidato 2',
      votos: 0
    },
    {
      nome: 'Candidato 3',
      votos: 0
    }
  ];

  for (var i = 0; i < candidatos.length; i++){
    candidatos[i].votos = document.getElementById(`candidato${i+1}Ex44`).value;
  }

  var maxVotos = Math.max.apply(Math, candidatos.map(function(c) { return c.votos; }));

  var indiceVencedores = [];

  for (var i = 0; i < candidatos.length; i++){
    if (candidatos[i].votos == maxVotos){

      indiceVencedores.push(i);
    }
  }

  var resultado = "";

  if (indiceVencedores.length === 1){
    resultado = "O candidato vencedor é o:<br/> <strong>" + candidatos[indiceVencedores[0]].nome + "</strong>";
  } else {
    var vencedores = indiceVencedores.map(function (indice) {
      return candidatos[indice].nome;
    })

    resultado = "Os seguintes candidatos empataram no primeiro lugar:<br/><strong>" + vencedores.join("<br/>") + "</strong>";
  }

  document.getElementById("mensagemEx44").innerHTML = resultado;
  document.getElementById("mensagemEx44").classList.remove("hidden");
}

function exercicio45() {
  var numeros = [];
  for (var i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 10) + 1);
  }

  var ocorrencias = {};

  for (var i = 0; i < numeros.length; i++) {
  var numero = numeros[i];

  if (ocorrencias[numero]) {
      ocorrencias[numero]++;
    } else {
      ocorrencias[numero] = 1;
    }
  }
  
  var arrayAExibir = "<table class='table table-sm table-borderless text-center'><tbody>";
  var contador = 0;

  for (var i = 0; i < numeros.length; i++){
    if (contador == 0){
      arrayAExibir += "<tr>"
    }
    
    arrayAExibir += "<td>" + numeros[i] + "</td>";
    
    contador++;
    
    if (contador == 10){
      arrayAExibir += "</tr>"
      contador = 0;
    }
  }
  
  arrayAExibir += "</tbody></table>";
  var resultado = arrayAExibir;

  for (var numero in ocorrencias) {
    resultado += "O número " + numero + " ocorre " + ocorrencias[numero] + " vezes.<br/>";
  }

  document.getElementById("mensagemEx45").innerHTML = resultado;
  document.getElementById("mensagemEx45").classList.remove("hidden");
}

function exercicio46() {
  var numeros = [];
  for (var i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 50) + 1);
  }

  var numerosUnicos = [];

  for (var i = 0; i < numeros.length; i++) {
    var numero = numeros[i];

    if (numerosUnicos.indexOf(numero) === -1) {
      numerosUnicos.push(numero);
    }
  }

  var resultado = "<strong>Array original:</strong><br/> " + numeros.join(", ") + "<br/><br/>" + 
                  "<strong>Array sem números repetidos:</strong><br/> " + numerosUnicos.join(", ");

  document.getElementById("mensagemEx46").innerHTML = resultado;
  document.getElementById("mensagemEx46").classList.remove("hidden");
}

function exercicio47() {
  var numeros = [];
  for (var i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
  }

  var contador = {};
  var numeroMaisFrequente;
  var frequenciaMaxima = 0;

  for (var i = 0; i < numeros.length; i++) {
    var numero = numeros[i];
    contador[numero] = (contador[numero] || 0) + 1;
  }

  for (var numero in contador) {
    if (contador[numero] > frequenciaMaxima) {
      frequenciaMaxima = contador[numero];
      numeroMaisFrequente = numero;
    }
  }

  var resultado = "<strong>Array original:</strong><br/> " + numeros.join(", ") + "<br/><br/>" +
                  "<strong>Número mais frequente:</strong><br/> " + numeroMaisFrequente;

  document.getElementById("mensagemEx47").innerHTML = resultado;
  document.getElementById("mensagemEx47").classList.remove("hidden");
}


function exercicio48(numero) {
  var numero = parseInt(prompt("Digite um número maior que 1000:"));
  var resultado = "Resultado: ";
  
  if (isNaN(numero) || numero < 1000) {
    resultado = "<strong style='color: red;'>Valor inválido. <br/>" + 
                "O número deve ser maior que 1000.</strong>";
  } else {    
    var numeroString = numero.toString();
  
    for (var i = 0; i < numeroString.length; i++) {
      resultado += numeroString[i];
  
      if (numeroString[i] % 2 === 0 && numeroString[i + 1] % 2 === 0) {
        resultado += "-";
      }
    }
  }  

  document.getElementById("mensagemEx48").innerHTML = resultado;
  document.getElementById("mensagemEx48").classList.remove("hidden");
}



function exercicio49() {
  var array1 = [];
  var array2 = [];
  
  for (var i = 0; i < 10; i++) {
    array1.push(Math.floor(Math.random() * 20) + 1);
    array2.push(Math.floor(Math.random() * 20) + 1);
  }

  var arraySomado = [];

  for (var i = 0; i < array1.length; i++) {
    arraySomado.push(array1[i] + array2[i]);
  }

  var resultado = "Array 1 = [" + array1.join(", ") + "] <br/>" + 
                  "Array 2 = [" + array2.join(", ") + "] <br/>" + 
                  "Resultado = [" + arraySomado.join(", ") + "]";

  document.getElementById("mensagemEx49").innerHTML = resultado;
  document.getElementById("mensagemEx49").classList.remove("hidden");
}


function exercicio50() {
  var matriz = [];
  
  for (var i = 0; i < 10; i++) {
    var linha = [];
  
    for (var j = 0; j < 10; j++) {
      linha.push(Math.floor(Math.random() * 100) + 1)
    }
  
    matriz.push(linha);
  }

  var matrizAExibir = "<table class='table table-sm table-borderless text-center'><tbody>";
  for (var linha of matriz) {
    matrizAExibir += "<tr>"

    for (var elemento of linha) {
      matrizAExibir += "<td>" + elemento + "</td>";
    }

    matrizAExibir += "</tr>"
  }  
  matrizAExibir += "</tbody></table>";

  var quantidade = 0;

  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz.length; j++) {
      if (matriz[i][j] >= 10 && matriz[i][j] <= 20) {
        quantidade++;
      }
    }
  }

  var resultado = "<p>Matriz:</p>" +
                  matrizAExibir +
                  "<p>Quantidade de elementos entre 10 e 20: " + quantidade + "</p>";

  document.getElementById("mensagemEx50").innerHTML = resultado;
  document.getElementById("mensagemEx50").classList.remove("hidden");
}


//#endregion

//#region EXERCÍCIO 51 ~ 60

function exercicio51() {
	var frase = document.getElementById("fraseEx51").value;

  var regex = /[^\w\s]/gi;

  var textoSemEspeciais = frase.replace(regex, '');

  document.getElementById("mensagemEx51").innerHTML = "<strong>" + textoSemEspeciais + "</strong>";
  document.getElementById("mensagemEx51").classList.remove("hidden");
}

function exercicio52() {
	var numDecimal = parseFloat(document.getElementById("decimalEx52").value);
  var numBinario = numDecimal.toString(2);
  
  var resultado = "<strong>Decimal:</strong> " + numDecimal + "<br/>" +
                  "<strong>Binário:</strong> " + numBinario;

  document.getElementById("mensagemEx52").innerHTML = resultado;
  document.getElementById("mensagemEx52").classList.remove("hidden");
}

function exercicio53() {
  var letrasHex = '0123456789ABCDEF';
  var cor = '#';

  for (var i = 0; i < 6; i++) {
    var indice = Math.floor(Math.random() * 16);
    cor += letrasHex[indice];
  }

  document.getElementById("main-wrapper").style.background = cor;
}

function exercicio54() {
  var cor = document.getElementById("seletorCorEx54").value;
  var paragrafo = document.getElementById("mensagemEx54");
  paragrafo.style.background = cor;
}

function exercicio55() {
  var linhas = parseInt(prompt("Digite o número de linhas da tabela:"));
  var colunas = parseInt(prompt("Digite o número de colunas da tabela:"));

  if (isNaN(linhas) || isNaN(colunas) || linhas < 0 || colunas < 0){
    document.getElementById('mensagemEx55').innerHTML = "<strong style='color:red;'>Valor inválido.<br/>" +
                                                        "Por favor, digite um número maior que zero.</strong>";
    return;
  }
  
  var tabela = document.createElement("table");
  var tBody = document.createElement("tbody");
  tabela.appendChild(tBody);

  for (var i = 0; i < linhas; i++) {
    var linha = document.createElement("tr");
  
    for (var j = 0; j < colunas; j++) {
      var coluna = document.createElement("td");
      coluna.textContent = "Linha " + (i + 1) + ", Coluna " + (j + 1);
      linha.appendChild(coluna);
    }
  
  tBody.appendChild(linha);
  }

  tabela.classList.add("table", "table-hover");
  
  document.getElementById('mensagemEx55').innerHTML = "";
  document.getElementById('mensagemEx55').appendChild(tabela);
}

//---Exercício 56

function gerarTabelaEx56() {
  var tabela = document.createElement("table");
  var tBody = document.createElement("tbody");
  tabela.appendChild(tBody);

  for (var i = 0; i < 3; i++) {
    var linha = document.createElement("tr");
  
    for (var j = 0; j < 3; j++) {
      var coluna = document.createElement("td");
      coluna.id = "celula-" + (i+1) + "-" + (j+1);
      linha.appendChild(coluna);
    }
  
  tBody.appendChild(linha);
  }

  tabela.classList.add("table", "table-bordered", "table-hover");
  
  document.getElementById('mensagemEx56').innerHTML = "";
  document.getElementById('mensagemEx56').appendChild(tabela);
}

function preencherCelulaEx56() {
  var linha = document.getElementById("linhaEx56").value;
  var coluna = document.getElementById("colunaEx56").value;
  var texto = document.getElementById("textoAInserirEx56").value;
  
  var celula = document.getElementById("celula-" + linha + "-" + coluna);

  if(celula == null){
    alert("É necessário gerar a tabela primeiro!");
    return;
  }
  
  celula.textContent = texto;
}

//---Exercício 57

function exercicio57() {
  document.body.setAttribute("onresize", "exercicio57()");
  
  var altura = window.innerHeight;
  var largura = window.innerWidth;

  var infoElemento = document.getElementById("mensagemEx57");
  infoElemento.innerHTML = "<strong>Altura:</strong> " + altura + "px <br>" + 
                           "<strong>Largura:</strong> " + largura + "px";
}


function exercicio58() {
  var array = [];
  for (var i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  var arrayOrdenado = [...array];

  for (var i = 0; i < arrayOrdenado.length - 1; i++) {
    for (var j = 0; j < arrayOrdenado.length - 1 - i; j++) {
      if (arrayOrdenado[j] > arrayOrdenado[j + 1]) {
        var temp = arrayOrdenado[j];
        arrayOrdenado[j] = arrayOrdenado[j + 1];
        arrayOrdenado[j + 1] = temp;
      }
    }
  }

  var resultado = "<p><strong>Array original:</strong><br> " + array.join(", ") + "</p>" +
                  "<p><strong>Array ordenado:</strong><br> " + arrayOrdenado.join(", ") + "</p>";

  document.getElementById("mensagemEx58").innerHTML = resultado;
  document.getElementById("mensagemEx58").classList.remove("hidden");
}

function exercicio59() {
  var array = [];
  for (var i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  var arrayOrdenado = [...array];

  for (var i = 1; i < arrayOrdenado.length; i++) {
    var key = arrayOrdenado[i];
    var j = i - 1;

    while (j >= 0 && arrayOrdenado[j] > key) {
      arrayOrdenado[j + 1] = arrayOrdenado[j];
      j = j - 1;
    }

    arrayOrdenado[j + 1] = key;
  }

  var resultado = "<p><strong>Array original:</strong><br> " + array.join(", ") + "</p>" +
                  "<p><strong>Array ordenado:</strong><br> " + arrayOrdenado.join(", ") + "</p>";

  document.getElementById("mensagemEx59").innerHTML = resultado;
  document.getElementById("mensagemEx59").classList.remove("hidden");
}


function exercicio60() {
  var array = [];
  for (var i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  var arrayOrdenado = [...array];

  for (var i = 0; i < arrayOrdenado.length - 1; i++) {
    var minIndex = i;

    for (var j = i + 1; j < arrayOrdenado.length; j++) {
      if (arrayOrdenado[j] < arrayOrdenado[minIndex]) {
        minIndex = j;
      }
    }

    var temp = arrayOrdenado[i];
    arrayOrdenado[i] = arrayOrdenado[minIndex];
    arrayOrdenado[minIndex] = temp;
  }

  var resultado = "<p><strong>Array original:</strong><br> " + array.join(", ") + "</p>" +
                  "<p><strong>Array ordenado:</strong><br> " + arrayOrdenado.join(", ") + "</p>";

  document.getElementById("mensagemEx60").innerHTML = resultado;
  document.getElementById("mensagemEx60").classList.remove("hidden");
}

//#endregion

//#region JOGO DE APOSTAS

function startRace(){
  
  var corredor1 = document.getElementById("corredor1");
  var corredor2 = document.getElementById("corredor2");
  var corredor3 = document.getElementById("corredor3");
  
  var linhaDePartida = 1;
  var linhaDeChegada = (document.getElementById("jogo").offsetWidth * 0.6) - corredor1.offsetWidth - 5;
    
  var aposta1 = parseFloat(document.getElementById("txtbet1").value);
  var aposta2 = parseFloat(document.getElementById("txtbet2").value);
  var aposta3 = parseFloat(document.getElementById("txtbet3").value);
  
  var vitorias1 = parseInt(document.getElementById("vitoria1").innerHTML);
  var vitorias2 = parseInt(document.getElementById("vitoria2").innerHTML);
  var vitorias3 = parseInt(document.getElementById("vitoria3").innerHTML);
  
  var creditos = document.getElementById("creditos").innerHTML;
  
  if((aposta1 == "" && aposta2 == "" && aposta3 == "") ||
  (aposta1 == 0  && aposta2 == 0  && aposta3 == 0)){
    alert("Por favor, faça a sua aposta");
    return;
  }
  
  if (aposta1 == "") { aposta1 = 0 }
  if (aposta2 == "") { aposta2 = 0 }
  if (aposta3 == "") { aposta3 = 0 }
  
  if((aposta1 + aposta2 + aposta3) > creditos){
    alert("O valor máximo que pode apostar é " + creditos);
    return;
  }

  document.getElementById("btnIniciarJogo").disabled = true;

  creditos = parseFloat(creditos) - (aposta1 + aposta2 + aposta3);

  document.getElementById("creditos").innerHTML = creditos ;

  corredor1.src = "./assets/images/sonic-run.gif";
  corredor2.src = "./assets/images/tails-run.gif";
  corredor3.src = "./assets/images/knuckles-run.gif";  

  let posCorredor1 = linhaDePartida;
  let posCorredor2 = linhaDePartida;
  let posCorredor3 = linhaDePartida;
  
  var timer = setInterval(frame, 20);
  
  function frame(){
    let distanciaPercorrida1 = document.getElementById("metros1");
    let distanciaPercorrida2 = document.getElementById("metros2");
    let distanciaPercorrida3 = document.getElementById("metros3");

    posCorredor1 += (5 * Math.random());
    posCorredor2 += (5 * Math.random());
    posCorredor3 += (5 * Math.random());
    
    corredor1.style.left = posCorredor1 + "px";
    corredor2.style.left = posCorredor2 + "px";
    corredor3.style.left = posCorredor3 + "px";

    distanciaPercorrida1.innerHTML = Math.round((posCorredor1 * 100) / linhaDeChegada) + "/100";
    distanciaPercorrida2.innerHTML = Math.round((posCorredor2 * 100) / linhaDeChegada) + "/100";
    distanciaPercorrida3.innerHTML = Math.round((posCorredor3 * 100) / linhaDeChegada) + "/100";

    if (posCorredor1 >= linhaDeChegada){
        vitorias1++;
        document.getElementById("vitoria1").innerHTML = vitorias1;
        document.getElementById("creditos").innerHTML = creditos + (aposta1 * 2);
        
        alert("Vencedor: Corredor 1 🔵");
        clearInterval(timer);

        fimDeJogo();
    }

    if (posCorredor2 >= linhaDeChegada){
      vitorias2++;       
      document.getElementById("vitoria2").innerHTML = vitorias2;
      document.getElementById("creditos").innerHTML = creditos + (aposta2 * 2);

      alert("Vencedor: Corredor 2 🟡");
      clearInterval(timer);

      fimDeJogo();
    }

    if (posCorredor3 >= linhaDeChegada){
      vitorias3++
      document.getElementById("vitoria3").innerHTML = vitorias3;
      document.getElementById("creditos").innerHTML = creditos + (aposta3 * 2);
      
      alert("Vencedor: Corredor 3 🔴");
      clearInterval(timer);

      fimDeJogo();
    }    
  }
}

function fimDeJogo(){
  var corredor1 = document.getElementById("corredor1");
  var corredor2 = document.getElementById("corredor2");
  var corredor3 = document.getElementById("corredor3");

  corredor1.src = "./assets/images/sonic-idle.gif";
  corredor2.src = "./assets/images/tails-idle.gif";
  corredor3.src = "./assets/images/knuckles-idle.gif";

  document.getElementById("btnIniciarJogo").disabled = false;
}

//#endregion