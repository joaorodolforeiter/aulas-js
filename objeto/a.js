let carro = {
  modelo: "fusca",
  ano: 1975,
  cor: "amarelo",
  velocidadeAtual: 100,
  acelerar: function (velocity) {
    carro.velocidadeAtual += velocity;
  },
  frear: function (velocity) {
    carro.velocidadeAtual -= velocity;
  },
};

carro.frear(50);
carro.acelerar(150);
console.log(carro);
