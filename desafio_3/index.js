// Definição da classe Heroi
class Heroi {
  // Construtor da classe Heroi
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para o herói atacar
  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou suas habilidades";
    }
    console.log(`O ${this.tipo} ${ataque}`);
  }
}

// Criando instâncias da classe Heroi e chamando o método atacar
let mago = new Heroi("Merlin", 1000, "mago");
mago.atacar();

let guerreiro = new Heroi("Conan", 35, "guerreiro");
guerreiro.atacar();

let monge = new Heroi("Bruce Lee", 32, "monge");
monge.atacar();

let ninja = new Heroi("Hattori Hanzo", 40, "ninja");
ninja.atacar();
