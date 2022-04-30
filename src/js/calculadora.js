var Calculadora = {

    adicao: '+',
    subtracao: '-',
    divisao: '/',
    multiplicacao: '*',

    adicionar: function (num1, num2) {
        return Calculadora.calcular(num1, num2, Calculadora.adicao);
    },
    subtrair: function (num1, num2) {
        return Calculadora.calcular(num1, num2, Calculadora.subtracao);
    },
    dividir: function (num1, num2) {
          if (num2 == 0) {
            return 'Erro'
        }

        return Calculadora.calcular(num1, num2, Calculadora.divisao);
    },
    multiplicar: function (num1, num2) {
        return Calculadora.calcular(num1, num2, Calculadora.multiplicacao);
    },

    calcular: function (num1, num2, operacao) {

        var resultado = 0;

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (isNaN(num1) || isNaN(num2)) {
            return 0;
        }

        switch (operacao) {
            case Calculadora.adicao:
                resultado = num1 + num2;
                break;

            case Calculadora.subtracao:
                resultado = num1 - num2;
                break;

            case Calculadora.divisao:
                resultado = num1 / num2;
                break;

            case Calculadora.multiplicacao:
                resultado = num1 * num2;
                break;

            default:
                resultado = 0;
                break;
        }

        return resultado;
    }
};

// USADO NA FUNÇÃO REQUIRE DO NOJEJS
if (typeof module !== 'undefined'
    && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}