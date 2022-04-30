describe('Suite de testes de adição', () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 somando 2 e 3', () => {
         expect(Calculadora.adicionar(2, 3)).toEqual(5);
    });

    it('deve validar conversão de string para number', () => {
        expect(Calculadora.adicionar('9', '-3')).toEqual(6);
    });

    it('deve somar valores quebrados', () => {
        expect(Calculadora.adicionar(2.5, 3)).toEqual(5.5);
    });

    it('deve retornar 0 quando param1 não for numero', () => {
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    });

    it('deve retornar 0 quando param2 não for numero', () => {
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    });

});