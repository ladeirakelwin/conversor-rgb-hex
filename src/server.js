import express from 'express';
import { hexadecimalParaRGB, rgbParaHexadecimal } from './index.js';

const app = express();
app.use(express.json());

const port = 8080;

app.post('/rgbToHex', (req, res) => {
	const { body } = req;
	const chavesDoBody = Object.keys(body);
	const bodyLimpo = Array.from(new Set(chavesDoBody))

	let contador = 0

	bodyLimpo.forEach((chave) => {
		if (['red', 'green', 'blue'].includes(chave)) {
			contador +=  1
		}
	})
	if (contador == 3) {
		res.status(201).send(rgbParaHexadecimal(body.red, body.green, body.blue));
		return
	}
	res.status(400).send({erro: 'Está faltando algum parâmetro'})
});

app.post('/hexToRgb', (req, res) => {
	const { body } = req;

	const chavesDoBody = Object.keys(body);
	const bodyLimpo = Array.from(new Set(chavesDoBody))

	let contador = 0

	bodyLimpo.forEach((chave) => {
		if (['red', 'green', 'blue'].includes(chave)) {
			contador +=  1
		}
	})
	if (contador == 3) {
		res.status(201).send(hexadecimalParaRGB( body.red, body.green, body.blue));
		return
	}
	res.status(400).send({erro: 'Está faltando algum parâmetro'})
});

app.listen(port, () => {
	console.log(`Serviço rodando na porta ${port}`);
});
