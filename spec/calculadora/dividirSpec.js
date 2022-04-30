describe('Suite de testes de divisão', () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 dividindo 10 e 2', () => {
         expect(Calculadora.dividir(10, 2)).toEqual(5);
    });

    it('deve validar conversão de string para number', () => {
        expect(Calculadora.dividir('9', '3')).toEqual(3);
    });

    it('deve dividir valores quebrados', () => {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it('deve retornar 0 quando param1 não for numero', () => {
        expect(Calculadora.dividir(undefined, 10)).toEqual(0);
    });

    it('deve retornar erro ao dividir por zero', () => {
        expect(Calculadora.dividir(10, 0)).toEqual('Erro');
        expect(Calculadora.dividir(10, '0')).toEqual('Erro');
    });

    it('deve retornar 0 quando param2 não for numero', () => {
        expect(Calculadora.dividir(10, undefined)).toEqual(0);
    });

});