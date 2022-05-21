const mapToDec = {
	a: 10,
	b: 11,
	c: 12,
	d: 13,
	e: 14,
	f: 15,
};

const mapToHex = {
	10: 'a',
	11: 'b',
	12: 'c',
	13: 'd',
	14: 'e',
	15: 'f',
};

function decToHex(dec) {
  const result = dec / 16;

  const isInt =  (!String(result).includes('.'))

  if (isInt) {
    const stringDec = String(result)
    if (result < 10) return 0 + stringDec
    return mapToHex[stringDec]
  }

  const [inteiro, otherdecimal] =  String(result).split('.')
  const decimal = Number('0.'+otherdecimal)

  const primeiroHex = Number(inteiro) < 10 ? inteiro : mapToHex[inteiro];
  const preSegundoHex = String(decimal * 16)
  const segundoHex = Number(preSegundoHex) < 10 ? preSegundoHex : mapToHex[preSegundoHex]

  return primeiroHex + segundoHex

}

function rgbToHex(red, green, blue) {
  return "#" + decToHex(red) + decToHex(green) + decToHex(blue)
}

