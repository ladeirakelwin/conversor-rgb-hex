const mapToDec = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
}

const mapToHex = {
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f',
}

export function decimalParaHexadecimal(dec) {
  const valoresInvalidos = ['', undefined, null]
  const valorEhDiferenteNumero = typeof dec !== 'number'
  const valorInvalidoDeRGB = dec < 0 || dec > 255
  const valorEhFloat = String(dec).includes('.')

  if (valorEhDiferenteNumero || valorInvalidoDeRGB || valorEhFloat)
    return 'Isso não é um valor válido'

  const result = dec / 16

  const ehInteiro = !String(result).includes('.')

  if (ehInteiro && result != dec) {
    const stringDec = String(result)
    if (result < 10) return stringDec + 0
    // if (result % 16 == 0) =
    return mapToHex[stringDec] + 0
  }

  const [inteiro, otherdecimal] = String(result).split('.')
  const decimal = Number('0.' + otherdecimal)

  const primeiroHex = Number(inteiro) < 10 ? inteiro : mapToHex[inteiro]
  const preSegundoHex = String(decimal * 16)
  const segundoHex =
    Number(preSegundoHex) < 10 ? preSegundoHex : mapToHex[preSegundoHex]

  return primeiroHex + segundoHex
}

export function rgbParaHexadecimal(red, green, blue) {
  if (decimalParaHexadecimal(red) === 'Isso não é um valor válido')
    return { erro: decimalParaHexadecimal(red) }
  if (decimalParaHexadecimal(green) === 'Isso não é um valor válido')
    return { erro: decimalParaHexadecimal(green) }
  if (decimalParaHexadecimal(blue) === 'Isso não é um valor válido')
    return { erro: decimalParaHexadecimal(blue) }
  return {
    red: decimalParaHexadecimal(red),
    green: decimalParaHexadecimal(green),
    blue: decimalParaHexadecimal(blue),
  }
}

export function hexadecimalParaDecimal(hexadecimal) {
  const valoresInvalidos = ['', undefined, null, '.', '-']
  if (
    hexadecimal.length > 2 ||
    typeof hexadecimal !== 'string' ||
    valoresInvalidos.includes(hexadecimal) ||
    hexadecimal.search(/\W/gi) !== -1
  )
    return 'Isso não é um valor válido'
  const hex = String(hexadecimal).toLowerCase()
  const letras = ['a', 'b', 'c', 'd', 'e', 'f']
  const [primeiroHex, segundoHex] = String(hex)
  const ehUmaLetra = value => letras.includes(value)
  const prePrimeiroHex = ehUmaLetra(primeiroHex)
    ? Number(mapToDec[primeiroHex])
    : Number(primeiroHex)
  const primeiroDec = prePrimeiroHex * 16

  const segundoDec = ehUmaLetra(segundoHex)
    ? Number(mapToDec[segundoHex])
    : Number(segundoHex)

  return String(primeiroDec + segundoDec)
}

export function hexadecimalParaRGB(red, green, blue) {
  if (hexadecimalParaDecimal(red) === 'Isso não é um valor válido')
    return { erro: hexadecimalParaDecimal(red) }
  if (hexadecimalParaDecimal(green) === 'Isso não é um valor válido')
    return { erro: hexadecimalParaDecimal(green) }
  if (hexadecimalParaDecimal(blue) === 'Isso não é um valor válido')
    return { erro: hexadecimalParaDecimal(blue) }
  return {
    red: hexadecimalParaDecimal(red),
    green: hexadecimalParaDecimal(green),
    blue: hexadecimalParaDecimal(blue),
  }
}

