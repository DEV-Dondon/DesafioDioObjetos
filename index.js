// Projeto Criado por Luciva Filho
// Definindo uma classe para representar um herói
class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

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
              ataque = "usou um ataque desconhecido";
      }

      console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Testando a classe com diferentes tipos de heróis
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar(); // Saída esperada: "O guerreiro atacou usando espada"

const heroi2 = new Heroi("Merlin", 50, "mago");
heroi2.atacar(); // Saída esperada: "O mago atacou usando magia"

const heroi3 = new Heroi("Bruce", 28, "monge");
heroi3.atacar(); // Saída esperada: "O monge atacou usando artes marciais"

const heroi4 = new Heroi("Hanzo", 35, "ninja");
heroi4.atacar(); // Saída esperada: "O ninja atacou usando shuriken"
