// Função para calcular o saldo de partidas ranqueadas e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
  var saldoVitorias = vitorias - derrotas;
  var nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldoVitorias: saldoVitorias, nivel: nivel };
}

// Exemplo de uso da função com valores de vitórias e derrotas
var vitorias = 75;
var derrotas = 25;

var resultado = calcularNivel(vitorias, derrotas);
console.log(
  "O Herói tem um saldo de " +
    resultado.saldoVitorias +
    " está no nível de " +
    resultado.nivel
);
