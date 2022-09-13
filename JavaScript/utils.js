export function calcIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

export function notNumber(value) {
  return isNaN(value) || value == '' // isNaN é uma função inerente ao javascript que retorna um boolean | true se o value não for um número e false se for um número | IMPORTANTE: nessa função isNaN(), se passarmos uma string vazia ('') ele também retorna um false, por isso arrumamos isso no segundo argumento após o OU (||)
}