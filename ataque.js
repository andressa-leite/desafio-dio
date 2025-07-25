// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

function iniciarAtaque(nome, idade, tipo) {
  const heroi = new Heroi(nome, idade, tipo);
  heroi.atacar();
}

iniciarAtaque("Arthas", 30, "guerreiro");
iniciarAtaque("Jaina", 28, "mago");
iniciarAtaque("Shen", 25, "ninja");
iniciarAtaque("Tenzin", 40, "monge");