import { assert, expect } from 'chai';
import { decimalParaHexadecimal, hexadecimalParaDecimal, rgbParaHexadecimal } from '../index.js';



// hexToDec
// verificando se está retornando o hexadecimal correto
// se retorna string
// hex tem q ser string
// hex não pode ter tamanho maior 2, nem menor 2
// hex não pode ser valor negativo

// hexToRGB
// caso tenha valores corretos, tem q retornar um objecto
// caso tenha valores corretos, tem q conter red e green e blue
// caso tenha um valor incorreto, retornar objecto com prop erro: string com o erro

describe('Testando conversão de decimal para hexadecimal', () => {

  it('verificando se está retornando o decimal correto', () => {
    assert.equal(decimalParaHexadecimal(10), '0a');
    assert.equal(decimalParaHexadecimal(220), 'dc');
    assert.equal(decimalParaHexadecimal(16), '10');
    assert.equal(decimalParaHexadecimal(32), '20');
    assert.equal(decimalParaHexadecimal(171), 'ab');
    assert.equal(decimalParaHexadecimal(157), '9d');
    assert.equal(decimalParaHexadecimal(48), '30');
    assert.equal(decimalParaHexadecimal(160), 'a0');
    assert.equal(decimalParaHexadecimal(192), 'c0');
  });

  it('se valor retornado é uma string', () => {
    expect(decimalParaHexadecimal(10)).to.be.a('string');
    expect(decimalParaHexadecimal(220)).to.be.a('string');
    expect(decimalParaHexadecimal(171)).to.be.a('string');
    expect(decimalParaHexadecimal(157)).to.be.a('string');
  })

  it('valor passado tem que ser um válido ', () => {
    assert.equal(decimalParaHexadecimal(4.2), 'Isso não é um valor válido');
    assert.equal(decimalParaHexadecimal('10'), 'Isso não é um valor válido');
    assert.equal(decimalParaHexadecimal(-220), 'Isso não é um valor válido');
    assert.equal(decimalParaHexadecimal('16'), 'Isso não é um valor válido');
    assert.equal(decimalParaHexadecimal(true), 'Isso não é um valor válido');
    assert.equal(decimalParaHexadecimal({}), 'Isso não é um valor válido');
    assert.equal(decimalParaHexadecimal(['10']), 'Isso não é um valor válido');
    assert.equal(decimalParaHexadecimal('*9'), 'Isso não é um valor válido');
  })

  it('verificar se o tamanho da string retornada é de 2 dígitos', () => {
    expect(decimalParaHexadecimal(10)).to.have.lengthOf(2)
    expect(decimalParaHexadecimal(220)).to.have.lengthOf(2)
    expect(decimalParaHexadecimal(16)).to.have.lengthOf(2)
    expect(decimalParaHexadecimal(192)).to.have.lengthOf(2)
    expect(decimalParaHexadecimal(160)).to.have.lengthOf(2)
    expect(decimalParaHexadecimal(171)).to.have.lengthOf(2)
    expect(decimalParaHexadecimal(157)).to.have.lengthOf(2)
    expect(decimalParaHexadecimal(77)).to.have.lengthOf(2)
  })
});

describe('testando conversão rgb para hexadecimal', () => {

  it('caso os valores sejam validos, tem que retornar um objeto', () => {
    expect(rgbParaHexadecimal(157, 171, 122)).to.be.a('object')
    expect(rgbParaHexadecimal(16, 32, 192)).to.be.a('object')
    expect(rgbParaHexadecimal(255, 122, 100)).to.be.a('object')
    expect(rgbParaHexadecimal(33, 99, 134)).to.be.a('object')
  });
  it('caso os valores forem validos, tem que conter red, green e blue', () => {
    expect(rgbParaHexadecimal(157, 166, 180)).to.include.all.keys('red', 'green', 'blue');
    expect(rgbParaHexadecimal(16, 32, 192)).to.include.all.keys('red', 'green', 'blue');
    expect(rgbParaHexadecimal(255, 122, 100)).to.include.all.keys('red', 'green', 'blue');
    expect(rgbParaHexadecimal(33, 99, 134)).to.include.all.keys('red', 'green', 'blue');
  });
  it('caso um ou mais valores sejam incorretos, retornar objeto com o campo erro', () => {
    expect(rgbParaHexadecimal(377, null, true)).to.have.property('erro');
    expect(rgbParaHexadecimal(888, false, 192)).to.have.property('erro');
    expect(rgbParaHexadecimal(455, 'string', 888)).to.have.property('erro');
    expect(rgbParaHexadecimal(-1, 4.9, 134)).to.have.property('erro');
    expect(rgbParaHexadecimal(90, 4.9, 134)).to.have.property('erro');

  });
});



