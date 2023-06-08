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

//#endregion