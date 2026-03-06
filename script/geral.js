function exercicio1() {
    alert ("CALCULADORA")
    const numero1 = Number(prompt("Digite um Número:"))
const numero2 = Number(prompt("Digite outro número"))
const resultado = (numero1+numero2)
alert("O RESULTADO DA SOMA É "+resultado)
}

const buttonExercicio1 = document.getElementById("exercicio1")
buttonExercicio1.addEventListener('click', () => { exercicio1() })

//ppppppppppppppppppppppppppppppp

function exercicio2() {
    alert ("RESPONDA AS PERGUNTAS")
    const valorHora = Number(prompt("QUANTO VOCÊ GANHA POR HORA?:"))
    const horasTrabalhadas = Number(prompt("QUANTAS HORAS VOCÊ TRABALHA POR DIA:"))
    const resultado = valorHora*horasTrabalhadas*30
    alert("SEU SALARIO NO FINAL DO MES SERA: " + resultado)
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })

//ppppppppppppppppppppppppppppp

function exercicio3() {
    alert ("PEGUE O PESO DE 5 PESSOAS E DESCUBRA UMA MÉDIA DE PESO ENTRE TODAS ELAS")


const peso1 = Number(prompt("PESO DA PRIMERIRA PEESOA:"))
const peso2 = Number(prompt("PESO DA SEGUNDA PESSOA:"))
const peso3 = Number(prompt("PESO DA TERCEIRA PESSOA:"))
const peso4 = Number(prompt("PESO DA QUARTA PESSOA:"))
const peso5 = Number(prompt("PESO DA QUINTA PESSOA:"))

const resultado = (peso1+peso2+peso3+peso4+peso5) /5

alert("A MEDIA DE PESO DAS 5 PESSOAS É "+resultado)
}

const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })

//PPPPPPPPPPPPPPPPPPPPPPPPPPPPP

function exercicio4() {
    alert ("RESPONDA AS PERGUNTAS")
    const graus = Number(prompt("GRAUS CELCIUS NA SUA CIDADE"))
const resultado4 = ((9*graus)+160/5)
alert("A TEMPERATURA NA SUA CIDADE EM FAHRENHEIT É "+resultado4)
}

const buttonExercicio4 = document.getElementById("exercicio4")
buttonExercicio4.addEventListener('click', () => { exercicio4() })


//pppppppppppppppppppppppp

function exercicio5() {
    const milhas = Number(prompt("DIGITE UMA DISTANCIA EM MILHAS"))
    const resultado5 = (milhas*1.6)
    alert("ESSA DISTANCIA EM KM É "+resultado5)
}

const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })

//pppppppppppppppppppppppppppp

function exercicio6() {
    const segundos = Number(prompt("DE NUMERO DE SEGUNDOS "))
    const resultado6 = (segundos/360)
    alert("ESSES SEGUNDOS EM HORAS SERÁ  "+resultado6)
}

const buttonExercicio6 = document.getElementById("exercicio6")
buttonExercicio6.addEventListener('click', () => { exercicio6() })

//pppppppppppppppppppppppppppppppppppp

function exercicio7() {
    const distancia7 = Number(prompt("DE UMA DISTANCIA EM KM"))
    const resultado7 = (distancia7*1000)
    alert("ESSA DISTANCIA EM METROS SERA "+resultado7)
}
const buttonExercicio7 = document.getElementById("exercicio7")
buttonExercicio7.addEventListener('click', () => { exercicio7() })

//pppppppppppppppppppppppppppp

function exercicio8() {
    const numero8 = Number(prompt("DIGITE QUALQUER NUMERO"))
    const r81 = (numero8*1)
    const r82 = (numero8*2)
     const r83 = (numero8*3)
      const r84 = (numero8*4)
       const r85 = (numero8*5)
        const r86 = (numero8*6)
         const r87 = (numero8*7)
          const r88 = (numero8*8)
           const r89 = (numero8*9)
            const r810 = (numero8*10)
alert("VEZES 1= "+r81)
alert("VEZES 2= "+r82)
alert("VEZES 3= "+r83)
alert("VEZES 4= "+r84)
alert("VEZES 5= "+r85)
alert("VEZES 6= "+r86)
alert("VEZES 7= "+r87)
alert("VEZES 8= "+r88)
alert("VEZES 9= "+r89)
alert("VEZES 10= "+r810)

}
const buttonExercicio8 = document.getElementById("exercicio8")
buttonExercicio8.addEventListener('click', () => { exercicio8() })