import express from 'express';
import { hexadecimalParaRGB, rgbParaHexadecimal } from './index.js';

const app = express();
app.use(express.json());

const port = 8080;

app.post('/rgbToHex', (req, res) => {
	const { body } = req;

	res.send(rgbParaHexadecimal(body.red, body.green, body.blue));
});

app.post('/hexToRgb', (req, res) => {
	const { body } = req;

	res.send(hexadecimalParaRGB( body.red, body.green, body.blue));
});

app.listen(port, () => {
	console.log(`Serviço rodando na porta ${port}`);
});
