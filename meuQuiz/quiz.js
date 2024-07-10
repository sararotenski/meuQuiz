function finalizar() {

    let respostaUm = document.getElementById('perguntaUm')
    let respostaDois = document.getElementById('perguntaDois')
    let respostaTres = document.getElementById('perguntaTres')
    let somaResult
     



    if (respostaUm.value == "3" || respostaDois.value == "3" || respostaTres.value == "3") {

        alert("Algumas das respostas não foi preenchida! Preencha todas para obter sua pontuação.")
        
    }

    else {

        somaResult = Number(respostaUm.value) + Number(respostaDois.value) + Number(respostaTres.value)
        document.getElementById('inputResultado').value = somaResult;

        if (somaResult < 3) {

            alert("Quiz Finalizado! Confira sua pontuação :)")

        }

        else if (somaResult == 3) {

            alert("Quiz finalizado! Pontuação máxima alcançada, parabéns :)")

        }
 
    }

}
