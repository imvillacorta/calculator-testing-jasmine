describe('Suite de testes de divisão', () => {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 dividindo 10 e 2', () => {
         expect(Calculadora.multiplicar(10, 2)).toEqual(20);
    });

    it('deve validar conversão de string para number', () => {
        expect(Calculadora.multiplicar('9', '2')).toEqual(18);
    });

    it('deve multiplicar valores quebrados', () => {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 quando param1 não for numero', () => {
        expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
    });

    it('deve retornar 0 quando param2 não for numero', () => {
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
    });

});