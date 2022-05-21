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

function decimalParaHexadecimal(dec) {
	const result = dec / 16;

	const ehInteiro = !String(result).includes('.');

	if (ehInteiro) {
		const stringDec = String(result);
		if (result < 10) return 0 + stringDec;
		return mapToHex[stringDec];
	}

	const [inteiro, otherdecimal] = String(result).split('.');
	const decimal = Number('0.' + otherdecimal);

	const primeiroHex = Number(inteiro) < 10 ? inteiro : mapToHex[inteiro];
	const preSegundoHex = String(decimal * 16);
	const segundoHex = Number(preSegundoHex) < 10 ? preSegundoHex : mapToHex[preSegundoHex];

	return primeiroHex + segundoHex;
}

function rgbParaHexadecimal(red, green, blue) {
	return {
		red: decimalParaHexadecimal(red),
		green: decimalParaHexadecimal(green),
		blue: decimalParaHexadecimal(blue),
	};
}

function hexadecimalParaDecimal(hexadecimal) {
	const valoresInvalidos = ['', undefined, null];
	if (
		hexadecimal.length > 2 ||
		String(hexadecimal).includes('-') ||
		valoresInvalidos.includes(hexadecimal)
	)
		return 'Isso não é um valor válido';
	const hex = String(hexadecimal).toLowerCase();
	const letras = ['a', 'b', 'c', 'd', 'e', 'f'];
	const [primeiroHex, segundoHex] = String(hex);
	const ehUmaLetra = (value) => letras.includes(value);
	const prePrimeiroHex = ehUmaLetra(primeiroHex)
		? Number(mapToDec[primeiroHex])
		: Number(primeiroHex);
	const primeiroDec = prePrimeiroHex * 16;

	const segundoDec = ehUmaLetra(segundoHex) ? Number(mapToDec[segundoHex]) : Number(segundoHex);

	return String(primeiroDec + segundoDec);
}

function hexadecimalParaRGB(red, green, blue) {
	return {
		red: hexadecimalParaDecimal(red),
		green: hexadecimalParaDecimal(green),
		blue: hexadecimalParaDecimal(blue),
	};
}

module.exports = {
	hexadecimalParaDecimal,
	hexadecimalParaRGB,
	decimalParaHexadecimal,
	rgbParaHexadecimal,
};
