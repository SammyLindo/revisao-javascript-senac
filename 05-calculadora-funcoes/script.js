/*
  EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  if ( a == 0 || b == 0) {
    return console.log ("Isso é um 0 poxa meu !!!")
  }
  else {
    return a / b
  }
}

function calcular(a, b, operacao) {
  if ( operacao === 'soma' ) {
    return somar(a,b)
  } else if ( operacao === 'subitrair' ) {
    return subtrair(a,b) 
  } else if ( operacao === 'multiplicar' ) {
    return multiplicar(a,b)
  } else if ( operacao === 'dividir' ) {
    return dividir(a,b)
  } else
  return console.log ("Não é uma operação")
}

// TODO:
// Faça alguns testes com calcular().
