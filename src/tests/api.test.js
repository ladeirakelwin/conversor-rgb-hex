import { assert, expect } from 'chai';
import { api } from '../services/api.js';

describe('Testes da rota /rgbToHex', () => {
	it('Se ocorreu tudo correto, retornar status 201', () => {
		api.post('rgbToHex', {
			red: 10,
			green: 20,
			blue: 40,
		}).then((res) => {
			expect(res.statusCode).to.equal(201);
		});
	});

	it('Se enviar valores corretos , retornar um objeto contendo red, green, blue', () => {
		api.post('rgbToHex', {
			red: 10,
			green: 20,
			blue: 40,
		}).then((res) => {
			expect(res.data).to.include.all.keys('red', 'green', 'blue');
		});

		api.post('rgbToHex', {
			red: 99,
			green: 220,
			blue: 192,
		}).then((res) => {
			expect(res.data).to.include.all.keys('red', 'green', 'blue');
		});
	});

	it('Se enviar valores incorretos, retornar um objeto contendo erro', () => {
		api.post('rgbToHex', {
			red: 256,
			green: 20,
			blue: 40,
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});

		api.post('rgbToHex', {
			red: 99,
			green: true,
			blue: 192,
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});

		api.post('rgbToHex', {
			red: -99,
			green: [],
			blue: 192,
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});

		api.post('rgbToHex', {
			red: '0000',
			green: [],
			blue: 192,
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});
	});

  it('Se enviar valores faltando, retornar um objeto contendo erro e status 400', () => {
		api.post('rgbToHex', {
			red: 255,
			green: 20,
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});

		api.post('rgbToHex', {
			green: true,
			blue: 192,
      orange: 8
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});

		api.post('rgbToHex', {
			red: 20,
			yellow: [],
			blue: 192,
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});
    
		api.post('rgbToHex', {
			red: '0000',
			green: [],
			blue: 192,
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});
	});
});

describe('Testes da rota /hexToRgb', () => {
	it('Se ocorreu tudo correto, retornar status 201', () => {
		api.post('hexToRgb', {
			red: "09",
			green: "f9",
			blue: "bb",
		}).then((res) => {
			expect(res.statusCode).to.equal(201);
		});
	});

	it('Se enviar valores corretos , retornar um objeto contendo red, green, blue', () => {
		api.post('hexToRgb', {
			red: "10",
			green: "20",
			blue: "40",
		}).then((res) => {
			expect(res.data).to.include.all.keys('red', 'green', 'blue');
		});

		api.post('hexToRgb', {
			red: "99",
			green: "ab",
			blue: "08",
		}).then((res) => {
			expect(res.data).to.include.all.keys('red', 'green', 'blue');
		});
	});

	it('Se enviar valores incorretos, retornar um objeto contendo erro', () => {
		api.post('hexToRgb', {
			red: 256,
			green: "20",
			blue: -40,
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});

		api.post('hexToRgb', {
			red: undefined,
			green: true,
			blue: 192,
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});

		api.post('hexToRgb', {
			red: "-99",
			green: [],
			blue: "*(",
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});

		api.post('hexToRgb', {
			red: '00',
			green: "99",
			blue: null,
		}).then((res) => {
			expect(res.data).to.have.property('erro');
		});
	});

  it('Se enviar valores faltando, retornar um objeto contendo erro e status 400', () => {
		api.post('hexToRgb', {
			red: "255",
			green: "20",
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});

		api.post('hexToRgb', {
			green: true,
			blue: 192,
      orange: 8
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});

		api.post('hexToRgb', {
			red: "20",
			yellow: [],
			blue: "192",
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});
    
		api.post('hexToRgb', {
			red: '0000',
			green: [],
			blue: 192,
		}).then((res) => {
			expect(res.statusCode).to.equal(400);
      expect(res.data).to.have.property('erro');
		});
	});
});

