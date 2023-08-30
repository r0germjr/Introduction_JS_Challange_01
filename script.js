const numberOne = Number(prompt(`Digite o primeiro número: `))
const numberTwo = Number(prompt(`Digite o segundo número: `))

const verifIfEvenOrOdd = (numberOne, numberTwo) => {
  sum = numberOne + numberTwo
  if (sum % 2 == 0) {
    alert(`A soma dos dois números é par: ${sum}`)
  } else {
    alert(`A soma dos dois números é ímpar: ${sum}`)
  }
}

const verifyIfEquals = (numberOne, numberTwo) => {
  if (numberOne == numberTwo) {
    console.log(`Os dois números inseridos são iguais`)
  } else {
    alert(`Os dois números inseridos são diferentes`)
  }
}

const doOperations = (numberOne, numberTwo) => {
  const operators = {
    soma: numberOne + numberTwo,
    subtração: numberOne - numberTwo,
    multiplicação: numberOne * numberTwo,
    divisão: numberOne / numberTwo,
    resto: numberOne % numberTwo
  }
  for (const [key, value] of Object.entries(operators)) {
    if (key == 'resto') {
      alert(`O ${key} da divisão dos dois números é: ${value} `)
    } else {
      alert(`A ${key} dos dois números é: ${value} `)
    }
  }
}

doOperations(numberOne, numberTwo);
verifIfEvenOrOdd(numberOne, numberTwo);
verifyIfEquals(numberOne, numberTwo);