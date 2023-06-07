document.querySelectorAll("pre code").forEach((element) =>
    {
        let html = element.outerHTML
        let pattern = html.match(/\s*\n[\t\s]*/)

        element.outerHTML = html.replace(new RegExp(pattern, "g"),'\n')
    }
)

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
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    
    var numerosOrdenados = [numero1, numero2, numero3];
    numerosOrdenados.sort(function(a, b) {
      return a - b;
    });
    
    var resultado = "Números em ordem crescente: " + numerosOrdenados.join(", ");
    
    document.getElementById("resultado").innerHTML = resultado;
  }

//#endregion