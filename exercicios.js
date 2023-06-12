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

  var resultado = "<strong>Array original:</strong><br/> " + numeros + "<br/><br/>" + 
                  "<strong>Array sem números repetidos:</strong><br/> " + numerosUnicos;

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

  var resultado = "<strong>Array original:</strong><br/> " + numeros + "<br/><br/>" +
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



//#endregion

//#region EXERCÍCIO 51 ~ 60

//#endregion