import { assert, expect } from 'chai'
import {
  decimalParaHexadecimal,
  hexadecimalParaDecimal,
  hexadecimalParaRGB,
  rgbParaHexadecimal,
} from '../index.js'


describe('Testando conversão de decimal para hexadecimal', () => {
  it('verificando se está retornando o decimal correto', () => {
    assert.equal(decimalParaHexadecimal(10), '0a')
    assert.equal(decimalParaHexadecimal(220), 'dc')
    assert.equal(decimalParaHexadecimal(16), '10')
    assert.equal(decimalParaHexadecimal(32), '20')
    assert.equal(decimalParaHexadecimal(171), 'ab')
    assert.equal(decimalParaHexadecimal(157), '9d')
    assert.equal(decimalParaHexadecimal(48), '30')
    assert.equal(decimalParaHexadecimal(160), 'a0')
    assert.equal(decimalParaHexadecimal(192), 'c0')
  })

  it('se valor retornado é uma string', () => {
    expect(decimalParaHexadecimal(10)).to.be.a('string')
    expect(decimalParaHexadecimal(220)).to.be.a('string')
    expect(decimalParaHexadecimal(171)).to.be.a('string')
    expect(decimalParaHexadecimal(157)).to.be.a('string')
  })

  it('valor passado tem que ser um válido ', () => {
    assert.equal(decimalParaHexadecimal(4.2), 'Isso não é um valor válido')
    assert.equal(decimalParaHexadecimal('10'), 'Isso não é um valor válido')
    assert.equal(decimalParaHexadecimal(-220), 'Isso não é um valor válido')
    assert.equal(decimalParaHexadecimal('16'), 'Isso não é um valor válido')
    assert.equal(decimalParaHexadecimal(true), 'Isso não é um valor válido')
    assert.equal(decimalParaHexadecimal({}), 'Isso não é um valor válido')
    assert.equal(decimalParaHexadecimal(['10']), 'Isso não é um valor válido')
    assert.equal(decimalParaHexadecimal('*9'), 'Isso não é um valor válido')
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
})

describe('testando conversão rgb para hexadecimal', () => {
  it('caso os valores sejam validos, tem que retornar um objeto', () => {
    expect(rgbParaHexadecimal(157, 171, 122)).to.be.a('object')
    expect(rgbParaHexadecimal(16, 32, 192)).to.be.a('object')
    expect(rgbParaHexadecimal(255, 122, 100)).to.be.a('object')
    expect(rgbParaHexadecimal(33, 99, 134)).to.be.a('object')
  })
  it('caso os valores forem validos, tem que conter red, green e blue', () => {
    expect(rgbParaHexadecimal(157, 166, 180)).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
    expect(rgbParaHexadecimal(16, 32, 192)).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
    expect(rgbParaHexadecimal(255, 122, 100)).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
    expect(rgbParaHexadecimal(33, 99, 134)).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
  })
  it('caso um ou mais valores sejam incorretos, retornar objeto com o campo erro', () => {
    expect(rgbParaHexadecimal(377, null, true)).to.have.property('erro')
    expect(rgbParaHexadecimal(888, false, 192)).to.have.property('erro')
    expect(rgbParaHexadecimal(455, 'string', 888)).to.have.property('erro')
    expect(rgbParaHexadecimal(-1, 4.9, 134)).to.have.property('erro')
    expect(rgbParaHexadecimal(90, 4.9, 134)).to.have.property('erro')
  })
})

describe('testando conversão hexadecimal para decimal', () => {
  it('verificando se o valor retornado está correto', () => {
    assert.equal(hexadecimalParaDecimal('0a'), '10')
    assert.equal(hexadecimalParaDecimal('dc'), '220')
    assert.equal(hexadecimalParaDecimal('10'), '16')
    assert.equal(hexadecimalParaDecimal('20'), '32')
    assert.equal(hexadecimalParaDecimal('ab'), '171')
    assert.equal(hexadecimalParaDecimal('9d'), '157')
    assert.equal(hexadecimalParaDecimal('30'), '48')
    assert.equal(hexadecimalParaDecimal('a0'), '160')
    assert.equal(hexadecimalParaDecimal('c0'), '192')
  })

  it('verificando se o valor retornado é uma string', () => {
    assert.equal(hexadecimalParaDecimal(4.2), 'Isso não é um valor válido')
    assert.equal(hexadecimalParaDecimal('true'), 'Isso não é um valor válido')
    assert.equal(hexadecimalParaDecimal(-220), 'Isso não é um valor válido')
    assert.equal(hexadecimalParaDecimal(false), 'Isso não é um valor válido')
    assert.equal(hexadecimalParaDecimal(true), 'Isso não é um valor válido')
    assert.equal(hexadecimalParaDecimal({}), 'Isso não é um valor válido')
    assert.equal(hexadecimalParaDecimal(['10']), 'Isso não é um valor válido')
    assert.equal(hexadecimalParaDecimal('*9'), 'Isso não é um valor válido')
  })

  it('verificando se o valor hexadecimal é uma string', () => {
    expect(hexadecimalParaDecimal('10')).to.be.a('string')
    expect(hexadecimalParaDecimal('220')).to.be.a('string')
    expect(hexadecimalParaDecimal('171')).to.be.a('string')
    expect(hexadecimalParaDecimal('157')).to.be.a('string')
    expect(hexadecimalParaDecimal('16')).to.be.a('string')
    expect(hexadecimalParaDecimal('256')).to.be.a('string')
    expect(hexadecimalParaDecimal('-1')).to.be.a('string')
  })
})
// hexToRGB
// caso tenha valores corretos, tem q retornar um objecto
// caso tenha valores corretos, tem q conter red e green e blue
// caso tenha um valor incorreto, retornar objecto com prop erro: string com o erro
describe('testando conversão hexadecimal para rgb', () => {
  it('caso os valores sejam validos, tem que retornar um objeto', () => {
    expect(hexadecimalParaRGB('15', '17', '99')).to.be.a('object')
    expect(hexadecimalParaRGB('16', 'bc', 'c0')).to.be.a('object')
    expect(hexadecimalParaRGB('25', 'a4', 'ab')).to.be.a('object')
    expect(hexadecimalParaRGB('33', '98', '13')).to.be.a('object')
  })
  it('caso os valores forem validos, tem que conter red, green e blue', () => {
    expect(hexadecimalParaRGB('25', 'a4', 'ab')).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
    expect(hexadecimalParaRGB('33', '98', '13')).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
    expect(hexadecimalParaRGB('ab', '54', '44')).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
    expect(hexadecimalParaRGB('15', '17', '99')).to.include.all.keys(
      'red',
      'green',
      'blue',
    )
  })
  it('caso um ou mais valores sejam incorretos, retornar objeto com o campo erro', () => {
    expect(hexadecimalParaRGB(377, null, true)).to.have.property('erro')
    expect(hexadecimalParaRGB(888, false, '19')).to.have.property('erro')
    expect(hexadecimalParaRGB(455, 'string', '88')).to.have.property('erro')
    expect(hexadecimalParaRGB(-1, 4.9, 13)).to.have.property('erro')
    expect(hexadecimalParaRGB(90, 4.9, 134)).to.have.property('erro')
  })
})
