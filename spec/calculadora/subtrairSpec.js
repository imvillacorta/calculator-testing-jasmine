describe('Suite de testes de subtração', () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 subtraindo 8 e 3', () => {
         expect(Calculadora.subtrair(8, 3)).toEqual(5);
    });

    it('deve validar conversão de string para number', () => {
        expect(Calculadora.subtrair('9', '3')).toEqual(6);
    });

    it('deve subtrair valores quebrados', () => {
        expect(Calculadora.subtrair(5.5, 3)).toEqual(2.5);
    });

    it('deve retornar 0 quando param1 não for numero', () => {
        expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
    });

    it('deve retornar 0 quando param2 não for numero', () => {
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    });

});